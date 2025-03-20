import React, { useState, useEffect } from 'react';

// Japan trip data
const tripData = {
  "tripName": "Tokyo Trip 2025",
  "timeZone": "Asia/Tokyo",
  "travelers": [
    {
      "name": "Lucas",
      "arrival": {
        "date": "2025-03-21",
        "time": "21:00",
        "flight": "OZ 271"
      },
      "departure": {
        "date": "2025-04-01",
        "time": "10:00",
        "flight": "OZ 101"
      }
    },
    {
      "name": "August",
      "arrival": {
        "date": "2025-03-21",
        "time": "15:25",
        "flight": "UA7941"
      },
      "departure": {
        "date": "2025-04-01",
        "time": "10:00",
        "flight": "UA876"
      }
    },
    {
      "name": "Jake",
      "arrival": {
        "date": "2025-03-23",
        "time": "20:30",
        "flight": "ZG 025"
      },
      "departure": {
        "date": "2025-04-01",
        "time": "10:00",
        "flight": "OZ 101"
      }
    },
    {
      "name": "Raj",
      "arrival": {
        "date": "2025-03-21",
        "time": "15:00",
        "flight": "?"
      },
      "departure": {
        "date": "2025-03-31",
        "time": "15:30",
        "flight": "?"
      }
    },
    {
      "name": "Khaya",
      "arrival": {
        "date": "2025-03-22",
        "time": "15:00",
        "flight": "?"
      },
      "departure": {
        "date": "2025-03-31",
        "time": "13:30",
        "flight": "?"
      }
    },
    {
      "name": "Toby",
      "arrival": {
        "date": "2025-03-22",
        "time": "12:35",
        "flight": "?"
      },
      "departure": {
        "date": "2025-03-30",
        "time": "17:45",
        "flight": "?"
      }
    }
  ],
  "schedule": [
    {
      "date": "2025-03-21",
      "dayOfWeek": "Friday",
      "location": "Home -> Tokyo",
      "events": [
        {
          "title": "Arrival Day",
          "startTime": "15:00",
          "endTime": "22:30",
          "description": "Day 1: August and Raj arrive around 15:00-15:25. Lucas arrives 21:00. Check in at hotel.",
          "location": "Narita/Haneda Airport -> APA Hotel Nihombashi"
        }
      ],
      "accommodation": "APA Hotel Nihombashi Bakurocho Station",
      "notes": "August and Raj arrive around the same time. Lucas arrives later in the evening."
    },
    {
      "date": "2025-03-22",
      "dayOfWeek": "Saturday",
      "location": "Tokyo",
      "events": [
        {
          "title": "Tokyo Shrine Exploration",
          "startTime": "09:00",
          "endTime": "15:00",
          "description": "Raj, Lucas, August - explore Tokyo shrines, get shinkansen tickets.",
          "location": "Tokyo - Asakusa/Ueno Area"
        },
        {
          "title": "Khaya & Toby Arrival",
          "startTime": "12:35",
          "endTime": "17:00",
          "description": "Khaya arrives at 15:00 and Toby at 12:35. Meet Raj, Lucas, and August at the hotel around 17:00 after getting settled.",
          "location": "Narita/Haneda -> Hotel"
        }
      ],
      "accommodation": "APA Hotel Nihombashi Bakurocho Station (2 rooms - Khaya + Toby, Raj + Lucas, August solo)",
      "notes": "Khaya and Toby join the crew. Buy shinkansen tickets to Kyoto."
    },
    {
      "date": "2025-03-23",
      "dayOfWeek": "Sunday",
      "location": "Tokyo",
      "events": [
        {
          "title": "Nikko Day Trip",
          "startTime": "07:00",
          "endTime": "18:00",
          "description": "Day trip to Nikko. Visit Toshogu Shrine, Shinkyo Bridge, and hiking in the national park area.",
          "location": "Nikko (day trip from Tokyo)"
        },
        {
          "title": "Jake Arrival",
          "startTime": "20:30",
          "endTime": "22:00",
          "description": "Jake arrives at 20:30. Meet at the hotel.",
          "location": "Airport -> Hotel"
        }
      ],
      "accommodation": "APA Hotel Nihombashi Bakurocho Station (3 rooms - Aug + Jake, Khaya + Toby, Raj + Lucas)",
      "notes": "Jake arrives in the evening. Full day trip to Nikko for others."
    },
    {
      "date": "2025-03-24",
      "dayOfWeek": "Monday",
      "location": "Tokyo",
      "events": [
        {
          "title": "TeamLab Digital Art Museum",
          "startTime": "10:00", 
          "endTime": "13:00",
          "description": "Visit TeamLab Digital Art Museum in Odaiba.",
          "location": "TeamLab, Odaiba"
        },
        {
          "title": "Akihabara Exploration",
          "startTime": "14:00",
          "endTime": "19:00",
          "description": "Explore Akihabara - anime stores, electronics shops, and retro gaming.",
          "location": "Akihabara"
        }
      ],
      "accommodation": "APA Hotel Nihombashi Bakurocho Station (3 rooms - Aug + Jake, Khaya + Toby, Raj + Lucas)",
      "notes": "TeamLab and Akihabara day."
    },
    {
      "date": "2025-03-25",
      "dayOfWeek": "Tuesday",
      "location": "Tokyo",
      "events": [
        {
          "title": "Shibuya & Harajuku Exploration",
          "startTime": "09:30",
          "endTime": "19:00",
          "description": "Visit Shibuya Crossing, Harajuku fashion district, Takeshita Street, and Meiji Shrine. Evening: izakaya hopping and karaoke.",
          "location": "Shibuya & Harajuku"
        }
      ],
      "accommodation": "APA Hotel Nihombashi Bakurocho Station (3 rooms - Aug + Jake, Khaya + Toby, Raj + Lucas)",
      "notes": "Last full day in Tokyo before heading to Kyoto."
    },
    {
      "date": "2025-03-26",
      "dayOfWeek": "Wednesday",
      "location": "Tokyo -> Kyoto",
      "events": [
        {
          "title": "Shinkansen to Kyoto",
          "startTime": "10:00",
          "endTime": "12:30",
          "description": "Take the shinkansen from Tokyo to Kyoto.",
          "location": "Tokyo Station -> Kyoto Station"
        },
        {
          "title": "Kyoto Tour with Kenzo",
          "startTime": "13:30",
          "endTime": "19:00",
          "description": "Guided tour with Kenzo, visiting less touristy spots in Kyoto. Dinner together.",
          "location": "Kyoto"
        }
      ],
      "accommodation": "Kyoto Airbnb",
      "notes": "Train to Kyoto in the morning. Meet Kenzo for tour and dinner."
    },
    {
      "date": "2025-03-27",
      "dayOfWeek": "Thursday",
      "location": "Kyoto",
      "events": [
        {
          "title": "Kyoto Shrine & Temple Tour",
          "startTime": "08:30",
          "endTime": "19:00",
          "description": "Visit Kinkaku-ji (Golden Pavilion), Fushimi Inari shrine with torii gates, and Kiyomizu-dera temple.",
          "location": "Various Kyoto Shrines & Temples"
        }
      ],
      "accommodation": "Kyoto Airbnb",
      "notes": "Full day exploring the famous shrines and temples of Kyoto."
    },
    {
      "date": "2025-03-28",
      "dayOfWeek": "Friday",
      "location": "Kyoto",
      "events": [
        {
          "title": "Arashiyama Bamboo Grove & Monkey Park",
          "startTime": "09:00",
          "endTime": "13:00",
          "description": "Visit the bamboo forest in Arashiyama and hike up to the monkey park.",
          "location": "Arashiyama, Western Kyoto"
        },
        {
          "title": "Gion & Traditional Kyoto",
          "startTime": "14:00",
          "endTime": "20:00",
          "description": "Explore Gion district with its traditional wooden buildings. Traditional kaiseki dinner.",
          "location": "Gion District, Kyoto"
        }
      ],
      "accommodation": "Kyoto Airbnb",
      "notes": "Arashiyama in the morning, Gion district in the afternoon/evening."
    },
    {
      "date": "2025-03-29",
      "dayOfWeek": "Saturday",
      "location": "Kyoto -> Tokyo",
      "events": [
        {
          "title": "Morning Hike - Mount Inari",
          "startTime": "07:00",
          "endTime": "11:00",
          "description": "Early morning hike up Mount Inari, following the full trail of torii gates.",
          "location": "Fushimi Inari Shrine"
        },
        {
          "title": "Shinkansen back to Tokyo",
          "startTime": "16:00",
          "endTime": "18:30",
          "description": "Return to Tokyo by shinkansen. Check in at the new hotel in Shimbashi area.",
          "location": "Kyoto Station -> Tokyo Station"
        }
      ],
      "accommodation": "APA Hotel Shimbashi Onarimon (3 rooms - Aug + Jake, Khaya + Toby, Raj + Lucas)",
      "notes": "Early hike then afternoon train back to Tokyo. Staying at a different hotel in Shimbashi area."
    },
    {
      "date": "2025-03-30",
      "dayOfWeek": "Sunday",
      "location": "Tokyo",
      "events": [
        {
          "title": "Imperial Palace & Gardens",
          "startTime": "09:30",
          "endTime": "12:00",
          "description": "Visit the Imperial Palace East Gardens.",
          "location": "Imperial Palace, Tokyo"
        },
        {
          "title": "Tokyo National Museum",
          "startTime": "13:00",
          "endTime": "16:30",
          "description": "Visit Tokyo National Museum in Ueno Park. Focus on samurai artifacts and ancient Japanese history.",
          "location": "Ueno Park"
        },
        {
          "title": "Toby Departure",
          "startTime": "17:45",
          "endTime": "19:00",
          "description": "Toby departs. Airport transfer.",
          "location": "Hotel -> Airport"
        }
      ],
      "accommodation": "APA Hotel Shimbashi Onarimon (3 rooms - Aug + Jake, Khaya solo, Lucas + Raj)",
      "notes": "Toby leaves at 17:45. Cultural day with Imperial Palace and museum."
    },
    {
      "date": "2025-03-31",
      "dayOfWeek": "Monday",
      "location": "Tokyo",
      "events": [
        {
          "title": "Nintendo Tokyo & Pokémon Center",
          "startTime": "10:00",
          "endTime": "13:00",
          "description": "Visit Nintendo Tokyo store in Shibuya and the nearby Pokémon Center.",
          "location": "Shibuya, Tokyo"
        },
        {
          "title": "Raj & Khaya Departure",
          "startTime": "13:30",
          "endTime": "15:30",
          "description": "Raj and Khaya depart. Airport transfers.",
          "location": "Hotel -> Airport"
        },
        {
          "title": "Tokyo Metropolitan Government Building",
          "startTime": "16:00",
          "endTime": "19:00",
          "description": "Visit the Tokyo Metropolitan Government Building for city views. Final dinner in Tokyo.",
          "location": "Shinjuku, Tokyo"
        }
      ],
      "accommodation": "APA Hotel Shimbashi Onarimon (2 rooms - Aug + Jake, Lucas solo)",
      "notes": "Raj leaves at 15:30, Khaya leaves at 13:30."
    },
    {
      "date": "2025-04-01",
      "dayOfWeek": "Tuesday",
      "location": "Tokyo -> Home",
      "events": [
        {
          "title": "Departure Day",
          "startTime": "07:00",
          "endTime": "10:00",
          "description": "Lucas, Jake, and August all leave for the airport around 10:00 on different flights (OZ 101 & UA876).",
          "location": "Hotel -> Narita/Haneda Airport"
        }
      ],
      "accommodation": "N/A - Flying home",
      "notes": "Lucas, Jake, and August all leave around the same time."
    }
  ]
};

