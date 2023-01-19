import jest, { global } from 'jest-mock';

jest.mock('global', () => ({
    ...global,
    WebSocket: function WebSocket() { },
}));
