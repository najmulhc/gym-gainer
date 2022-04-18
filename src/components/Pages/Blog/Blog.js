import React from "react";

const Blog = () => {
  const questions = [
    {
      ques: " Difference between authorization and authentication?",
      ans: "Authorization means allowing the selected person to perform certain task while authentication means varifieng someones identity using technologies. In web development sector, sign in or log in is know as authentication process.",
    },
    {
      ques: " Why are you using firebase? What other options do you have to implement authentication?",
      ans: "Google's firebase allows us to use authentications features to our web application. As we have more trust on google a lot, we use it's authentication tool . Apart from firebase, we can use Auth0, MongoDB, Amazon cognito etc.",
    },
    {
      ques: "What other services does firebase provide other than authentication?",
      ans: "Apart from authentication service, firebase is known for its real time database service . It also provide cloud storage, hosting , machine learning services.",
    },
  ];
  return (
    <div className="container mx-auto text-left px-8">
      <h1 className="text-komola text-3xl text-center font-bold my-8">Blog</h1>
      <div className="my-8">
        {questions.map((ques) => {
          return (
            <div className=" mb-12">
              <h2 className="text-2xl text-komola text-laft mt-2 font-bold">
                {ques.ques}
              </h2>
              <p className="text-lg text-grey font-normal">{ques.ans}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
