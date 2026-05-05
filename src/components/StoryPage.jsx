import { distanceInMeters } from "../utils/geo";
import "../style/StoryPage.css";

function StoryPage({
  name,
  selectedCountryId,
  currentChapter,
  onSelectOption,
  userPosition,
}) {
  return (
    <div className="story-container">
      <h2>{currentChapter.id}</h2>
      <p>{currentChapter.storyText}</p>

      <div className="option-container">
        {currentChapter.options?.map((option) => {
          const distance =
            userPosition
              ? Math.round(
                  distanceInMeters(
                    userPosition.lat,
                    userPosition.lng,
                    option.targetLat,
                    option.targetLng
                  )
                )
              : null;

          return (
            <div key={option.id} className="story-option">
              <button
                className="story-button"
                onClick={() => onSelectOption(option.id)}
              >
                {option.buttonText}
              </button>

              <p className="distance-text">
                {distance !== null ? `${distance} metri da te` : "-- metri da te"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StoryPage;
