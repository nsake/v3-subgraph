import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts';

export const FACTORY_ADDRESS = Address.fromString('0xB1c0fa0B789320044A6F623cFe5eBda9562602E3');

export const REFERENCE_TOKEN = '0x5555555555555555555555555555555555555555'; // WHYPE
export const STABLE_TOKEN_POOL = '0x337b56d87a6185cd46af3ac2cdf03cbc37070c30'; // USDT0/WHYPE
export const POOL_EVENTS_FROM_BLOCK = 1; // TODO: set to desired cutoff

export const TVL_MULTIPLIER_THRESHOLD = '2';
export const MATURE_MARKET = '1000000';
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('100');

export const ROLL_DELETE_HOUR = 768;
export const ROLL_DELETE_MINUTE = 1680;

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500);
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000);

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with s
export const WHITELIST_TOKENS: string[] = [
  '0x5555555555555555555555555555555555555555',
  '0xb8ce59fc3717ada4c02eadf9682a9e934f625ebb'
];

export const STABLE_COINS: string[] = ['0xb8ce59fc3717ada4c02eadf9682a9e934f625ebb'];

export const SKIP_POOLS: string[] = ['0x337b56d87a6185cd46af3ac2cdf03cbc37070c30'];

export const POOL_MAPINGS: Array<Address[]> = [];

export class TokenDefinition {
  address: Address;
  symbol: string;
  name: string;
  decimals: BigInt;
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = [];
