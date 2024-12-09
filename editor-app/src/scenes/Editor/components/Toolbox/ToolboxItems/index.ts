import Default from "./Default";
import Path from "./Path";
import Illustration from "./Illustration";
import Image from "./Image";

class ToolboxItems {
  static Default: typeof Default = Default;
  static StaticPath: typeof Path = Path;
  static StaticVector: typeof Illustration = Illustration;
  static StaticImage: typeof Image = Image;
}

export default ToolboxItems;
