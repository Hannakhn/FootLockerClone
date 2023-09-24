import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  CardGroup,
  Col
} from "reactstrap";

const CardNavigation = (props) => {
  return (
    <CardGroup className="selectionCards">
      <Card hoverable>
        <CardImg src="img/MensPhoto.jpg" />
      </Card>
      <Card>
        <CardImg src="img/WomensPhoto.jpg" />
      </Card>
      <Card>
        <CardImg src="img/KidsPhoto.jpg" />
      </Card>
      <Card>
        <CardImg src="img/ClothingPhoto.jpg" />
      </Card>
      <Card>
        <CardImg src="img/AccessoriesPhoto.jpg" />
      </Card>
      <Card>
        <CardImg src="img/SalePhoto.jpg" />
      </Card>
    </CardGroup>
  );
};

export default CardNavigation;
