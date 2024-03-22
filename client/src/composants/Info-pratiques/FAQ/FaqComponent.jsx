import React from 'react';
import './faqComponent.style.css';
import faqQuestions from './faqQuestions';

const FaqComponent = () => {
  return (
    <section className='m-8 p-10 bg-white'>
      <div className='text-left'>
        <h1 className='m-6 font-extrabold text-4xl'>FAQ</h1>
        {faqQuestions.map((questions) => (
          <FaqQuestion
            key={questions.id}
            id={questions.id}
            title={questions.title}
            content={questions.content}
          />
        ))}
      </div>
      <p className='mt-10 pb-20 text-center'>
        D'autres questions ? <br />
        <button
          type='button'
          className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 m-4'
        >
          Contactez-nous
        </button>
      </p>
    </section>
  );
};

const FaqQuestion = ({ id, title, content }) => {
  return (
    <div className='pt-7 pb-4 border-b border-dotted border-gray-300'>
      <input id={id} type='checkbox' className='panel' />
      <div className='plus'>+</div>
      <label htmlFor={id} className='panel-title'>
        {title}
      </label>
      <div className='panel-content'>{content}</div>
    </div>
  );
};

export default FaqComponent;
