const { Hook } = require('../Hook');
const { LitterData } = require('../../requests/litter/LitterData');
const { LitterRequest } = require('../../requests/litter/LitterRequest');

class LitterHook extends Hook {
  constructor(litterRequest) {
    super();
    this.litterRequest = litterRequest;
  }

  async createLitter(litterData) {
    try {
      const response = await this.litterRequest.createLitter(litterData);
      const data = response.body;
      return data;
    } catch (error) {
      this.handleException(error);
      return null;
    }
  }

  async deleteLitter(id) {
    try {
      const response = await this.litterRequest.deleteLitter(id);
      const data = response.body;
      return data;
    } catch (error) {
      this.handleException(error);
      return null;
    }
  }

  async searchLitter(breedingBoxId, page, littersPageSize) {
    try {
      const response = await this.litterRequest.searchLitter(breedingBoxId, page, littersPageSize);
      const littersData = response.body;
      return littersData;
    } catch (error) {
      this.handleException(error);
      return [];
    }
  }

  async getLitterById(litterId) {
    try {
      const response = await this.litterRequest.getLitterById(litterId);
      const litterData = response.body;
      return litterData;
    } catch (error) {
      this.handleException(error);
      return null;
    }
  }

  async updateLitter(litterId, litterData) {
    try {
      const response = await this.litterRequest.updateLitter(litterId, litterData);
      const data = response.body;
      return data;
    } catch (error) {
      this.handleException(error);
      return null;
    }
  }
}

module.exports = {
  LitterHook
};
