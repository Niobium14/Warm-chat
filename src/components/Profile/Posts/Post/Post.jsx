import React, { Component } from "react";
import css from "./Post.module.css";
import person1 from "../../../../photos/person1.jpg";
import person3 from "../../../../photos/person3.jpg";
import First from "./First/First";
import Second from "./Second/Second";

export default class Post extends Component {
  render() {
    let postData = [
      {
        id: 1,
        message:
          " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
        name: "Maria Simpson ",
        img: person1,
      },
      {
        id: 2,
        message:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        name: "Alex Dochkon",
        img: person3,
      },
    ];

    return (
      <div className={css.posts}>
        <First
          message={postData[0].message}
          name={postData[0].name}
          img={postData[0].img}
        />
        <Second
          message={postData[1].message}
          name={postData[1].name}
          img={postData[1].img}
          
        />
      </div>
    );
  }
}
