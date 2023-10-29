import { createAction, props } from '@ngrx/store';
import { CreateLodge, Lodge } from './lodge';

export const invokeLodgesAPI = createAction(
  '[Lodge API] Invoke Fetch Lodges API'
);

export const lodgesFetchAPISuccess = createAction(
  '[Lodge API] Fetch Lodge API Success',
  props<{ allLodges: Lodge[] }>()
);

//  Create Lodge
export const invokeSaveNewLodgeAPI = createAction(
  '[Lodge API] Invoke save new Lodge api',
  props<{ newLodge: any }>()
);

export const saveLodgeAPISuccess = createAction(
  '[Lodge API] save new Lodge API Success',
  props<{ newLodge: any }>()
);
