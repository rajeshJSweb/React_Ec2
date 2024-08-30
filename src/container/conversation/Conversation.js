/*eslint-disable*/
import { Form, Spin, Switch, message } from 'antd';
import axios from 'axios';
import FeatherIcon from 'feather-icons-react';
import React, { useEffect, useRef, useState } from 'react';
import { API } from '../../config/api';
import { generateSessionId } from '../../utility/generateSessionId';
import { messageChips } from '../../utility/messageChips';
import { parseResponse } from '../../utility/parseResponse';
import {
  ConversationBox,
  ConversationContainer,
  ConversationWrapper,
  Heading,
  StyledContainer,
  StyledInput,
  StyledParagraph,
} from './styled';

function Conversation() {
  const [form] = Form.useForm();
  const [selectedQuery, setSelectedQuery] = useState({ title: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);
  const [typedResponse, setTypedResponse] = useState('');
  const [recording, setRecording] = useState(false);
  const [startRecording, setStartRecording] = useState({ title: '' });
  const [inputType, setInputType] = useState('text');
  const [language, setLanguage] = useState('en-US');
  const recognitionRef = useRef(null);
  const audioRef = useRef(null);
  const [sessionId, setSessionId] = useState('');
  const [audioTurnOn, setAudioTurnOn] = useState(false);
  const [autoRecording, setAutoRecording] = useState(false);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('chatHistory'));
    const storedSessionId = localStorage.getItem('sessionId');
    const storedTimestamp = localStorage.getItem('chatTimestamp');

    if (storedHistory && storedTimestamp) {
      const currentTime = new Date().getTime();
      const savedTime = new Date(storedTimestamp).getTime();
      const diffHours = (currentTime - savedTime) / (1000 * 60 * 60);

      if (diffHours < 2) {
        setHistory(storedHistory);
        if (storedSessionId) setSessionId(storedSessionId);
      } else {
        clearLocalStorage();
        const newSessionId = generateSessionId();
        setSessionId(newSessionId);
      }
    } else {
      const newSessionId = generateSessionId();
      setSessionId(newSessionId);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', clearLocalStorage);

    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);

  useEffect(() => {
    if (history.length > 0) {
      const currentResponse = history[history.length - 1].response;
      const audioUrl = history[history.length - 1].audioUrl;
      let responseIndex = 0;

      const interval = setInterval(() => {
        if (responseIndex <= currentResponse.length) {
          setTypedResponse(currentResponse.substring(0, responseIndex));
          responseIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);

      if (audioUrl) {
        const playAudio = async () => {
          audioRef.current.src = `http://localhost:8080/src${audioUrl}`;
          // audioRef.current.src = `https://api.thefurne.com/src${audioUrl}`;
          try {
            if (audioTurnOn) {
              await audioRef?.current?.play();
            } else {
              audioRef?.current?.pause();
            }
          } catch (error) {
            console.error('Audio play error:', error);
          }
        };
        playAudio();
      }

      return () => {
        clearInterval(interval);
        audioRef?.current?.pause();
      };
    }
  }, [history, audioTurnOn]);

  useEffect(() => {
    if (autoRecording) {
      startRecognition();
    } else if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  }, [autoRecording]);

  useEffect(() => {
    if (startRecording.title && inputType === 'voice') {
      handleSubmit();
    }
  }, [startRecording.title]);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    setRecording(false);
    setTypedResponse('');
    setSelectedQuery('');
    try {
      const prompt = inputType === 'voice' ? startRecording.title : selectedQuery.title;
      console.log(prompt);
      const response = await axios.post(`${API.conversation}`, { message: prompt, sessionId });

      if (response.data) {
        const formattedResponse = parseResponse(response.data.response);

        const newHistory = [
          ...history,
          {
            request: inputType === 'voice' ? startRecording.title : selectedQuery.title,
            response: formattedResponse,
            audioUrl: response.data.audioPath,
          },
        ];

        setHistory(newHistory);
        localStorage.setItem('chatHistory', JSON.stringify(newHistory));
        localStorage.setItem('chatTimestamp', new Date().toISOString());
      }
      form.resetFields();
    } catch (error) {
      // setError('Something went wrong. Please try again.');
      console.error('Request Error:', error);
      if (error.response && error.response.data && error.response.data.message) {
        const errorMessage = error.response.data.message;
        message.error(errorMessage); // Display the error message
      } else {
        message.error('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const startRecognition = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Your browser does not support speech recognition.');
      return;
    }

    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.lang = language;

    recognitionRef.current.onstart = () => {
      setRecording(true);
      setInputType('voice'); 
    };

    recognitionRef.current.onresult = (event) => {
      console.log(event);
      const transcript = event.results[0][0].transcript;
      console.log('From transcription', transcript);
      setStartRecording({ title: transcript });
    };

    recognitionRef.current.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      setRecording(false);
    };

    recognitionRef.current.onend = () => {
      console.log('Speech recognition service disconnected');
      setRecording(false);
    };

    recognitionRef.current.start();
  };

  const handleLanguageToggle = (checked) => {
    setLanguage(checked ? 'en-US' : 'bn-IN');
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('chatHistory');
    localStorage.removeItem('sessionId');
    localStorage.removeItem('chatTimestamp');
  };

  const handleAudioToggle = () => {
    setAudioTurnOn((prev) => !prev);
  };

  return (
    <>
      <ConversationContainer>
        <ConversationWrapper>
          <Heading>
            <div style={{ display: 'flex' }}>
              <img
                src={require('../../static/img/banner/Perfil.png')}
                alt="AI icon"
                style={{ width: '30px', marginRight: '10px' }}
              />
              <h1 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>AI ASSISTANCE</h1>
            </div>
            <div>
              <span>
                Bangla
                <Switch
                  defaultChecked={language === 'en-US'}
                  size="large"
                  style={{ margin: '0 5px' }}
                  onChange={handleLanguageToggle}
                />{' '}
                English
              </span>
            </div>
          </Heading>
          <ConversationBox>
            <div style={{ height: '350px', overflowY: 'auto', marginBottom: '15px' }}>
              {history.map((chat, index) => (
                <div key={index}>
                  <div>
                    <span style={{ marginBottom: '7px', display: 'flex', alignItems: 'center' }}>
                      <FeatherIcon icon="user" size={16} />
                      <span style={{ fontWeight: '500', marginLeft: '5px' }}>You</span>
                    </span>
                    <p
                      style={{
                        backgroundColor: '#f4f5f7',
                        padding: '2px 3px',
                        borderRadius: '5px',
                        fontWeight: 500,
                        marginLeft: '15px',
                      }}
                    >
                      {chat.request}
                    </p>
                  </div>
                  <div>
                    <span style={{ marginBottom: '7px', display: 'flex', alignItems: 'center' }}>
                      <FeatherIcon icon="smartphone" size={16} />
                      <span style={{ fontWeight: '500', marginLeft: '5px' }}>Medigram</span>
                    </span>
                    <p
                      style={{
                        backgroundColor: '#e6f7ff',
                        padding: '10px',
                        borderRadius: '5px',
                        marginLeft: '15px',
                      }}
                      dangerouslySetInnerHTML={{
                        __html: index === history.length - 1 ? typedResponse : chat.response,
                      }}
                    />
                  </div>
                </div>
              ))}
              {loading && !recording && (
                <div style={{ textAlign: 'center', padding: '15px 15px' }}>
                  <Spin />
                </div>
              )}
              {/* {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>} */}
              {recording && (
                <div style={{ textAlign: 'center', padding: '15px 15px' }}>
                  <img src={require('../../static/img/icon/voice-animation.gif')} alt="Voice Animation" />
                </div>
              )}
            </div>
            <Form form={form} onFinish={handleSubmit}>
              <div style={{ display: 'flex', gap: '5px', alignItems: 'center', marginTop: '10px' }}>
                <div style={{ flexGrow: 1 }}>
                  <Form.Item style={{ margin: 0 }} name="query">
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                      <StyledInput
                        value={selectedQuery.title}
                        placeholder={
                          language === 'en-US'
                            ? 'What do you want to know? Please write in detail!'
                            : 'কি জানতে চান বিস্তারিত লিখুন!'
                        }
                        onChange={(e) => {
                          setSelectedQuery({ title: e.target.value });
                          setInputType('text');
                        }}
                        style={{ flexGrow: 1 }}
                      />
                      <img
                        onClick={handleSubmit}
                        style={{
                          height: '25px',
                          marginLeft: '10px',
                          cursor: selectedQuery.title ? 'pointer' : 'not-allowed',
                          position: 'absolute',
                          right: '10px',
                          opacity: selectedQuery.title ? 1 : 0.5,
                          pointerEvents: selectedQuery.title ? 'auto' : 'none',
                        }}
                        src={require('../../static/img/chat/send_icon.png')}
                        alt="Submit"
                      />
                    </div>
                  </Form.Item>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    style={{ height: '31px', marginLeft: '10px', cursor: 'pointer' }}
                    src={require('../../static/img/icon/microphone-2.png')}
                    alt="Microphone"
                    onClick={startRecognition}
                  />
                  <FeatherIcon
                    onClick={handleAudioToggle}
                    icon={audioTurnOn ? 'volume-2' : 'volume-x'}
                    size={24}
                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                  />
                </div>
              </div>
            </Form>
            <div
              style={{
                borderTop: '1px solid #2ccc9c',
                marginTop: '10px',
                boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.2)',
              }}
            />
            <StyledContainer>
              {messageChips.map((query, index) => (
                <StyledParagraph
                  key={index}
                  onClick={() => {
                    setSelectedQuery(query);
                    setInputType('text');
                  }}
                  style={{
                    fontSize: '12px',
                    cursor: 'pointer',
                    backgroundColor: '#E0FFFF',
                    color: '#1877F2',
                    padding: '2px 10px',
                    borderRadius: '10px',
                    display: 'inline-block',
                  }}
                >
                  {query.title}
                </StyledParagraph>
              ))}
            </StyledContainer>
          </ConversationBox>
        </ConversationWrapper>
      </ConversationContainer>
      <audio ref={audioRef} preload="auto"></audio>
    </>
  );
}

export default Conversation;
