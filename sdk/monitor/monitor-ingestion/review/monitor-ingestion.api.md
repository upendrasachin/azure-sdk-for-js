## API Report File for "@azure/monitor-ingestion"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { CommonClientOptions } from '@azure/core-client';
import { OperationOptions } from '@azure/core-client';
import { TokenCredential } from '@azure/core-auth';

// @public
export class AggregateUploadLogsError extends Error {
    constructor(errors: UploadLogsFailure[], errorMessage?: string);
    errors: UploadLogsFailure[];
}

// @public
export const AggregateUploadLogsErrorName = "AggregateUploadLogsError";

// @public
export function isAggregateUploadLogsError(e: unknown): e is AggregateUploadLogsError;

// @public
export class LogsIngestionClient {
    constructor(endpoint: string, tokenCredential: TokenCredential, options?: LogsIngestionClientOptions);
    upload(ruleId: string, streamName: string, logs: Record<string, unknown>[], options?: UploadLogsOptions): Promise<void>;
}

// @public
export interface LogsIngestionClientOptions extends CommonClientOptions {
    apiVersion?: string;
}

// @public
export interface UploadLogsFailure {
    cause: Error;
    failedLogs: Record<string, unknown>[];
}

// @public
export interface UploadLogsOptions extends OperationOptions {
    maxConcurrency?: number;
    onError?: (uploadLogsError: UploadLogsFailure) => void;
}

```
