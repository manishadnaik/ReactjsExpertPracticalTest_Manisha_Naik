import { SubmissionError } from 'redux-form';
import { useDispatch } from 'react-redux';
import { logInStart } from '../../store/auth/authActions';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Submit(credentials, dispatch, historyObj) {
  const { history } = historyObj;
  dispatch(logInStart(credentials, history));

  // await sleep(1000);
  // // simulate server latency
  // if (!["john", "paul", "george", "ringo"].includes(values.username)) {
  //   throw new SubmissionError({
  //     username: "User does not exist",
  //     _error: "Login failed!",
  //   });
  // } else if (values.password !== "redux-form") {
  //   throw new SubmissionError({
  //     password: "Wrong password",
  //     _error: "Login failed!",
  //   });
  // } else {
  //   window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  // }
}

export default Submit;
