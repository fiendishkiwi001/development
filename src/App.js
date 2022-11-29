import logo from './logo.svg';
import './App.css';
import { Button, Checkbox, Grid, Text } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import { Card1 } from './Card1';

// interface productItem {
//   drinkType:
//     "Classic" |
//     "Milk Tea" |
//     "Punch" |
//     "Slush" |
//     "Milk Strike" |
//     "Yogurt" |
//     "Espresso";
//   special:
//     "Best Seller" |
//     "Contains Gluten" |
//     "Caffeine Free";
//   price: Number;
// }

function App() {
  const [filterArray, setFilterArray] = useState([]);

  // drink type filters
  const [classic, setClassic] = useState(false)
  const [milkTea, setMilkTea] = useState(false)
  const [punch, setPunch] = useState(false)
  const [slush, setSlush] = useState(false)

  // special filters
  const [bestSeller, setBestSeller] = useState(false)
  const [containsGluten, setContainsGluten] = useState(false)
  const [caffeineFree, setCaffeineFree] = useState(false)

  const handleReset = () => {
    setClassic(false)
    setMilkTea(false)
    setPunch(false)
    setSlush(false)
    setBestSeller(false)
    setContainsGluten(false)
    setCaffeineFree(false)
  }

  const classicHandler = () => {
    setClassic(!classic)
  }

  const milkTeaHandler = () => {
    setMilkTea(!milkTea)
  }

  const punchHandler = () => {
    setPunch(!punch)
  }

  const slushHandler = () => {
    setSlush(!slush)
  }

  const bestSellerHandler = () => {
    setBestSeller(!bestSeller)
  }

  const containsGlutenHandler = () => {
    setContainsGluten(!containsGluten)
  }

  const caffeineFreeHandler = () => {
    setCaffeineFree(!caffeineFree)
  }

  const menuMap = new Map([
    ["Kung Fu Black Tea", "https://www.kungfutea.com/wp-content/uploads/2021/08/WinterMelonTea_Classicgrid.jpg"],
    ["Kung Fu Honey Tea", "https://www.kungfutea.com/wp-content/uploads/2021/08/HoneyGreenTea_Classicgrid.jpg"],
    ["Longan Jujube Tea", "https://www.kungfutea.com/wp-content/uploads/2021/08/BlackTea_Classicgrid-1.jpg"],
    ["Kung Fu Milk Tea", "https://www.kungfutea.com/wp-content/uploads/2021/08/Coffee_MilkTea.jpg"],
    ["Taro Milk Tea", "https://www.kungfutea.com/wp-content/uploads/2021/08/image-asset-1.jpeg"],
    ["Thai Milk Tea", "https://www.kungfutea.com/wp-content/uploads/2021/08/Coffee_MilkTea.jpg"],
    ["Honey Lemonade", "https://www.kungfutea.com/wp-content/uploads/2021/08/HONEY-LEMONADE.jpeg"],
    ["Lychee Punch", "https://www.kungfutea.com/wp-content/uploads/2021/08/lychee-punch.jpeg"],
    ["Rosehip Lemonade", "https://www.kungfutea.com/wp-content/uploads/2021/08/RosehipLemonade_Punch.jpg"],
    ["Honey Lemonade", "https://www.kungfutea.com/wp-content/uploads/2021/08/HONEY-LEMONADE.jpeg"],
  ])

  const [renderedItems, setRenderedItems] = useState([])
  const itemsToRender = useEffect(() => {
    let finalArray = [
      {
        name: "Kung Fu Black Tea",
        url: "https://www.kungfutea.com/wp-content/uploads/2021/08/WinterMelonTea_Classicgrid.jpg",
        price: "$3.75",
        drinkType: "Classic",
        special: []
      },
      {
        name: "Kung Fu Honey Tea",
        url: "https://www.kungfutea.com/wp-content/uploads/2021/08/HoneyGreenTea_Classicgrid.jpg",
        price: "$3.75",
        drinkType: "Classic",
        special: ["Best Seller", "Caffeine Free"]
      },
      {
        name: "Longan Jujube Tea",
        url: "https://www.kungfutea.com/wp-content/uploads/2021/08/BlackTea_Classicgrid-1.jpg",
        price: "$4.00",
        drinkType: "Classic",
        special: ["Caffeine Free"]
      },
      {
        name: "Kung Fu Milk Tea",
        url: "https://www.kungfutea.com/wp-content/uploads/2021/08/Coffee_MilkTea.jpg",
        price: "$4.25",
        drinkType: "Milk Tea",
        special: ["Best Seller"]
      },
      {
        name: "Taro Milk Tea",
        url: "https://www.kungfutea.com/wp-content/uploads/2021/08/image-asset-1.jpeg",
        price: "$4.50",
        drinkType: "Milk Tea",
        special: ["Contains Gluten"]
      },
      {
        name: "Thai Milk Tea",
        url: "https://www.kungfutea.com/wp-content/uploads/2021/08/Coffee_MilkTea.jpg",
        price: "$4.50",
        drinkType: "Milk Tea",
        special: []
      },
      {
        name: "Honey Lemonade",
        url: "https://www.kungfutea.com/wp-content/uploads/2021/08/HONEY-LEMONADE.jpeg",
        price: "$4.25",
        drinkType: "Punch",
        special: ["Caffeine Free"]
      },
      {
        name: "Lychee Punch",
        url: "https://www.kungfutea.com/wp-content/uploads/2021/08/lychee-punch.jpeg",
        price: "$4.75",
        drinkType: "Punch",
        special: ["Contains Gluten"]
      },
      {
        name: "Rosehip Lemonade",
        url: "https://www.kungfutea.com/wp-content/uploads/2021/08/RosehipLemonade_Punch.jpg",
        price: "$4.75",
        drinkType: "Punch",
        special: ["Caffeine Free"]
      },
      {
        name: "Taro Slush",
        url: "https://www.kungfutea.com/wp-content/uploads/2021/08/taro.jpeg",
        price: "$5.25",
        drinkType: "Slush",
        special: ["Best Seller", "Contains Gluten", "Caffeine Free"]
      },
      {
        name: "Matcha Red Bean Slush",
        url: "https://www.kungfutea.com/wp-content/uploads/2021/08/matcha-red-bean.jpeg",
        price: "$5.25",
        drinkType: "Slush",
        special: []
      },
      {
        name: "Pina Colada Slush",
        url: "https://www.kungfutea.com/wp-content/uploads/2021/08/PinaColada-05.jpg",
        price: "$5.25",
        drinkType: "Slush",
        special: ["Caffeine Free"]
      },
    ]
    if (classic) {
      finalArray = finalArray.filter(item => item.drinkType === "Classic")
    }
    if (milkTea) {
      finalArray = finalArray.filter(item => item.drinkType === "Milk Tea")
    }
    if (punch) {
      finalArray = finalArray.filter(item => item.drinkType === "Punch")
    }
    if (slush) {
      finalArray = finalArray.filter(item => item.drinkType === "Slush")
    }
    if (bestSeller) {
      finalArray = finalArray.filter(item => item.special.includes("Best Seller"))
    }
    if (containsGluten) {
      finalArray = finalArray.filter(item => item.special.includes("Contains Gluten"))
    }
    if (caffeineFree) {
      finalArray = finalArray.filter(item => item.special.includes("Caffeine Free"))
    }
    console.log(classic)
    console.log(finalArray)
    setRenderedItems(finalArray)
  }, [
    classic,
    milkTea,
    punch,
    slush,
    bestSeller,
    containsGluten,
    caffeineFree,
  ])

  return (
    <div className="App">
      
      <div className="pageContainer">

        <div className="title">
          <Text 
            h1
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
            weight="bold"
          >
            KUNG FU TEA
          </Text>
        </div>

        <div className="contentContainer">
          <div className="sidebar">
            <Button auto color="gradient" onPress={handleReset}>
              Reset filters
            </Button>
            <Text
              h3
              css={{
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
              }}
            >
              Drink Type
            </Text>
            <Checkbox size='sm' defaultChecked={false} isSelected={classic} color='gradient' onChange={classicHandler}>
              Classic
            </Checkbox>
            <Checkbox size='sm' defaultChecked={false} isSelected={milkTea} color='gradient' onChange={milkTeaHandler}>
              Milk Tea
            </Checkbox>
            <Checkbox size='sm' defaultChecked={false} isSelected={punch} color='gradient' onChange={punchHandler}>
              Punch
            </Checkbox>
            <Checkbox size='sm' defaultChecked={false} isSelected={slush} color='gradient' onChange={slushHandler}>
              Slush
            </Checkbox>
            <Text
              h3
              css={{
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
              }}
            >
              Special
            </Text>
            <Checkbox size="sm" color='gradient' isSelected={bestSeller} onChange={bestSellerHandler}>
              Best Seller
            </Checkbox>
            <Checkbox size='sm' color='gradient' isSelected={containsGluten} onChange={containsGlutenHandler}>
              Contains Gluten
            </Checkbox>
            <Checkbox size='sm' color='gradient' isSelected={caffeineFree} onChange={caffeineFreeHandler}>
              Caffeine Free
            </Checkbox>
            <Text
              h3
              css={{
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
              }}
            >
              Cart Total:
            </Text>
          </div>

          <div className="items">
            <Grid.Container gap={2} justify="center" wrap='wrap'>
              {renderedItems.map(function(item, i) {
                  return (
                    <Grid>
                      <Card1
                        src={item.url}
                        title={item.name}
                        type={item.drinkType}
                        special={item.special}
                        price={item.price}
                      />
                      <Button auto color="gradient" >
                        Add to cart
                      </Button>
                    </Grid>
                  )
                }
              )}
            </Grid.Container>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
