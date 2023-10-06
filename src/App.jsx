import { useState } from "react";
import Button from "./Button";

function App() {
  const [color, setColor] = useState("pink");
  return (
    <div className="w-full h-screen duration-300" style={{ backgroundColor: color }}>
      <div className="fixed flex  flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-full">
            <Button bgColor="red" colorName="Red" updateColor={setColor}/>
            <Button bgColor="blue" colorName="Blue" updateColor={setColor}/>
            <Button bgColor="green" colorName="Green" updateColor={setColor}/>
            <Button bgColor="orange" colorName="Orange" updateColor={setColor}/>
            <Button bgColor="fuchsia" colorName="Pink" updateColor={setColor}/>
            <Button bgColor="olive" colorName="Olive" updateColor={setColor}/>
            <Button bgColor="teal" colorName="Teal" updateColor={setColor}/>
            <Button bgColor="maroon" colorName="Maroon" updateColor={setColor}/>
            <Button bgColor="purple" colorName="Purple" updateColor={setColor}/>
        </div>
      </div>
    </div>
  )
}

export default App
