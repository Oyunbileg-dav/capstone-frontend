import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function MultipleChoiceQuestion(props) {
  const [answer, setAnswer] = useState(null);
  const [helperText, setHelperText] = useState("")
  const [className, setClassName] = useState("")

  const handleSubmit = (quiz_answer, e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configuration 
    if (answer === quiz_answer) {
        setHelperText('You got it!');
        setClassName('text-success')
    } else if (answer !== "") {
        setHelperText('Sorry, wrong answer!');
        setClassName('text-danger')
    } else {
      setHelperText('Please select an option.');
      setClassName('text-danger')
    }
  }

  return (
    <>
    <div class="card">
      <h5 className='text-right' style={{'margin-left':'10px', 'margin-top':'15px'}}>{props.quizPrompt}</h5>
        <div class="container">
        <Form onSubmit={(e)=>handleSubmit(props.answer, e)}>
        <Form.Group controlId="formBasicPassword">
                <Form.Check 
                    type='checkbox'
                    id={`${props.options[0]}`}
                    label={`${props.options[0]}`}
                    onChange={(e) => setAnswer(e.target.id)}
                />
                <Form.Check 
                    type='checkbox'
                    id={`${props.options[1]}`}
                    label={`${props.options[1]}`}
                    onChange={(e) => setAnswer(e.target.id)}
                />
                <Form.Check 
                    type='checkbox'
                    id={`${props.options[2]}`}
                    label={`${props.options[2]}`}
                    onChange={(e) => setAnswer(e.target.id)}
                />
        </Form.Group>
        
        {/* submit button */}
        <Button className="btn" variant="secondary" type="submit" style={{backgroundColor:'#232323'}} onClick={(e)=>handleSubmit(props.answer, e)}>
        Check
        </Button>
        {answer ? (
            <p><b>You selected: </b>{answer}</p>
        ) : null}
        <p className={className}>{helperText}</p>
        </Form>
        </div>
    </div>
    </>
 )}

export default MultipleChoiceQuestion;