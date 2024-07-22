// /**
//  * @jest-environment node
//  */
// import handler from '../../pages/[id].tsx';
// import { createMocks } from 'node-mocks-http';
// import { NextApiRequest, NextApiResponse } from 'next';

// const expected_task_sheet_json = "{\"tasks\":{\"task_sheet_ids\":[{\"id\":1},{\"id\":2}]}}"

// it('should return data with status 200', async () => {
//     const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
//         method: 'GET',
//         query: {
//             id: '2',
//         },
//     });
//     await handler(req, res);
//     expect(res.statusCode).toBe(200);
//     expect(JSON.stringify(res._getJSONData())).toEqual(expected_task_sheet_json);
// });

// it('should return error with status 400 when item not found', async () => {
//     const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
//         method: 'GET',
//         query: {
//             id: '3',
//         },
//     });

//     await handler(req, res);

//     expect(res.statusCode).toBe(404);
//     expect(res._getJSONData()).toEqual({ error: 'User with that ID does not exist' });
// });

// //TODO add tests checking all the 400 errors

