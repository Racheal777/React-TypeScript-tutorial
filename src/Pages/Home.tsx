import React from "react";
import Navbar from "../Components/navbar";
import Greet from "../Components/Greet";
import Person from "../Components/Person";
import PersonList from "../Components/PersonList";
import Status from "../Components/Status";
import Oscar from "../Components/Oscar";
import Button from "../Components/Button";
import Input from "../Components/Input";

export default function Home() {
  const personName = {
    first: "Gyen",
    last: "Abubakar",
  };

  const nameList = [
    {
        first: "Abigail",
        last: "Abubakar",
      },
      
      {
        first: "Adjara",
        last: "Abubakar",
      },

      {
        first: "Fuseini",
        last: "Abubakar",
      }
  ]
  return (
    <div>
      <Navbar> children text</Navbar>
      <Oscar>
          <Navbar>Oscar goes to france, child of a child</Navbar>
      </Oscar>

      <section>
        <Greet name="Racheal"  isLoggedin={true} />
      </section>

      <section>
        <Person name={personName} />
      </section>

      <section>
        <PersonList names = {nameList}/>
      </section>

      <section>
        <Status status = 'error'/>
      </section>

      <section>
          <Button handleClick={(event, id) => {
              console.log('Button clicked', event, id)
          }}/>
      </section>

      <section>
          <Input value="Ama" handleChange={event => console.log(event)}/>
      </section>
    </div>
  );
}
