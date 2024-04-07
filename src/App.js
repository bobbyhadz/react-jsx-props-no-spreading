import './App.css';

const App = props => {
  const {disabled, className} = props;

  // 👇️ Only passing props directly
  return (
    <div>
      <Button disabled={disabled} className={className} />
    </div>
  );
};

export default App;

function Button({disabled, className}) {
  return (
    <button disabled={disabled} className={className}>
      Click
    </button>
  );
}
