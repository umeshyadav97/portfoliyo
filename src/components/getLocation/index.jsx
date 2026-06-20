// getLocationFromIp.js

import axios from "axios";

const getLocationFromIp = async () => {
  const apiKey = "efe4fe92bfa7828f7e3d821f3bfcfe36";
  const apiUrl = `http://api.ipstack.com/check?access_key=${apiKey}&ip=88.26.241.248`;

  try {
    const response = await axios.get(apiUrl);
    const { country_code } = response.data;

    // Add language code mapping based on the country code
    const countryLanguageMap = {
      US: "en",
      FR: "fr",
      ES: "es",
      DE: "de",
      NL: "nl",
      IN: "in",
      // Add more mappings as needed
    };

    const language_code = countryLanguageMap[country_code] || "en"; // Default to English

    return { country_code, language_code };
  } catch (error) {
    console.error("Error fetching location from IP:", error);
    return null;
  }
};

export default getLocationFromIp;
