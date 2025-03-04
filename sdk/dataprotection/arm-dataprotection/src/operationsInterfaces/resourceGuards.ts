/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ResourceGuardResource,
  ResourceGuardsGetResourcesInSubscriptionOptionalParams,
  ResourceGuardsGetResourcesInResourceGroupOptionalParams,
  DppBaseResource,
  ResourceGuardsGetDisableSoftDeleteRequestsObjectsOptionalParams,
  ResourceGuardsGetDeleteResourceGuardProxyRequestsObjectsOptionalParams,
  ResourceGuardsGetBackupSecurityPINRequestsObjectsOptionalParams,
  ResourceGuardsGetDeleteProtectedItemRequestsObjectsOptionalParams,
  ResourceGuardsGetUpdateProtectionPolicyRequestsObjectsOptionalParams,
  ResourceGuardsGetUpdateProtectedItemRequestsObjectsOptionalParams,
  ResourceGuardsPutOptionalParams,
  ResourceGuardsPutResponse,
  ResourceGuardsGetOptionalParams,
  ResourceGuardsGetResponse,
  ResourceGuardsDeleteOptionalParams,
  PatchResourceRequestInput,
  ResourceGuardsPatchOptionalParams,
  ResourceGuardsPatchResponse,
  ResourceGuardsGetDefaultDisableSoftDeleteRequestsObjectOptionalParams,
  ResourceGuardsGetDefaultDisableSoftDeleteRequestsObjectResponse,
  ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObjectOptionalParams,
  ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObjectResponse,
  ResourceGuardsGetDefaultBackupSecurityPINRequestsObjectOptionalParams,
  ResourceGuardsGetDefaultBackupSecurityPINRequestsObjectResponse,
  ResourceGuardsGetDefaultDeleteProtectedItemRequestsObjectOptionalParams,
  ResourceGuardsGetDefaultDeleteProtectedItemRequestsObjectResponse,
  ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObjectOptionalParams,
  ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObjectResponse,
  ResourceGuardsGetDefaultUpdateProtectedItemRequestsObjectOptionalParams,
  ResourceGuardsGetDefaultUpdateProtectedItemRequestsObjectResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ResourceGuards. */
