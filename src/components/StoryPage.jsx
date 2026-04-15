import "../style/StoryPage.css";

function StoryPage({
  name,
  selectedCountryId,
  currentChapter,
  onSelectOption,
}) {
  return (
    <div className="story-container">
      {/*
      <p>
        <strong>Giocatore:</strong> {name}
      </p>

      <p>
        <strong>Paese:</strong> {selectedCountryId}
      </p>
*/}
      <h2>{currentChapter.id}</h2>
      <p>{currentChapter.storyText}</p>

      <div className="option-container">
        {currentChapter.options?.map((option) => (
          <div key={option.id} className="story-option">
            <button
              className="story-button"
              onClick={() => onSelectOption(option.id)}
            >
              {option.buttonText}
            </button>

            <p className="distance-text">
              {option.distance || "--"} metri da te
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryPage;
