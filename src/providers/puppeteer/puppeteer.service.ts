import { Injectable } from '@nestjs/common';
import puppeteer, { Browser } from 'puppeteer';

@Injectable()
export class PuppeteerService {
  constructor(private readonly browser: Browser) {}

  // Static
  public static async create() {
    return new PuppeteerService(await puppeteer.launch());
  }
}
