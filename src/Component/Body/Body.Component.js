import React from "react";
// import Vector from "../../images/Vector.svg"
import Img from "../../images/heroimg";
import moderation from "../../images/moderation.svg";
import economy from "../../images/economy.svg";
import modmail from "../../images/modmail.svg";

const Body = () => {
  return (
    <>
      <div className="Container">
        <div className="ContainerPart">
          <div className="ContainerPart1">
            <p>Make Your Server Better </p>
            <p>With Us!</p>
            <p>Moderation, Economy and Modmail Bot</p>
            <div className="joint">
              <button>Add to Discord</button>
              <button className="secondary-button"> Join Our Server</button>
            </div>
          </div>

          <Img />
        </div>
      </div>
      <div className="firstPart">
        <p>How It Works</p>
        <div className="firstPart1">
          <img src={moderation} alt="" />
          <div className="textPart1">
            <h3>Moderation</h3>
            <p>
              Moderation is the process of eliminating or lessening extremes. It
              is used to ensure normality throughout the medium on which it is
              being conducted. Common uses of moderation include: Ensuring
              consistency and accuracy in the marking of student assessments.
            </p>
            <p>
              Our bot helps to moderate / manage your server with it’s built in
              moderation system. It helps to kick, ban or give roles to other
              people of the server.
            </p>
          </div>
        </div>
        <div className="firstPart2">
          <div className="textPart2">
            <h3>Economy</h3>
            <p>
              An economy is an area of the production, distribution and trade,
              as well as consumption of goods and services by different agents.
              In general, it is defined 'as a social domain that emphasize the
              practices, discourses, and material expressions associated with
              the production, use, and management of resources'.
            </p>
            <p>
              Our bot also helps you to manage and trade your own cash and
              goods.
            </p>
          </div>
          <img src={economy} alt="economy" />
        </div>
        <div className="firstPart3">
          <img src={modmail} alt="modmail" />.
          <div className="textPart3">
            <h3>Modmail</h3>
            <p>
              Our bot also helps you to contact your server staff easily. It
              helps your server members to contact your staff easily. It makes
              your staff to work with your server members to solve their
              problems. It helps to make your staff’s work faster and easier.
            </p>
          </div>
        </div>
      </div>
      );
    </>
  );
};
export default Body;
