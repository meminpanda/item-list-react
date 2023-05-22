import './App.css';

import { useForm  } from "react-hook-form";
import {
  Button,
  Box
} from "@mui/material";
import { TextInput } from './atoms/TextInput/TextInput';
function App() {
  const { control, handleSubmit } = useForm();

  const handleOnSubmit = (evt:any) => {
    console.log(evt);
  };

  return (
    <div className="main-container">
       <Box component="form" onSubmit={handleSubmit(handleOnSubmit)}>
          <TextInput propertyName="recipeName" label="Recipe Name" value="" control={control}></TextInput>
          <TextInput propertyName="test1" label="test1" value="" control={control}></TextInput>
          <TextInput propertyName="test2" label="test2" value="" control={control}></TextInput>
          <TextInput propertyName="test3" label="test3" value="" control={control}></TextInput>
          <TextInput propertyName="test4" label="test4" value="" control={control}></TextInput>
          <Button type="submit">Submit</Button>
       </Box>
    </div>
  );
}

export default App;
