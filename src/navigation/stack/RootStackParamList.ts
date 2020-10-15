import {RootScreens} from '../../screens/screens';
import {Film} from '../../models/film';

export type RootStackParamList = {
  [RootScreens.Home]: undefined;
  [RootScreens.Favourite]: undefined;
  [RootScreens.Discription]: {film: Film};
};
