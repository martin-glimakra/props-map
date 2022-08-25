import Card from "./components/Card";

function App() {


  let data = [
    {
      id: 1,
      namn: 'sven',
      färg: 'grön'
    },
    {
      id: 2,
      namn: 'lars',
      färg: 'brun'
    }
  ]

  return (
        <div>
          { data.map(variabelnamn => <Card sommar={true} namn={variabelnamn.namn} färg={variabelnamn.färg} />) }    
        </div>
      );
    }


//   return (
//     <div>
//       <Card 
//         sommar={true} 
//         namn={data[0].namn} 
//         färg={data[0].färg} 
//       />
//       <Card 
//         sommar={false} 
//         namn={data[1].namn} 
//         färg={data[1].färg} 
//       />

//     </div>
//   );
// }

export default App;
