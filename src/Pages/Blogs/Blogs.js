import React from "react";

const Blogs = () => {
  return (
    <div className="bg-dark container">
      <div className="d-lg-flex justify-content-between m-4 p-4">
        <img
          className="img-fluid w-50 rounded-3"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--VYXihGsl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ras8no1uj4ih1ogzy89h.png"
          alt=""
        />
        <div className="text-white ms-4 w-50">
          <h1 className="text-warning">
            Difference between authorization and authentication
          </h1>
          <article>
            <span className="fw-bolder">Authentication</span> is the process of
            determining the user’s identity via the available credentials, As a
            result, the identity is confirmed. Here are several methods for
            verifying one's identity: To establish one's identity, one can use
            usernames or passwords. As a result, they were able to get access to
            the system. Another option is to use OTPs. obtain system access for
            a single transaction Apps that produce security codes through a
            third party, allowing access to the user Biometrics, such as an eye
            scan or fingerprints, can be used to verify a person's identity..
            <br></br>
          </article>

          <article>
            <br />
            <span className="fw-bolder">Authorization</span>, meanwhile, is the
            process of providing permission to access the system.Authentication
            is frequently followed by authorization, which is classified into
            several forms. They are as follows: Single-Factor Authentication
            (SFA) entails using only a login and password to get access to the
            system. Two-level security requires a two-step verification process
            to authenticate the user's access to the system. Along with the
            login and password, some unique information, such as security
            questions, such as the first school name and other facts, is
            required for this process. OTP can also be used to verify the user's
            identity.
          </article>
        </div>
      </div>

      <div className="d-lg-flex m-4 justify-content-between p-4 ">
        <div className=" ms-4 me-4">
          <h1 className="text-center text-warning">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
          <div className="text-info">
            <article>
              It's simple to get started with Firebase or add it to an existing
              project. It supports real-time database connections, allowing
              numerous users to see changes in the data as they are made or
              changed. Web sockets manage data transfer, so you don't have to
              send requests for fresh data; I only need to subscribe once. The
              same may be said for file storage. Authentication via the major
              providers may be set up quickly (Google, Twitter, Facebook,
              GitHub).
            </article>
            <article>
              Other Options to implement authentication: HTTP Basic
              Authentication, API Key Authentication, OAuth Authentication, No
              Authentication
            </article>
          </div>
        </div>

        <img
          className="img-fluid w-50 rounded-3"
          src="https://miro.medium.com/max/1000/1*JbDo7U0l62vYMfm1WxnA1g.png"
          alt=""
        />
      </div>
      <div className="d-lg-flex justify-content-between m-4 p-4 ">
        <img
          className="img-fluid w-50 rounded-3"
          src="https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg"
          alt=""
        />
        <div className="text-warning ms-4">
          <h1>
            What other services does firebase provide other than authentication?
          </h1>
          <article>
            1. Cloud Messaging<br></br>
            Everyone, in some form or another, requires alerts in their mobile
            applications to increase user engagement. Firebase is an excellent
            solution for implementing notifications, regardless of platform,
            because it is quick, dependable, and scalable in handling your
            requests.
            <br></br>
            2. Dynamic Links<br></br>
            This service was previously known as Google URL Shortener, but it
            has now been renamed Dynamic Links. Aside from their name, Firebase
            Team has introduced a few of new capabilities to this service.
            <br></br>
            3. Predictions<br></br>
            As the name implies, this service assists you in making product
            selections forecasts. This service, in my opinion, is critical for
            growing your business and money.
            <br></br>
            4. Google Analytics <br></br>
            Another service that aids in the growth and management of your
            company. It may be used to track user demographics, behavior,
            purchase trends, and revenue statistics, among other things.
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
