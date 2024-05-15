class LitterRequest {
  constructor(request) {
    this.url = '/litter';
    this.request = request;
  }

  async createLitter(litterData) {
    const response = await this.request.post(`${this.url}/`, litterData);
    return response;
  }

  async deleteLitter(id) {
    const response = await this.request.delete(`${this.url}/${id}`);
    return response;
  }

  async searchLitter(breedingBoxId, page, pageSize) {
    const response = await this.request.get(`${this.url}/search?breedingBoxId=${breedingBoxId}&page=${page}&pageSize=${pageSize}`);
    return response;
  }

  async getLitterById(litterId) {
    const response = await this.request.get(`${this.url}/${litterId}`);
    return response;
  }

  async updateLitter(litterId, litterData) {
    const response = await this.request.put(`${this.url}/${litterId}`, litterData);
    return response;
  }
}

module.exports = {
  LitterRequest
};
