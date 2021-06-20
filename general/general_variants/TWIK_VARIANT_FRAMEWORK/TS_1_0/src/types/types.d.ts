export { };

declare global {
  interface Window {
    $tw: any;
    TWIK_ID: string;
    twik_tags: object[];
    twik_user_data: Map;
  }
  interface LooseObject {
    [key: string]: any
  }
}