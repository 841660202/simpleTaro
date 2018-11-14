import request from '../../utils/request';

export const fetchLogin = params => request('/login', {
  method: 'POST',
  params,
});