const JapanTripCalendar = () => {
  const [expandedDays, setExpandedDays] = useState({});
  const [selectedTraveler, setSelectedTraveler] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize the first day as expanded
    const initialExpandedState = {};
    if (tripData && tripData.schedule && tripData.schedule.length > 0) {
      initialExpandedState[tripData.schedule[0].date] = true;
    }
    setExpandedDays(initialExpandedState);
  }, []);
  
  const toggleDayExpansion = (date) => {
    setExpandedDays(prev => ({
      ...prev,
      [date]: !prev[date]
    }));
  };
  
  // Handle traveler click to show popup
  const handleTravelerClick = (traveler, event) => {
    event.stopPropagation();
    setSelectedTraveler(traveler);
    setPopupPosition({ 
      x: event.clientX, 
      y: event.clientY 
    });
    setShowPopup(true);
  };
  
  // Close popup when clicking outside
  const closePopup = () => {
    setShowPopup(false);
    setSelectedTraveler(null);
  };
  
  // Format time to include JST timezone
  const formatTime = (time) => {
    return `${time} JST`;
  };
  
  // Format date for display
  const formatDate = (date, dayOfWeek) => {
    const [year, month, day] = date.split('-');
    return `${dayOfWeek}, ${month}/${day}/${year}`;
  };
  
  // Travel info popup component
  const TravelerInfoPopup = ({ traveler, position, onClose }) => {
    if (!traveler) return null;
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
        <div 
          className="absolute bg-white rounded-lg shadow-xl p-4 w-64"
          style={{ 
            top: `${position.y}px`, 
            left: `${position.x}px`,
            transform: "translate(-50%, -100%)"
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-lg font-bold text-indigo-700 mb-2">{traveler.name}</h3>
          
          <div className="mb-3">
            <h4 className="font-semibold text-gray-700">Arrival:</h4>
            <p className="text-sm">Date: {traveler.arrival.date}</p>
            <p className="text-sm">Time: {traveler.arrival.time} JST</p>
            <p className="text-sm">Flight: {traveler.arrival.flight}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700">Departure:</h4>
            <p className="text-sm">Date: {traveler.departure.date}</p>
            <p className="text-sm">Time: {traveler.departure.time} JST</p>
            <p className="text-sm">Flight: {traveler.departure.flight}</p>
          </div>
          
          <button 
            className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-indigo-800 text-center">{tripData.tripName}</h1>
        <p className="text-lg text-center text-gray-600 mt-2">
          {tripData.schedule[0].date.split('-')[1]}/{tripData.schedule[0].date.split('-')[2]} - {tripData.schedule[tripData.schedule.length-1].date.split('-')[1]}/{tripData.schedule[tripData.schedule.length-1].date.split('-')[2]}/2025
        </p>
        <div className="mt-4 text-center">
          <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
            All times in Japan Standard Time (UTC+9)
          </span>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-center mb-2">Travelers (click for flight info)</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {tripData.travelers.map((traveler, index) => (
              <button 
                key={index} 
                className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium transition duration-150"
                onClick={(e) => handleTravelerClick(traveler, e)}
              >
                {traveler.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {tripData.schedule.map((day, index) => (
          <div key={day.date} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div 
              className={`p-4 flex justify-between items-center cursor-pointer ${day.location.includes('Kyoto') ? 'bg-green-700' : 'bg-indigo-700'} text-white`}
              onClick={() => toggleDayExpansion(day.date)}
            >
              <div className="flex items-center">
                <span className="text-xl font-medium">{formatDate(day.date, day.dayOfWeek)}</span>
                <span className="ml-3 px-2 py-1 bg-white text-sm font-medium rounded-full text-gray-800">
                  Day {index + 1}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium mr-2">{day.location}</span>
                <svg 
                  className={`h-5 w-5 transition-transform ${expandedDays[day.date] ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            {expandedDays[day.date] && (
              <div className="p-4">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="mb-6 last:mb-0">
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                        <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded mt-1 sm:mt-0">
                          {formatTime(event.startTime)} - {formatTime(event.endTime)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 flex items-center">
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </p>
                      <p className="mt-3 text-gray-700">{event.description}</p>
                    </div>
                  </div>
                ))}
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">Accommodation:</h4>
                      <p className="text-sm text-gray-600">{day.accommodation}</p>
                    </div>
                    {day.notes && (
                      <div className="mt-2 sm:mt-0">
                        <h4 className="text-sm font-semibold text-gray-700">Notes:</h4>
                        <p className="text-sm text-gray-600">{day.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Calendar created for {tripData.tripName}</p>
        <p className="mt-1">All times are in Japan Standard Time (UTC+9)</p>
      </div>
      
      {/* Traveler Info Popup */}
      {showPopup && selectedTraveler && (
        <TravelerInfoPopup 
          traveler={selectedTraveler} 
          position={popupPosition} 
          onClose={closePopup} 
        />
      )}
    </div>
  );
};

export default JapanTripCalendar;
