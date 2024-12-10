const {Gemini} = require('@google-cloud/gemini');

// Create a new Gemini client
const gemini = new Gemini({
  // Your API key from the Google Cloud Console
  apiKey: 'YOUR_API_KEY',
});

// Define the business profile data
const businessData = {
  businessName:'',
  businessType:'' ,
  industry:'',
  businessDescription: '',
  foundingDate:'',
  teamSize: '',
  fundingGoal:'',
  elevatorPitch: '',
};

// Use the Gemini API to generate a business profile
gemini.generateBusinessProfile(businessData)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });