export const generateSessionId = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-1);
    const randomFourFiveDigits = Math.floor(Math.random() * 9000) + 1000;
    const newSessionId = `UC${day}${month}${year}${randomFourFiveDigits}`;
    localStorage.setItem('sessionId', newSessionId);
    return newSessionId;
  };


