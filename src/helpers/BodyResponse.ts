type Data = {
  views: number;
  videos: number;
};

class BodyResponse {
  private status: string;
  private code: number;
  private message: string;
  private data: [] | null | Data;

  constructor(
    status: string,
    code: number,
    message: string,
    data: [] | null | Data
  ) {
    this.status = status;
    this.code = code;
    this.message = message;
    this.data = data;
  }
}

export default BodyResponse;
