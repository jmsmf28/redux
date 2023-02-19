import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { saveData } from "../../store/actions";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const RadioButtonsSidebar: React.FC<Props> = ({ isOpen, onClose }) => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data);

  const handleSave = async () => {
    dispatch(saveData(selectedValue));
    try {
      const response = await fetch("https://example.com/data", {
        method: "POST",
        body: JSON.stringify({ value: selectedValue }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error sending data to the backend:", error);
    }
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleRadioButtonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <input type="radio" id="option1" name="options" value="option1" checked={selectedValue === "option1"} onChange={handleRadioButtonChange} />
      <label htmlFor="option1">Option 1</label>
      <br />
      <input type="radio" id="option2" name="options" value="option2" checked={selectedValue === "option2"} onChange={handleRadioButtonChange} />
      <label htmlFor="option2">Option 2</label>
      <br />
      <input type="radio" id="option3" name="options" value="option3" checked={selectedValue === "option3"} onChange={handleRadioButtonChange} />
      <label htmlFor="option3">Option 3</label>
      <br />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
      <p>Current value: {data}</p>
    </div>
  );
};

export default RadioButtonsSidebar;
