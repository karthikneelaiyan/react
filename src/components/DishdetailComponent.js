import React from "react";
import { Media } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else return <div />;
}
function FormatDate(date = "") {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  date = new Date(date);
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + " " + monthNames[monthIndex] + "," + year;
}
function RenderComments({ dish }) {
  if (null == dish) {
    return <div />;
  }

  console.log(dish.comments);
  const commentsItems = dish.comments.map(cmt => (
    <li key={cmt.id}>
      <p>{cmt.comment}</p>

      <p>
        -- {cmt.author} ,<FormatDate date={cmt.date} />
      </p>
    </li>
  ));
  return (
    <div>
      <h2>Comment</h2>
      <ul key={dish.id}>{commentsItems}</ul>
    </div>
  );
}
const DishDetail = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.selected_dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments dish={props.selected_dish} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
