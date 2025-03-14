import { UserLogin } from "../interfaces/UserLogin";


  const login = async (userInfo: UserLogin) => {
    // Ensure username and password are not null
    if (!userInfo.username || !userInfo.password) {
      throw new Error('Username and password must be provided');
    }
  
    try {
      const response = await fetch('auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      console.log(response.body);
      // Log the response for debugging
      console.log('Raw response:', response);
  
      if (!response.ok) {
        // Try to parse the error response as JSON; if it fails, return the status text
        const errorData = await response.json(); // Only read the response once
        const errorMessage = errorData?.message || 'Unknown error';
        console.error('Error response:', errorMessage); // Log the error message
        throw new Error(`Error: ${errorMessage}`);
      }
  
      // If the response is successful, parse and return the JSON data
      const data = await response.json(); // This is safe because we've already read the response in the previous step
      return data;
  
    } catch (err) {
      console.log('Error from user login: ', err);
      return Promise.reject('Could not fetch user info');
    }
  };



export { login };
