import React, { Component } from 'react'
import user from './user.png';

export default class Form extends Component {
    render() {
        return (
            <div>
                  {/* START FORM */}
      <div className="container text-center full">
        <div className="alert alert-info">
          <img width="100%" src={user} alt="" />
          <div className="name">User Name</div>
          <p className="text-one">Lorem ipsum dolor sit amet consectetur adipisicing elit </p>
          <ul>
            <li>
              <a href><i className="fas fa-map-marker-alt" /><span> Location</span></a>
            </li>
            <li>
              <a href><i className="fas fa-blog" /><span>Personal site</span></a>
            </li>
            <li>
              <a href><i className="fab fa-twitter" /><span>Twitter</span></a>
            </li>
            <li>
              <a href><i className="fab fa-github" /><span>GitHub</span></a>
            </li>
            <p className="text-two">Last active on Stack Overflow today</p>
          </ul>
          <button type="button" className="btn btn-primary nut">Edit</button>
          <button type="button" className="btn btn-light buttoni"><i className="fab fa-stack-overflow" /> <span>1</span> </button>
        </div>
        <div className="card">
          <div className="card-body">
            Tell a little more about yourself as a developer
          </div>
          <a href>Add personal statement</a>
        </div>
        <br />
        <div className="card">
          <div className="card-body">
            Tell a little more about yourself as a developer
          </div>
          <a href>Add personal statement</a>
        </div>
      </div>
      {/* END FORM */}
            </div>
        )
    }
}
