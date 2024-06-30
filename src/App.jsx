import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Card from "./components/cardcomponents/Card";
import SearchDropdown from "./components/SearchDropdown";

const testData = [
  {
    title: "Auth Manager Framework",
    Owners: ["Armin", "Mikasa", "Eren", "Ymir", "Levi"],
    Frameworks: ["Next", "Rest", "PostGres"],
    rating: 4,
    reviews: 16,
  },
  {
    title: "Health Tracker App",
    Owners: ["Sasha", "Connie", "Jean"],
    Frameworks: ["React", "Node", "MongoDB"],
    rating: 4.5,
    reviews: 22,
  },
  {
    title: "E-Commerce Platform",
    Owners: ["Erwin", "Hanji", "Historia"],
    Frameworks: ["Angular", "Express", "MySQL"],
    rating: 4.7,
    reviews: 30,
  },
  {
    title: "Social Media Integration",
    Owners: ["Zeke", "Pieck", "Porco"],
    Frameworks: ["Vue", "Firebase", "SQLite"],
    rating: 4.2,
    reviews: 18,
  },
  {
    title: "Financial Analytics Tool",
    Owners: ["Reiner", "Bertholdt", "Annie"],
    Frameworks: ["Django", "Flask", "PostgreSQL"],
    rating: 4.8,
    reviews: 25,
  },
  {
    title: "Project Management System",
    Owners: ["Gabi", "Falco", "Colt"],
    Frameworks: ["Ruby on Rails", "React Native", "Oracle"],
    rating: 4.3,
    reviews: 20,
  },
  {
    title: "AI Chatbot",
    Owners: ["Hitch", "Marlowe", "Moblit"],
    Frameworks: ["TensorFlow", "Keras", "Docker", "CloudFlare"],
    rating: 4.6,
    reviews: 12,
  },
  {
    title: "Online Education Platform",
    Owners: ["Kenny", "Uri", "Rod"],
    Frameworks: ["Laravel", "Vue", "MariaDB", "Prisma"],
    rating: 4.1,
    reviews: 19,
  },
  {
    title: "Weather Forecasting App",
    Owners: ["Nile", "Pixis", "Kitz"],
    Frameworks: ["Spring Boot", "Thymeleaf", "Cassandra", "Prisma"],
    rating: 4.5,
    reviews: 15,
  },
  {
    title: "Music Streaming Service",
    Owners: ["Nanaba", "Gelgar", "Ilse"],
    Frameworks: ["ASP.NET", "React", "SQL Server"],
    rating: 4.4,
    reviews: 23,
  },
];

function App() {
  return (
    <div>
      <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <SearchBar />
          </div>
          <div className="mb-4 sm:mb-0">
            <SearchDropdown />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-center mt-4">
          {testData.map((test, index) => (
            <Card
              key={index}
              title={test.title}
              owners={test.Owners}
              frameworks={test.Frameworks}
              rating={test.rating}
              reviews={test.reviews}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
