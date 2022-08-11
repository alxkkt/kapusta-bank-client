import Icons from '../../../images/icons.svg';

const Icon = ({ name, width, height, className }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={Icons + `#${name}`}></use>
    </svg>
  );
};

export default Icon;
