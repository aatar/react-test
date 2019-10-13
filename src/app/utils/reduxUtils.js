import Immutable from 'seamless-immutable';

/**
 * Receives an array of strings, and returns an obj with that strings as properties with that string as value.
 * E.G:
 * stringArrayToObject(['A', 'B', 'C']) // { A: 'A', B: 'B', C: 'C' }
 */
export function stringArrayToObject(actionsArray, namespace = '') {
  if (actionsArray.some(actionName => !actionName || typeof actionName !== 'string')) {
    throw new Error('Action names must be strings and must not be empty');
  }
  return Immutable(actionsArray).asObject(actionName => [actionName, `${namespace}:${actionName}`]);
}

export const listDefaultValues = {
  count: 0,
  current_page: 0,
  next_page: null,
  page: [],
  total_count: 0,
  total_pages: 0
};
