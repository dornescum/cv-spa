export function getOS() {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

    if (macosPlatforms.includes(platform)) {
        return 'Mac OS';
    } else if (iosPlatforms.includes(platform)) {
        return 'iOS';
    } else if (windowsPlatforms.includes(platform)) {
        return 'Windows';
    } else if (/Android/.test(userAgent)) {
        return 'Android';
    } else if (!platform && /Linux/.test(userAgent)) {
        return 'Linux';
    }
    return 'Unknown OS';
}

const isMobile = /Mobi/i.test(window.navigator.userAgent);
const browser = window.navigator.userAgent;
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const os = getOS();
const visitTime = new Date().toISOString();

const visitData = {
    browser,
    os,
    visitTime,
    isMobile,
    screenWidth,
    screenHeight
};

// console.log('visited data ', visitData)
fetch('http://localhost:3002/api/v1/agency/resume-stats', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(visitData)
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log('data from fetch ', data))
    .catch(error => console.error('There was a problem with the fetch operation: ', error));