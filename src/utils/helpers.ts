import moment from 'moment';

export const fillArray = (lengh: number) => {
  return [...Array(lengh).keys()];
};

export const calculateTimeDifference = (compareTime: any, delaySec: number) => {
  const currentTime = moment();
  const lastResendMoment = moment(compareTime);
  const differenceInSeconds = currentTime.diff(lastResendMoment, 'seconds');
  const result = delaySec - differenceInSeconds;
  return result > 0 ? result : 0;
};
