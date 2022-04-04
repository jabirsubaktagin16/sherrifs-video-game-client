import React from "react";

const Blogs = () => {
  return (
    <section className="container">
      <h1 className="text-center" style={{ fontSize: "3.5rem" }}>
        Question Answers
      </h1>
      <div className="row row-cols-1 g-5 my-2 px-5">
        <div className="col">
          <h2>What is Context API? What is the Purpose of it?</h2>
          <p>
            Context API is a React structure that enables to exchange unique
            details and helps in solving prop-drilling from all levels of an
            application. In other words, Context API allows us to share
            data(state) across our components more easily.
          </p>
          <p>We can use Context API in these operations-</p>
          <ol>
            <li>Theme data (like dark or light mode)</li>
            <li>User data (the currently authenticated user)</li>
            <li>Location-specific data (like user language or locale)</li>
          </ol>
          <p>
            Context API is mainly used to avoid <strong>Props Drilling</strong>.{" "}
            <strong>Props Drilling</strong> is a term that describes when you
            pass props down multiple levels to a nested component, through
            components that don't need it.
          </p>
        </div>
        <div className="col">
          <h2>What is Semantic Tag?</h2>
          <p>
            Semantic tags are those tags that has a clear meaning in a human and
            machine-readable way.
          </p>
          <p>The Purpose of using Semantic Tags is given below:</p>
          <ul>
            <li>
              It help the search engines and other user devices to determine the
              importance and context of web pages
            </li>
            <li>Pages made with it are much easier to read</li>
            <li>
              It has greater accessibility and it also offers better user
              experience
            </li>
          </ul>
          <p>
            Some of the common semantic tags are{" "}
            <strong>header, nav, section, article, aside, footer</strong>.
          </p>
        </div>
        <div className="col">
          <h2>
            Write Down Differences Between Inline, Block and Inline-Block
            Elements.
          </h2>
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Inline</th>
                <th scope="col">Block</th>
                <th scope="col">Inline-Block</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  The element doesn't start on a new line and only occupy just
                  the width it requires
                </td>
                <td>
                  The element will start on a new line and occupy the full width
                  available
                </td>
                <td>
                  It's formatted just like the inline element, where it doesn't
                  start on a new line
                </td>
              </tr>
              <tr>
                <td>Can't set the width or height</td>
                <td>Can set width and height values</td>
                <td>Can set width and height values</td>
              </tr>
              <tr>
                <td>
                  Respects left & right margins and padding, but not top &
                  bottom
                </td>
                <td>Respects all of margins and padding</td>
                <td>Allows other elements to sit to their left and right</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