export interface ResourceGuards {
  /**
   * Returns ResourceGuards collection belonging to a subscription.
   * @param options The options parameters.
   */
  listResourcesInSubscription(
    options?: ResourceGuardsGetResourcesInSubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ResourceGuardResource>;
  /**
   * Returns ResourceGuards collection belonging to a ResourceGroup.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param options The options parameters.
   */
  listResourcesInResourceGroup(
    resourceGroupName: string,
    options?: ResourceGuardsGetResourcesInResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ResourceGuardResource>;
  /**
   * Returns collection of operation request objects for a critical operation protected by the given
   * ResourceGuard resource.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName
   * @param options The options parameters.
   */
  listDisableSoftDeleteRequestsObjects(
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsGetDisableSoftDeleteRequestsObjectsOptionalParams
  ): PagedAsyncIterableIterator<DppBaseResource>;
  /**
   * Returns collection of operation request objects for a critical operation protected by the given
   * ResourceGuard resource.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName
   * @param options The options parameters.
   */
  listDeleteResourceGuardProxyRequestsObjects(
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsGetDeleteResourceGuardProxyRequestsObjectsOptionalParams
  ): PagedAsyncIterableIterator<DppBaseResource>;
  /**
   * Returns collection of operation request objects for a critical operation protected by the given
   * ResourceGuard resource.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName
   * @param options The options parameters.
   */
  listBackupSecurityPINRequestsObjects(
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsGetBackupSecurityPINRequestsObjectsOptionalParams
  ): PagedAsyncIterableIterator<DppBaseResource>;
  /**
   * Returns collection of operation request objects for a critical operation protected by the given
   * ResourceGuard resource.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName
   * @param options The options parameters.
   */
  listDeleteProtectedItemRequestsObjects(
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsGetDeleteProtectedItemRequestsObjectsOptionalParams
  ): PagedAsyncIterableIterator<DppBaseResource>;
  /**
   * Returns collection of operation request objects for a critical operation protected by the given
   * ResourceGuard resource.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName
   * @param options The options parameters.
   */
  listUpdateProtectionPolicyRequestsObjects(
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsGetUpdateProtectionPolicyRequestsObjectsOptionalParams
  ): PagedAsyncIterableIterator<DppBaseResource>;
  /**
   * Returns collection of operation request objects for a critical operation protected by the given
   * ResourceGuard resource.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName
   * @param options The options parameters.
   */
  listUpdateProtectedItemRequestsObjects(
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsGetUpdateProtectedItemRequestsObjectsOptionalParams
  ): PagedAsyncIterableIterator<DppBaseResource>;
  /**
   * Creates or updates a ResourceGuard resource belonging to a resource group.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName The name of ResourceGuard
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  put(
    resourceGroupName: string,
    resourceGuardsName: string,
    parameters: ResourceGuardResource,
    options?: ResourceGuardsPutOptionalParams
  ): Promise<ResourceGuardsPutResponse>;
  /**
   * Returns a ResourceGuard belonging to a resource group.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName The name of ResourceGuard
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsGetOptionalParams
  ): Promise<ResourceGuardsGetResponse>;
  /**
   * Deletes a ResourceGuard resource from the resource group.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName The name of ResourceGuard
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceGuardsName: string,
    options?: ResourceGuardsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates a ResourceGuard resource belonging to a resource group. For example, updating tags for a
   * resource.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName The name of ResourceGuard
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  patch(
    resourceGroupName: string,
    resourceGuardsName: string,
    parameters: PatchResourceRequestInput,
    options?: ResourceGuardsPatchOptionalParams
  ): Promise<ResourceGuardsPatchResponse>;
  /**
   * Returns collection of operation request objects for a critical operation protected by the given
   * ResourceGuard resource.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName
   * @param requestName
   * @param options The options parameters.
   */
  getDefaultDisableSoftDeleteRequestsObject(
    resourceGroupName: string,
    resourceGuardsName: string,
    requestName: string,
    options?: ResourceGuardsGetDefaultDisableSoftDeleteRequestsObjectOptionalParams
  ): Promise<ResourceGuardsGetDefaultDisableSoftDeleteRequestsObjectResponse>;
  /**
   * Returns collection of operation request objects for a critical operation protected by the given
   * ResourceGuard resource.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName
   * @param requestName
   * @param options The options parameters.
   */
  getDefaultDeleteResourceGuardProxyRequestsObject(
    resourceGroupName: string,
    resourceGuardsName: string,
    requestName: string,
    options?: ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObjectOptionalParams
  ): Promise<
    ResourceGuardsGetDefaultDeleteResourceGuardProxyRequestsObjectResponse
  >;
  /**
   * Returns collection of operation request objects for a critical operation protected by the given
   * ResourceGuard resource.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName
   * @param requestName
   * @param options The options parameters.
   */
  getDefaultBackupSecurityPINRequestsObject(
    resourceGroupName: string,
    resourceGuardsName: string,
    requestName: string,
    options?: ResourceGuardsGetDefaultBackupSecurityPINRequestsObjectOptionalParams
  ): Promise<ResourceGuardsGetDefaultBackupSecurityPINRequestsObjectResponse>;
  /**
   * Returns collection of operation request objects for a critical operation protected by the given
   * ResourceGuard resource.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName
   * @param requestName
   * @param options The options parameters.
   */
  getDefaultDeleteProtectedItemRequestsObject(
    resourceGroupName: string,
    resourceGuardsName: string,
    requestName: string,
    options?: ResourceGuardsGetDefaultDeleteProtectedItemRequestsObjectOptionalParams
  ): Promise<ResourceGuardsGetDefaultDeleteProtectedItemRequestsObjectResponse>;
  /**
   * Returns collection of operation request objects for a critical operation protected by the given
   * ResourceGuard resource.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName
   * @param requestName
   * @param options The options parameters.
   */
  getDefaultUpdateProtectionPolicyRequestsObject(
    resourceGroupName: string,
    resourceGuardsName: string,
    requestName: string,
    options?: ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObjectOptionalParams
  ): Promise<
    ResourceGuardsGetDefaultUpdateProtectionPolicyRequestsObjectResponse
  >;
  /**
   * Returns collection of operation request objects for a critical operation protected by the given
   * ResourceGuard resource.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param resourceGuardsName
   * @param requestName
   * @param options The options parameters.
   */
  getDefaultUpdateProtectedItemRequestsObject(
    resourceGroupName: string,
    resourceGuardsName: string,
    requestName: string,
    options?: ResourceGuardsGetDefaultUpdateProtectedItemRequestsObjectOptionalParams
  ): Promise<ResourceGuardsGetDefaultUpdateProtectedItemRequestsObjectResponse>;
}
