/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** The core properties of ARM resources */
export interface Resource {
  /**
   * Fully qualified resource Id for the resource. Example - '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}'.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** An error response from the service. */
export interface CloudError {
  /** Cloud error body. */
  error?: CloudErrorBody;
}

/** An error response from the service. */
export interface CloudErrorBody {
  /** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
  code?: string;
  /** A message describing the error, intended to be suitable for display in a user interface. */
  message?: string;
  /** The target of the particular error. For example, the name of the property in error. */
  target?: string;
  /** A list of additional details about the error. */
  details?: CloudErrorBody[];
}

/** The response to a Private DNS zone list operation. */
export interface PrivateZoneListResult {
  /** Information about the Private DNS zones. */
  value?: PrivateZone[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Reference to another subresource. */
export interface SubResource {
  /** Resource ID. */
  id?: string;
}

/** The response to a list virtual network link to Private DNS zone operation. */
export interface VirtualNetworkLinkListResult {
  /** Information about the virtual network links to the Private DNS zones. */
  value?: VirtualNetworkLink[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** An A record. */
export interface ARecord {
  /** The IPv4 address of this A record. */
  ipv4Address?: string;
}

/** An AAAA record. */
export interface AaaaRecord {
  /** The IPv6 address of this AAAA record. */
  ipv6Address?: string;
}

/** A CNAME record. */
export interface CnameRecord {
  /** The canonical name for this CNAME record. */
  cname?: string;
}

/** An MX record. */
export interface MxRecord {
  /** The preference value for this MX record. */
  preference?: number;
  /** The domain name of the mail host for this MX record. */
  exchange?: string;
}

/** A PTR record. */
export interface PtrRecord {
  /** The PTR target domain name for this PTR record. */
  ptrdname?: string;
}

/** An SOA record. */
export interface SoaRecord {
  /** The domain name of the authoritative name server for this SOA record. */
  host?: string;
  /** The email contact for this SOA record. */
  email?: string;
  /** The serial number for this SOA record. */
  serialNumber?: number;
  /** The refresh value for this SOA record. */
  refreshTime?: number;
  /** The retry time for this SOA record. */
  retryTime?: number;
  /** The expire time for this SOA record. */
  expireTime?: number;
  /** The minimum value for this SOA record. By convention this is used to determine the negative caching duration. */
  minimumTtl?: number;
}

/** An SRV record. */
export interface SrvRecord {
  /** The priority value for this SRV record. */
  priority?: number;
  /** The weight value for this SRV record. */
  weight?: number;
  /** The port value for this SRV record. */
  port?: number;
  /** The target domain name for this SRV record. */
  target?: string;
}

/** A TXT record. */
export interface TxtRecord {
  /** The text value of this TXT record. */
  value?: string[];
}

/** The response to a record set list operation. */
export interface RecordSetListResult {
  /** Information about the record sets in the response. */
  value?: RecordSet[];
  /**
   * The continuation token for the next page of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** The resource model definition for a ARM tracked top level resource */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The Azure Region where the resource lives */
  location?: string;
}

/** The resource model definition for an ARM proxy resource. */
export interface ProxyResource extends Resource {}

/** Describes a Private DNS zone. */
export interface PrivateZone extends TrackedResource {
  /** The ETag of the zone. */
  etag?: string;
  /**
   * The maximum number of record sets that can be created in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly maxNumberOfRecordSets?: number;
  /**
   * The current number of record sets in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly numberOfRecordSets?: number;
  /**
   * The maximum number of virtual networks that can be linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly maxNumberOfVirtualNetworkLinks?: number;
  /**
   * The current number of virtual networks that are linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly numberOfVirtualNetworkLinks?: number;
  /**
   * The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly maxNumberOfVirtualNetworkLinksWithRegistration?: number;
  /**
   * The current number of virtual networks that are linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly numberOfVirtualNetworkLinksWithRegistration?: number;
  /**
   * The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * Private zone internal Id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly internalId?: string;
}

/** Describes a link to virtual network for a Private DNS zone. */
export interface VirtualNetworkLink extends TrackedResource {
  /** The ETag of the virtual network link. */
  etag?: string;
  /** The reference of the virtual network. */
  virtualNetwork?: SubResource;
  /** Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled? */
  registrationEnabled?: boolean;
  /**
   * The status of the virtual network link to the Private DNS zone. Possible values are 'InProgress' and 'Done'. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly virtualNetworkLinkState?: VirtualNetworkLinkState;
  /**
   * The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
}

/** Describes a DNS record set (a collection of DNS records with the same name and type) in a Private DNS zone. */
export interface RecordSet extends ProxyResource {
  /** The ETag of the record set. */
  etag?: string;
  /** The metadata attached to the record set. */
  metadata?: { [propertyName: string]: string };
  /** The TTL (time-to-live) of the records in the record set. */
  ttl?: number;
  /**
   * Fully qualified domain name of the record set.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly fqdn?: string;
  /**
   * Is the record set auto-registered in the Private DNS zone through a virtual network link?
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isAutoRegistered?: boolean;
  /** The list of A records in the record set. */
  aRecords?: ARecord[];
  /** The list of AAAA records in the record set. */
  aaaaRecords?: AaaaRecord[];
  /** The CNAME record in the record set. */
  cnameRecord?: CnameRecord;
  /** The list of MX records in the record set. */
  mxRecords?: MxRecord[];
  /** The list of PTR records in the record set. */
  ptrRecords?: PtrRecord[];
  /** The SOA record in the record set. */
  soaRecord?: SoaRecord;
  /** The list of SRV records in the record set. */
  srvRecords?: SrvRecord[];
  /** The list of TXT records in the record set. */
  txtRecords?: TxtRecord[];
}

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Creating */
  Creating = "Creating",
  /** Updating */
  Updating = "Updating",
  /** Deleting */
  Deleting = "Deleting",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **Updating** \
 * **Deleting** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export type ProvisioningState = string;

/** Known values of {@link VirtualNetworkLinkState} that the service accepts. */
export enum KnownVirtualNetworkLinkState {
  /** InProgress */
  InProgress = "InProgress",
  /** Completed */
  Completed = "Completed"
}

/**
 * Defines values for VirtualNetworkLinkState. \
 * {@link KnownVirtualNetworkLinkState} can be used interchangeably with VirtualNetworkLinkState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **InProgress** \
 * **Completed**
 */
export type VirtualNetworkLinkState = string;
/** Defines values for RecordType. */
export type RecordType =
  | "A"
  | "AAAA"
  | "CNAME"
  | "MX"
  | "PTR"
  | "SOA"
  | "SRV"
  | "TXT";

/** Optional parameters. */
export interface PrivateZonesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** The ETag of the Private DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Set to '*' to allow a new Private DNS zone to be created, but to prevent updating an existing zone. Other values will be ignored. */
  ifNoneMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type PrivateZonesCreateOrUpdateResponse = PrivateZone;

/** Optional parameters. */
export interface PrivateZonesUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** The ETag of the Private DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type PrivateZonesUpdateResponse = PrivateZone;

/** Optional parameters. */
export interface PrivateZonesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** The ETag of the Private DNS zone. Omit this value to always delete the current zone. Specify the last-seen ETag value to prevent accidentally deleting any concurrent changes. */
  ifMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface PrivateZonesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateZonesGetResponse = PrivateZone;

/** Optional parameters. */
export interface PrivateZonesListOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of Private DNS zones to return. If not specified, returns up to 100 zones. */
  top?: number;
}

/** Contains response data for the list operation. */
export type PrivateZonesListResponse = PrivateZoneListResult;

/** Optional parameters. */
export interface PrivateZonesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
}

/** Contains response data for the listByResourceGroup operation. */
export type PrivateZonesListByResourceGroupResponse = PrivateZoneListResult;

/** Optional parameters. */
export interface PrivateZonesListNextOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of Private DNS zones to return. If not specified, returns up to 100 zones. */
  top?: number;
}

/** Contains response data for the listNext operation. */
export type PrivateZonesListNextResponse = PrivateZoneListResult;

/** Optional parameters. */
export interface PrivateZonesListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
}

/** Contains response data for the listByResourceGroupNext operation. */
export type PrivateZonesListByResourceGroupNextResponse = PrivateZoneListResult;

/** Optional parameters. */
export interface VirtualNetworkLinksCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** The ETag of the virtual network link to the Private DNS zone. Omit this value to always overwrite the current virtual network link. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Set to '*' to allow a new virtual network link to the Private DNS zone to be created, but to prevent updating an existing link. Other values will be ignored. */
  ifNoneMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type VirtualNetworkLinksCreateOrUpdateResponse = VirtualNetworkLink;

/** Optional parameters. */
export interface VirtualNetworkLinksUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** The ETag of the virtual network link to the Private DNS zone. Omit this value to always overwrite the current virtual network link. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type VirtualNetworkLinksUpdateResponse = VirtualNetworkLink;

/** Optional parameters. */
export interface VirtualNetworkLinksDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** The ETag of the virtual network link to the Private DNS zone. Omit this value to always delete the current zone. Specify the last-seen ETag value to prevent accidentally deleting any concurrent changes. */
  ifMatch?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface VirtualNetworkLinksGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type VirtualNetworkLinksGetResponse = VirtualNetworkLink;

/** Optional parameters. */
export interface VirtualNetworkLinksListOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of virtual network links to return. If not specified, returns up to 100 virtual network links. */
  top?: number;
}

/** Contains response data for the list operation. */
export type VirtualNetworkLinksListResponse = VirtualNetworkLinkListResult;

/** Optional parameters. */
export interface VirtualNetworkLinksListNextOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of virtual network links to return. If not specified, returns up to 100 virtual network links. */
  top?: number;
}

/** Contains response data for the listNext operation. */
export type VirtualNetworkLinksListNextResponse = VirtualNetworkLinkListResult;

/** Optional parameters. */
export interface RecordSetsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** The ETag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. */
  ifMatch?: string;
  /** Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will be ignored. */
  ifNoneMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type RecordSetsCreateOrUpdateResponse = RecordSet;

/** Optional parameters. */
export interface RecordSetsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** The ETag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. */
  ifMatch?: string;
}

