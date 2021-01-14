import API from '../utils/API';

it('searches for the weather via zip code', async () => {
  const results = await API.search(21044).then(res => {return res}).catch(err => console.log(err));
  expect(results.data.name).toEqual('Columbia');
});
