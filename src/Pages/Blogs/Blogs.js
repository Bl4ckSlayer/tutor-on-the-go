import React from "react";

const Blogs = () => {
  return (
    <div className="bg-dark ">
      <div className="d-lg-flex justify-content-between m-4 p-4">
        <img
          className="img-fluid w-50"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--VYXihGsl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ras8no1uj4ih1ogzy89h.png"
          alt=""
        />
        <div className="text-danger ms-4 w-50">
          <h1>Difference between authorization and authentication</h1>
          <article>
            <span className="fw-bolder">Authentication</span> is the process of
            determining the user’s identity via the available credentials, thus
            verifying the identity. Some ways to authenticate one’s identity are
            listed here: Usernames or passwords can be used to establish one’s
            identity, thus gaining access to the system. OTPs are another way to
            get access to the system for a single transaction Apps that generate
            security codes via the third party, thus enabling access for the
            user Biometrics such as an eye scan or fingerprints can be used to
            gain access Some systems may require successful verification via
            multiple factors.<br></br>
          </article>

          <article>
            <br />
            <span className="fw-bolder">Authorization</span>, meanwhile, is the
            process of providing permission to access the system. Authorization
            often follows authentication and is listed as various types. They
            are: Single-Factor Authentication- use only a username and password,
            thus enabling the user to access the system quite easily. Two-level
            security asks for a two-step verification, thus authenticating the
            user to access the system. For this process, along with the username
            and password, some unique information including security questions,
            like first school name and such details, need to be answered. Or the
            user identity can also be verified with OTP. An advanced level
            secure authorization calls for multiple level security from varied
            independent categories. These are also utilised more by financial
            institutions, banks or law enforcement agencies, thus eliminating
            the need for data exposure to a 3rd party or hackers.
          </article>
        </div>
      </div>

      <div className="d-lg-flex m-4 justify-content-between p-4 ">
        <div className=" ms-4 me-4">
          <h1 className="text-center text-danger">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
          <div className="text-info">
            <article>
              It’s easy to start a project with Firebase or add a Firebase to my
              project. It allows real-time database connection, which means
              multiple users can see the changes in the data when the data gets
              created or edited. Data transmission is handled with web sockets
              so you don’t have to send requests to get new data, i only need to
              subscribe once. The same applies for file storage. Quick setup
              authentication via the major providers (Google, Twitter, Facebook,
              GitHub). Https by default - secure http traffic without setting up
              certificates. Any static html/javascript content can be hosted.
            </article>
            <article>
              Other Options to implement authentication: HTTP Basic
              Authentication API Key Authentication OAuth Authentication No
              Authentication
            </article>
          </div>
        </div>

        <img
          className="img-fluid"
          src="https://miro.medium.com/max/1000/1*JbDo7U0l62vYMfm1WxnA1g.png"
          alt=""
        />
      </div>
      <div className="d-lg-flex justify-content-between m-4 p-4 ">
        <img
          className="img-fluid"
          src="https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg"
          alt=""
        />
        <div className="text-danger ms-4">
          <h1>
            What other services does firebase provide other than authentication?
          </h1>
          <article>
            1. Cloud Messaging<br></br>
            Everyone needs notifications in their mobile applications in one way
            or another, for enhanced engagement with their users. Firebase is a
            great tool to implement notifications, irrespective of the platform
            because it is fast, reliable, and scalable to handle your requests.
            Moreover, you won’t be charged a penny for using this service as
            it’s free of charge.
            <br></br>
            2. Dynamic Links<br></br>
            This service was called google URL shortener in the past, but now it
            is renamed as Dynamic Links. In addition to their name, a couple of
            new features have been added to this service by Firebase Team.
            <br></br>
            3. Predictions<br></br>
            As the name suggests, this service helps you in making predictions
            about your product decisions. In my opinion, this service is
            important to increase your business and revenue. Without having any
            machine learning experience, you can use this service easily in
            dividing the users in different fragments, and you can make
            decisions based on their behavior.
            <br></br>
            4. Google Analytics <br></br>
            Yet another service that helps in growing and managing your
            business. It can become helpful in tracking user demographics,
            behavior, purchasing patterns, revenue reports.
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