/** Contains response data for the update operation. */
export type RecordSetsUpdateResponse = RecordSet;

/** Optional parameters. */
export interface RecordSetsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** The ETag of the record set. Omit this value to always delete the current record set. Specify the last-seen ETag value to prevent accidentally deleting any concurrent changes. */
  ifMatch?: string;
}

/** Optional parameters. */
export interface RecordSetsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type RecordSetsGetResponse = RecordSet;

/** Optional parameters. */
export interface RecordSetsListByTypeOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
  /** The suffix label of the record set name to be used to filter the record set enumeration. If this parameter is specified, the returned enumeration will only contain records that end with ".<recordsetnamesuffix>". */
  recordsetnamesuffix?: string;
}

/** Contains response data for the listByType operation. */
export type RecordSetsListByTypeResponse = RecordSetListResult;

/** Optional parameters. */
export interface RecordSetsListOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
  /** The suffix label of the record set name to be used to filter the record set enumeration. If this parameter is specified, the returned enumeration will only contain records that end with ".<recordsetnamesuffix>". */
  recordsetnamesuffix?: string;
}

/** Contains response data for the list operation. */
export type RecordSetsListResponse = RecordSetListResult;

/** Optional parameters. */
export interface RecordSetsListByTypeNextOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
  /** The suffix label of the record set name to be used to filter the record set enumeration. If this parameter is specified, the returned enumeration will only contain records that end with ".<recordsetnamesuffix>". */
  recordsetnamesuffix?: string;
}

/** Contains response data for the listByTypeNext operation. */
export type RecordSetsListByTypeNextResponse = RecordSetListResult;

/** Optional parameters. */
export interface RecordSetsListNextOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of record sets to return. If not specified, returns up to 100 record sets. */
  top?: number;
  /** The suffix label of the record set name to be used to filter the record set enumeration. If this parameter is specified, the returned enumeration will only contain records that end with ".<recordsetnamesuffix>". */
  recordsetnamesuffix?: string;
}

/** Contains response data for the listNext operation. */
export type RecordSetsListNextResponse = RecordSetListResult;

/** Optional parameters. */
export interface PrivateDnsManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
