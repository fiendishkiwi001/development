import { Button, Card, Col, Text } from "@nextui-org/react";
import './App.css';

export const Card1 = ({ src, title, type, special, price }) => (
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="black">
          {type}
        </Text>
        <Text h4 color="black">
          {title}
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src={src}
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
    <Card.Footer>
      <div className="cardInfo">
        <div className="row">
          <Text h4 color="black">
            ${price} &nbsp;
          </Text>
          <Text size="$xs" color="black">
            {special.map(function(value, i) {
              return (
                i === 0 ? value : ", " + value
              )
            })}
          </Text>
        </div>
      </div>
      
      
    </Card.Footer>
  </Card>
);