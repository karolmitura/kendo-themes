---
title: Customization
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic
position: 9
---

# Customization




## Variables

The following table lists the available variables for customizing the Classic theme.

### Common

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-body-bg</td>
    <td>String</td>
    <td><code>$kendo-color-white</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-body-text</td>
    <td>String</td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-subtle-text</td>
    <td>String</td>
    <td><span class="color-preview" style="background-color: #646464"></span><code>#646464</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Subtle text color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-link-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the links.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-link-hover-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary-darker</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the links on hover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-bg</td>
    <td>String</td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-text</td>
    <td>String</td>
    <td><code>$kendo-body-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-border</td>
    <td>String</td>
    <td><code>k-try-shade( $kendo-base-bg, 2 )</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-gradient</td>
    <td>Null</td>
    <td><code>rgba( white, .1 ), rgba( white, 0 )</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-bg</td>
    <td>String</td>
    <td><code>k-try-shade( $kendo-base-bg, 1 )</code></td>
    <td><code>var(--kendo-color-base-hover, #dddddd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-text</td>
    <td>String</td>
    <td><code>$kendo-base-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-border</td>
    <td>String</td>
    <td><code>k-try-shade( $kendo-hover-bg, 2 )</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-gradient</td>
    <td>Null</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-text</td>
    <td>String</td>
    <td><code>k-contrast-legacy( $kendo-selected-bg )</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-border</td>
    <td>String</td>
    <td><code>k-try-shade( $kendo-selected-bg, 2 )</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-gradient</td>
    <td>Null</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-bg</td>
    <td>String</td>
    <td><code>k-try-shade( $kendo-selected-bg, 1 )</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-text</td>
    <td>String</td>
    <td><code>k-contrast-legacy( $kendo-selected-hover-bg )</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-border</td>
    <td>String</td>
    <td><code>$kendo-selected-border</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-gradient</td>
    <td>Null</td>
    <td><code>$kendo-selected-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-text</td>
    <td>String</td>
    <td><span class="color-preview" style="background-color: #8d8d8d"></span><code>#8d8d8d</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of disabled items.</div></div>
    </td>
</tr>
</tbody>
</table>

### Appbar

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-appbar-margin-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-margin-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-zindex</td>
    <td>Number</td>
    <td><code>1000</code></td>
    <td><code>1000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The z-index of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-gap</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the AppBar sections.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-light-bg</td>
    <td>String</td>
    <td><code>$kendo-color-light</code></td>
    <td><code>var(--kendo-color-light, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the AppBar based on light theme color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-light-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-light ), k-contrast-color( $kendo-color-light ))</code></td>
    <td><code>var(--kendo-color-on-light, #000000)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the AppBar based on light theme color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-dark-bg</td>
    <td>String</td>
    <td><code>$kendo-color-dark</code></td>
    <td><code>var(--kendo-color-dark, #404040)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the AppBar based on dark theme color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-dark-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-dark ), k-contrast-color( $kendo-color-dark ))</code></td>
    <td><code>var(--kendo-color-on-dark, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the AppBar based on dark theme colorr.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-box-shadow</td>
    <td>String</td>
    <td><code>k-elevation(4)</code></td>
    <td><code>var(--kendo-elevation-4, 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-bottom-box-shadow</td>
    <td>String</td>
    <td><code>k-elevation(4)</code></td>
    <td><code>var(--kendo-elevation-4, 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the AppBar with bottom position.</div></div>
    </td>
</tr>
</tbody>
</table>

### Avatar

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-avatar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: k-spacing(4),
    md: k-spacing(8),
    lg: k-spacing(16)
)</code></td>
    <td><code>(sm: var(--kendo-spacing-4, 1rem), md: var(--kendo-spacing-8, 2rem), lg: var(--kendo-spacing-16, 4rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-theme-colors</td>
    <td>Map</td>
    <td><code>$kendo-theme-colors</code></td>
    <td><code>("primary": var(--kendo-color-primary, #f35800), "secondary": var(--kendo-color-secondary, #b6b6b6), "tertiary": var(--kendo-color-tertiary, #03a9f4), "info": var(--kendo-color-info, #007bc3), "success": var(--kendo-color-success, #3ea44e), "warning": var(--kendo-color-warning, #ffa41f), "error": var(--kendo-color-error, #d92800), "dark": var(--kendo-color-dark, #404040), "light": var(--kendo-color-light, #ebebeb), "inverse": var(--kendo-color-dark, #404040))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the Avatar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Badge

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-badge-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-md-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-lg-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-md-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-lg-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-xs, inherit )</code></td>
    <td><code>var(--kendo-font-size-xs, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font sizes of the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-xs, inherit )</code></td>
    <td><code>var(--kendo-font-size-xs, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-md-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-xs, inherit )</code></td>
    <td><code>var(--kendo-font-size-xs, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-lg-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-xs, inherit )</code></td>
    <td><code>var(--kendo-font-size-xs, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-line-height</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line heights used along with the $kendo-font-size variable.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-line-height</td>
    <td>Number</td>
    <td><code>$kendo-badge-line-height</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable of the small Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-md-line-height</td>
    <td>Number</td>
    <td><code>$kendo-badge-line-height</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable of the medium Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-lg-line-height</td>
    <td>Number</td>
    <td><code>$kendo-badge-line-height</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable of the large Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-min-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-badge-line-height * 1em} + calc( #{$kendo-badge-padding-y} * 2 ) + calc( #{$kendo-badge-border-width} * 2 ))</code></td>
    <td><code>calc(1em + var(--kendo-spacing-1, 0.25rem) * 2 + 1px * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated minimum width of the circular Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-min-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-badge-sm-line-height * 1em} + calc( #{$kendo-badge-sm-padding-y} * 2 ) + calc( #{$kendo-badge-border-width} * 2 ) )</code></td>
    <td><code>calc(1em + var(--kendo-spacing-0\.5, 0.125rem) * 2 + 1px * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated minimum width of the small circular Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-md-min-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-badge-md-line-height * 1em} + calc( #{$kendo-badge-md-padding-y} * 2 ) + calc( #{$kendo-badge-border-width} * 2 ) )</code></td>
    <td><code>calc(1em + var(--kendo-spacing-1, 0.25rem) * 2 + 1px * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated minimum width of the medium circular Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-lg-min-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-badge-lg-line-height * 1em} + calc( #{$kendo-badge-lg-padding-y} * 2 ) + calc( #{$kendo-badge-border-width} * 2 ) )</code></td>
    <td><code>calc(1em + var(--kendo-spacing-1\.5, 0.375rem) * 2 + 1px * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated minimum width of the large circular Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-badge-sm-padding-x,
        padding-y: $kendo-badge-sm-padding-y,
        font-size: $kendo-badge-sm-font-size,
        line-height: $kendo-badge-sm-line-height,
        min-width: $kendo-badge-sm-min-width
    ),
    md: (
        padding-x: $kendo-badge-md-padding-x,
        padding-y: $kendo-badge-md-padding-y,
        font-size: $kendo-badge-md-font-size,
        line-height: $kendo-badge-md-line-height,
        min-width: $kendo-badge-md-min-width
    ),
    lg: (
        padding-x: $kendo-badge-lg-padding-x,
        padding-y: $kendo-badge-lg-padding-y,
        font-size: $kendo-badge-lg-font-size,
        line-height: $kendo-badge-lg-line-height,
        min-width: $kendo-badge-lg-min-width
    )
)</code></td>
    <td><code>(sm: (padding-x: var(--kendo-spacing-0\.5, 0.125rem), padding-y: var(--kendo-spacing-0\.5, 0.125rem), font-size: var(--kendo-font-size-xs, inherit), line-height: 1, min-width: calc(1em + var(--kendo-spacing-0\.5, 0.125rem) * 2 + 1px * 2)), md: (padding-x: var(--kendo-spacing-1, 0.25rem), padding-y: var(--kendo-spacing-1, 0.25rem), font-size: var(--kendo-font-size-xs, inherit), line-height: 1, min-width: calc(1em + var(--kendo-spacing-1, 0.25rem) * 2 + 1px * 2)), lg: (padding-x: var(--kendo-spacing-1\.5, 0.375rem), padding-y: var(--kendo-spacing-1\.5, 0.375rem), font-size: var(--kendo-font-size-xs, inherit), line-height: 1, min-width: calc(1em + var(--kendo-spacing-1\.5, 0.375rem) * 2 + 1px * 2)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Badge.</div></div>
    </td>
</tr>
</tbody>
</table>

### Bottom-navigation

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-bottom-nav-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-padding-y</td>
    <td>String</td>
    <td><code>$kendo-bottom-nav-padding-x</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-gap</td>
    <td>String</td>
    <td><code>$kendo-bottom-nav-padding-x</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the BottomNavigation items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-border-width</td>
    <td>List</td>
    <td><code>1px 0px 0px 0px</code></td>
    <td><code>1px 0px 0px 0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-sm, normal )</code></td>
    <td><code>var(--kendo-line-height-sm, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-letter-spacing</td>
    <td>Number</td>
    <td><code>.2px</code></td>
    <td><code>0.2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The letter spacing of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-min-width</td>
    <td>Number</td>
    <td><code>72px</code></td>
    <td><code>72px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-max-width</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-min-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-icon-size * 2.5} + calc( #{$kendo-padding-md-x} * 2 ) - calc( #{$kendo-bottom-nav-padding-x} * 2 ) )</code></td>
    <td><code>calc(40px + var(--kendo-spacing-2, 0.5rem) * 2 - var(--kendo-spacing-1, 0.25rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum height of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-gap</td>
    <td>List</td>
    <td><code>0 k-spacing(1)</code></td>
    <td><code>0 var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-shadow</td>
    <td>String</td>
    <td><code>k-elevation(4)</code></td>
    <td><code>var(--kendo-elevation-4, 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-flat-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-flat-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-flat-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat BottomNavigation.</div></div>
    </td>
</tr>
</tbody>
</table>

### Breadcrumb

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-breadcrumb-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-margin-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-margin-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-sm-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-md-font-size</td>
    <td>String</td>
    <td><code>$kendo-breadcrumb-font-size</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-lg-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-lg, inherit )</code></td>
    <td><code>var(--kendo-font-size-lg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-sm-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the small Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-md-line-height</td>
    <td>String</td>
    <td><code>$kendo-breadcrumb-line-height</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the medium Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-lg-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-lg, normal )</code></td>
    <td><code>var(--kendo-line-height-lg, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the height Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-focus-shadow</td>
    <td>List</td>
    <td><code>0 0 2px 1px rgba(0, 0, 0, .06)</code></td>
    <td><code>0 0 2px 1px rgba(0, 0, 0, 0.06)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-sm-link-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-md-link-padding-x</td>
    <td>String</td>
    <td><code>$kendo-breadcrumb-link-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-lg-link-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-sm-link-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-md-link-padding-y</td>
    <td>String</td>
    <td><code>$kendo-breadcrumb-link-padding-y</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-lg-link-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border-radius of the Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-icon-link-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-sm-icon-link-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-md-icon-link-padding-y</td>
    <td>String</td>
    <td><code>$kendo-breadcrumb-icon-link-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-lg-icon-link-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-icon-link-padding-x</td>
    <td>String</td>
    <td><code>$kendo-breadcrumb-icon-link-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-sm-icon-link-padding-x</td>
    <td>String</td>
    <td><code>$kendo-breadcrumb-sm-icon-link-padding-y</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-md-icon-link-padding-x</td>
    <td>String</td>
    <td><code>$kendo-breadcrumb-icon-link-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-lg-icon-link-padding-x</td>
    <td>String</td>
    <td><code>$kendo-breadcrumb-lg-icon-link-padding-y</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-initial-text</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-icon-spacing</td>
    <td>String</td>
    <td><code>$kendo-icon-spacing</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-text</td>
    <td>String</td>
    <td><code>$kendo-link-text</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-base-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-hover-text</td>
    <td>String</td>
    <td><code>$kendo-link-hover-text</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-focus-text</td>
    <td>String</td>
    <td><code>$kendo-link-text</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-base-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-breadcrumb-link-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-current-item-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the current Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-current-item-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the current Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-current-item-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the current Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        link-padding-x: $kendo-breadcrumb-sm-link-padding-x,
        link-padding-y: $kendo-breadcrumb-sm-link-padding-y,
        icon-link-padding-x: $kendo-breadcrumb-sm-icon-link-padding-x,
        icon-link-padding-y: $kendo-breadcrumb-sm-icon-link-padding-y,
        font-size: $kendo-breadcrumb-sm-font-size,
        line-height: $kendo-breadcrumb-sm-line-height
    ),
    md: (
        link-padding-x: $kendo-breadcrumb-md-link-padding-x,
        link-padding-y: $kendo-breadcrumb-md-link-padding-y,
        icon-link-padding-x: $kendo-breadcrumb-md-icon-link-padding-x,
        icon-link-padding-y: $kendo-breadcrumb-md-icon-link-padding-y,
        font-size: $kendo-breadcrumb-md-font-size,
        line-height: $kendo-breadcrumb-md-line-height
    ),
    lg: (
        link-padding-x: $kendo-breadcrumb-lg-link-padding-x,
        link-padding-y: $kendo-breadcrumb-lg-link-padding-y,
        icon-link-padding-x: $kendo-breadcrumb-lg-icon-link-padding-x,
        icon-link-padding-y: $kendo-breadcrumb-lg-icon-link-padding-y,
        font-size: $kendo-breadcrumb-lg-font-size,
        line-height: $kendo-breadcrumb-lg-line-height
    )
)</code></td>
    <td><code>(sm: (link-padding-x: var(--kendo-spacing-2, 0.5rem), link-padding-y: var(--kendo-spacing-1, 0.25rem), icon-link-padding-x: var(--kendo-spacing-1\.5, 0.375rem), icon-link-padding-y: var(--kendo-spacing-1\.5, 0.375rem), font-size: var(--kendo-font-size, inherit), line-height: var(--kendo-line-height, normal)), md: (link-padding-x: var(--kendo-spacing-2, 0.5rem), link-padding-y: var(--kendo-spacing-1\.5, 0.375rem), icon-link-padding-x: var(--kendo-spacing-2, 0.5rem), icon-link-padding-y: var(--kendo-spacing-2, 0.5rem), font-size: var(--kendo-font-size, inherit), line-height: var(--kendo-line-height, normal)), lg: (link-padding-x: var(--kendo-spacing-2, 0.5rem), link-padding-y: var(--kendo-spacing-2, 0.5rem), icon-link-padding-x: var(--kendo-spacing-3, 0.75rem), icon-link-padding-y: var(--kendo-spacing-3, 0.75rem), font-size: var(--kendo-font-size-lg, inherit), line-height: var(--kendo-line-height-lg, normal)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Breadcrumb.</div></div>
    </td>
</tr>
</tbody>
</table>

### Button

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-button-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sm-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-md-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-lg-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sm-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-md-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-lg-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sm-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-md-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-lg-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-lg, inherit )</code></td>
    <td><code>var(--kendo-font-size-lg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sm-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable of the small Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-md-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable of the medium Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-lg-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-lg, normal )</code></td>
    <td><code>var(--kendo-line-height-lg, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable of the large Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-calc-size</td>
    <td>Calculation</td>
    <td><code>calc( calc( #{$kendo-button-line-height} * 1em ) + calc( #{$kendo-button-padding-y} * 2 ) + #{$kendo-button-border-width * 2} )</code></td>
    <td><code>calc(var(--kendo-line-height, normal) * 1em + var(--kendo-spacing-1, 0.25rem) * 2 + 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated height of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-inner-calc-size</td>
    <td>Calculation</td>
    <td><code>calc( calc( #{$kendo-button-line-height} * 1em ) + calc( #{$kendo-button-padding-y} * 2 ) )</code></td>
    <td><code>calc(var(--kendo-line-height, normal) * 1em + var(--kendo-spacing-1, 0.25rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated inner height of the Button excluding the border width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-button-sm-padding-x,
        padding-y: $kendo-button-sm-padding-y,
        font-size: $kendo-button-sm-font-size,
        line-height: $kendo-button-sm-line-height
    ),
    md: (
        padding-x: $kendo-button-md-padding-x,
        padding-y: $kendo-button-md-padding-y,
        font-size: $kendo-button-md-font-size,
        line-height: $kendo-button-md-line-height
    ),
    lg: (
        padding-x: $kendo-button-lg-padding-x,
        padding-y: $kendo-button-lg-padding-y,
        font-size: $kendo-button-lg-font-size,
        line-height: $kendo-button-lg-line-height
    )
)</code></td>
    <td><code>(sm: (padding-x: var(--kendo-spacing-2, 0.5rem), padding-y: var(--kendo-spacing-0\.5, 0.125rem), font-size: var(--kendo-font-size, inherit), line-height: var(--kendo-line-height, normal)), md: (padding-x: var(--kendo-spacing-2, 0.5rem), padding-y: var(--kendo-spacing-1, 0.25rem), font-size: var(--kendo-font-size, inherit), line-height: var(--kendo-line-height, normal)), lg: (padding-x: var(--kendo-spacing-3, 0.75rem), padding-y: var(--kendo-spacing-2, 0.5rem), font-size: var(--kendo-font-size-lg, inherit), line-height: var(--kendo-line-height-lg, normal)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-theme-colors</td>
    <td>Map</td>
    <td><code>k-map-merge(
    $kendo-theme-colors,
    ( "base": $kendo-base-bg )
)</code></td>
    <td><code>("primary": var(--kendo-color-primary, #f35800), "secondary": var(--kendo-color-secondary, #b6b6b6), "tertiary": var(--kendo-color-tertiary, #03a9f4), "info": var(--kendo-color-info, #007bc3), "success": var(--kendo-color-success, #3ea44e), "warning": var(--kendo-color-warning, #ffa41f), "error": var(--kendo-color-error, #d92800), "dark": var(--kendo-color-dark, #404040), "light": var(--kendo-color-light, #ebebeb), "inverse": var(--kendo-color-dark, #404040), "base": var(--kendo-color-surface, #f0f0f0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base ), $kendo-base-bg)</code></td>
    <td><code>var(--kendo-color-base, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-base ), $kendo-base-text)</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( border ), k-try-shade( $kendo-button-bg, 2 ))</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-gradient</td>
    <td>Null</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base-hover ), k-try-shade( $kendo-button-bg, 1 ))</code></td>
    <td><code>var(--kendo-color-base-hover, #dddddd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the hovered Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the hovered Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( border-alt ), k-try-shade( $kendo-button-bg, 3 ))</code></td>
    <td><code>var(--kendo-color-border-alt, #b6b6b6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the hovered Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of the hovered Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the hovered Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base-active ), k-try-shade( $kendo-button-bg, 2 ))</code></td>
    <td><code>var(--kendo-color-base-active, #d6d6d6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the active Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the active Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( border-alt ), k-try-shade( $kendo-button-bg, 4 ))</code></td>
    <td><code>var(--kendo-color-border-alt, #b6b6b6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the active Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of the active Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the active Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the selected Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-button-selected-bg ))</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-border</td>
    <td>String</td>
    <td><code>$kendo-button-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-gradient</td>
    <td>Null</td>
    <td><code>$kendo-button-active-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the selected Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-shadow</td>
    <td>Null</td>
    <td><code>$kendo-button-active-shadow</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the selected Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of the focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-shadow</td>
    <td>List</td>
    <td><code>0 0 4px 0 if($kendo-enable-color-system, color-mix(in srgb, k-color( border ) 75%, transparent), rgba( $kendo-button-border, .75 ))</code></td>
    <td><code>0 0 4px 0 color-mix(in srgb, var(--kendo-color-border, #cacaca) 75%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the disabled Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the disabled Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the disabled Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of the disabled Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the disabled Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-hover-opacity</td>
    <td>Number</td>
    <td><code>.08</code></td>
    <td><code>0.08</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of the hovered flat Button. Used to create a background for the flat Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-focus-opacity</td>
    <td>Number</td>
    <td><code>.12</code></td>
    <td><code>0.12</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of the focused flat Button. Used to create a background for the flat Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-active-opacity</td>
    <td>Number</td>
    <td><code>.16</code></td>
    <td><code>0.16</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of the active flat Button. Used to create background for the flat Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-selected-opacity</td>
    <td>Number</td>
    <td><code>.2</code></td>
    <td><code>0.2</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of the selected flat Button. Used to create background for the flat Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-focus-ring-opacity</td>
    <td>Number</td>
    <td><code>.12</code></td>
    <td><code>0.12</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the flat Button focus ring. Used to create a border for the flat Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-transition</td>
    <td>List</td>
    <td><code>color .2s ease-in-out</code></td>
    <td><code>color 0.2s ease-in-out</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color transition of the flat Button.</div></div>
    </td>
</tr>
</tbody>
</table>

### Calendar

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-calendar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-size</td>
    <td>Number</td>
    <td><code>32px</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-bg</td>
    <td>String</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-text</td>
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-border</td>
    <td>String</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-gradient</td>
    <td>Null</td>
    <td><code>$kendo-component-header-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-nav-gap</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the items in the navigation of the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-footer-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the footer in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-footer-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the footer in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-padding-y</td>
    <td>String</td>
    <td><code>$kendo-calendar-cell-padding-x</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-line-height</td>
    <td>String</td>
    <td><code>$kendo-calendar-line-height</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-width</td>
    <td>Number</td>
    <td><code>$kendo-calendar-cell-size</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-height</td>
    <td>Number</td>
    <td><code>$kendo-calendar-cell-size</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the caption in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the caption in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-height</td>
    <td>Number</td>
    <td><code>$kendo-calendar-cell-size</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the caption in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the caption in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the caption in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-font-weight</td>
    <td>String</td>
    <td><code>bold</code></td>
    <td><code>bold</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the caption in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-week-number-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-sm</code></td>
    <td><code>0.75rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the week number cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-view-width</td>
    <td>Number</td>
    <td><code>($kendo-calendar-cell-size * 8)</code></td>
    <td><code>256px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Calendar view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-view-height</td>
    <td>Number</td>
    <td><code>($kendo-calendar-cell-size * 7)</code></td>
    <td><code>224px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Calendar view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-view-gap</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the items in the Calendar view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-weekend-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the weekend cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-weekend-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the weekend cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-today-style</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the current day in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-today-color</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the current day in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-week-number-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the week number cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-week-number-text</td>
    <td>String</td>
    <td><code>$kendo-calendar-header-cell-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the week number cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-other-month-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the preceding/subsequent month cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-other-month-text</td>
    <td>String</td>
    <td><code>$kendo-calendar-header-cell-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the preceding/subsequent month cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-hover-bg</code></td>
    <td><code>var(--kendo-color-base-hover, #dddddd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-hover-text</td>
    <td>String</td>
    <td><code>$kendo-hover-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-hover-border</td>
    <td>String</td>
    <td><code>$kendo-hover-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-text</td>
    <td>String</td>
    <td><code>$kendo-selected-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-border</td>
    <td>String</td>
    <td><code>$kendo-selected-border</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-selected-hover-bg</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-hover-text</td>
    <td>String</td>
    <td><code>$kendo-selected-hover-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-hover-border</td>
    <td>String</td>
    <td><code>$kendo-selected-hover-border</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected and hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected and hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-focus-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 2px rgba( black, .08 )</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-calendar-cell-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the selected and focused cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-width</td>
    <td>Number</td>
    <td><code>5em</code></td>
    <td><code>5em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Calendar navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-item-height</td>
    <td>Number</td>
    <td><code>2em</code></td>
    <td><code>2em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the items in the Calendar navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-bg</td>
    <td>String</td>
    <td><code>$kendo-calendar-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Calendar navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-text</td>
    <td>String</td>
    <td><code>$kendo-calendar-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Calendar navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-border</td>
    <td>String</td>
    <td><code>$kendo-calendar-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Calendar navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-hover-text</td>
    <td>String</td>
    <td><code>$kendo-link-hover-text</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered items in the Calendar navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-infinite-calendar-header-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the header in the Infinite Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-infinite-calendar-header-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$kendo-infinite-calendar-view-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Calendar view in the Infinite Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-infinite-calendar-view-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Calendar view in the Infinite Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-infinite-calendar-view-height</td>
    <td>Number</td>
    <td><code>( $kendo-calendar-cell-size * 9 )</code></td>
    <td><code>288px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Calendar view in the Infinite Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-sm-cell-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the small Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-sm-cell-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the small Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-md-cell-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the medium Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-md-cell-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the medium Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-lg-cell-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the large Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-lg-cell-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the large Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        font-size: $kendo-calendar-sm-font-size,
        line-height: $kendo-calendar-sm-line-height,
        cell-size: $kendo-calendar-sm-cell-size,
        cell-padding-x: $kendo-calendar-sm-cell-padding-y,
        cell-padding-y: $kendo-calendar-sm-cell-padding-x
    ),
    md: (
        font-size: $kendo-calendar-md-font-size,
        line-height: $kendo-calendar-md-line-height,
        cell-size: $kendo-calendar-md-cell-size,
        cell-padding-x: $kendo-calendar-md-cell-padding-y,
        cell-padding-y: $kendo-calendar-md-cell-padding-x
    ),
    lg: (
        font-size: $kendo-calendar-lg-font-size,
        line-height: $kendo-calendar-lg-line-height,
        cell-size: $kendo-calendar-lg-cell-size,
        cell-padding-x: $kendo-calendar-lg-cell-padding-y,
        cell-padding-y: $kendo-calendar-lg-cell-padding-x
    )
)</code></td>
    <td><code>(sm: (font-size: var(--kendo-font-size, inherit), line-height: var(--kendo-line-height, normal), cell-size: 28px, cell-padding-x: var(--kendo-spacing-0\.5, 0.125rem), cell-padding-y: var(--kendo-spacing-0\.5, 0.125rem)), md: (font-size: var(--kendo-font-size, inherit), line-height: var(--kendo-line-height, normal), cell-size: 32px, cell-padding-x: var(--kendo-spacing-1, 0.25rem), cell-padding-y: var(--kendo-spacing-1, 0.25rem)), lg: (font-size: var(--kendo-font-size-lg, inherit), line-height: var(--kendo-line-height-lg, normal), cell-size: 40px, cell-padding-x: var(--kendo-spacing-2, 0.5rem), cell-padding-y: var(--kendo-spacing-2, 0.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes Map of the Calendar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Captcha

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-captcha-spacer</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacer of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-width</td>
    <td>Number</td>
    <td><code>280px</code></td>
    <td><code>280px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-gap</td>
    <td>String</td>
    <td><code>$kendo-captcha-spacer</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-text</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-border</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-image-wrap-gap</td>
    <td>String</td>
    <td><code>$kendo-captcha-spacer</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the Captcha image wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-image-controls-gap</td>
    <td>String</td>
    <td><code>$kendo-captcha-spacer</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the Captcha image controls.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-validation-message-margin-top</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-captcha-spacer} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top margin of the Captcha validation message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-validation-message-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Captcha validation message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-validation-message-font-style</td>
    <td>String</td>
    <td><code>italic</code></td>
    <td><code>italic</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font style of the Captcha validation message.</div></div>
    </td>
</tr>
</tbody>
</table>

### Card

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-card-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(lg)</code></td>
    <td><code>var(--kendo-border-radius-lg, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-inner-border-radius</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-card-border-radius} - #{$kendo-card-border-width} )</code></td>
    <td><code>calc(var(--kendo-border-radius-lg, 0.375rem) - 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The inner border radius of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-deck-gap</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Cards in the Card deck.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-shadow</td>
    <td>String</td>
    <td><code>k-elevation(1)</code></td>
    <td><code>var(--kendo-elevation-1, 0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-focus-border</td>
    <td>Color</td>
    <td><code>rgba( black, .15 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.15)"></span><code>rgba(0, 0, 0, 0.15)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-focus-shadow</td>
    <td>String</td>
    <td><code>k-elevation(3)</code></td>
    <td><code>var(--kendo-elevation-3, 0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-padding-x</td>
    <td>String</td>
    <td><code>$kendo-card-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-padding-y</td>
    <td>String</td>
    <td><code>$kendo-card-padding-y</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom border width of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-text</td>
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-border</td>
    <td>String</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-body-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-body-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-padding-x</td>
    <td>String</td>
    <td><code>$kendo-card-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-padding-y</td>
    <td>String</td>
    <td><code>$kendo-card-padding-y</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top border width of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-text</td>
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-border</td>
    <td>String</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-margin-bottom</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-lg, inherit )</code></td>
    <td><code>var(--kendo-font-size-lg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-font-family</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-line-height</td>
    <td>Number</td>
    <td><code>1.25</code></td>
    <td><code>1.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-normal, normal )</code></td>
    <td><code>var(--kendo-font-weight-normal, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-letter-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The letter spacing of the Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-margin-bottom</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-font-family</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-line-height</td>
    <td>String</td>
    <td><code>normal</code></td>
    <td><code>normal</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-normal, normal )</code></td>
    <td><code>var(--kendo-font-weight-normal, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-letter-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The letter spacing of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-img-max-width</td>
    <td>Number</td>
    <td><code>100px</code></td>
    <td><code>100px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the Card image.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-avatar-size</td>
    <td>Number</td>
    <td><code>45px</code></td>
    <td><code>45px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Avatar in the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-avatar-spacing</td>
    <td>String</td>
    <td><code>$kendo-card-header-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Avatar and the text in the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Card actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Card actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top border width of the Card actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-gap</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Card actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-deck-scroll-button-radius</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the scroll button in the Card deck.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-deck-scroll-button-offset</td>
    <td>Number</td>
    <td><code>-$kendo-button-border-width</code></td>
    <td><code>-1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the scroll button in the Card deck.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-callout-width</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Card callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-callout-height</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Card callout.</div></div>
    </td>
</tr>
</tbody>
</table>

### Charts

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-series-a</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( series-a ), #ff6358)</code></td>
    <td><code>var(--kendo-color-series-a, #ff6358)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The first base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-b</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( series-b ), #ffd246)</code></td>
    <td><code>var(--kendo-color-series-b, #ffd246)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The second base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-c</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( series-c ), #78d237)</code></td>
    <td><code>var(--kendo-color-series-c, #78d237)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-d</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( series-d ), #28b4c8)</code></td>
    <td><code>var(--kendo-color-series-d, #28b4c8)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fourth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-e</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( series-e ), #2d73f5)</code></td>
    <td><code>var(--kendo-color-series-e, #2d73f5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fifth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-f</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( series-f ), #aa46be)</code></td>
    <td><code>var(--kendo-color-series-f, #9d40b0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sixth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-1</td>
    <td>String</td>
    <td><code>$kendo-series-a</code></td>
    <td><code>var(--kendo-color-series-a, #ff6358)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The series colors in order:<br />base, light, dark, lighter, darker</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-major-lines</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 8%, transparent), rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .08 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 8%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Chart grid lines (major).</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-minor-lines</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 4%, transparent), rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .04 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 4%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Chart grid lines (minor).</div></div>
    </td>
</tr>
</tbody>
</table>

### Chat

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-chat-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-width</td>
    <td>Number</td>
    <td><code>500px</code></td>
    <td><code>500px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-height</td>
    <td>Number</td>
    <td><code>600px</code></td>
    <td><code>600px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-item-spacing-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing between the items of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-item-spacing-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing between the items of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-list-padding-x</td>
    <td>String</td>
    <td><code>$kendo-chat-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chat message list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-list-padding-y</td>
    <td>String</td>
    <td><code>$kendo-chat-padding-y</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chat message list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-list-spacing</td>
    <td>String</td>
    <td><code>$kendo-chat-item-spacing-y</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Chat message list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-font-size</td>
    <td>String</td>
    <td><code>smaller</code></td>
    <td><code>smaller</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Chat timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Chat timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-transform</td>
    <td>String</td>
    <td><code>uppercase</code></td>
    <td><code>uppercase</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text transform of the Chat timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chat bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chat bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-spacing</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Chat bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-line-height</td>
    <td>Number</td>
    <td><code>18px</code></td>
    <td><code>18px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Chat bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-border-radius</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Chat bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-border-radius-sm</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Chat small bubble message</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-avatar-size</td>
    <td>Number</td>
    <td><code>32px</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Chat Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-avatar-spacing</td>
    <td>String</td>
    <td><code>$kendo-chat-item-spacing-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Chat Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-padding-x</td>
    <td>String</td>
    <td><code>$kendo-toolbar-md-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-padding-y</td>
    <td>String</td>
    <td><code>$kendo-toolbar-md-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-spacing</td>
    <td>String</td>
    <td><code>$kendo-toolbar-md-spacing</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Chat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-bg</td>
    <td>String</td>
    <td><code>$kendo-toolbar-bg</code></td>
    <td><code>var(--kendo-color-base, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-text</td>
    <td>String</td>
    <td><code>$kendo-toolbar-text</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-line-height</td>
    <td>Number</td>
    <td><code>$kendo-chat-bubble-line-height</code></td>
    <td><code>18px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bg</td>
    <td>String</td>
    <td><code>$kendo-app-bg</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-text</td>
    <td>String</td>
    <td><code>$kendo-app-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-border</td>
    <td>String</td>
    <td><code>$kendo-app-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-border</td>
    <td>String</td>
    <td><code>$kendo-chat-bubble-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-shadow</td>
    <td>String</td>
    <td><code>k-elevation(1)</code></td>
    <td><code>var(--kendo-elevation-1, 0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Chat bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-hover-shadow</td>
    <td>String</td>
    <td><code>k-elevation(2)</code></td>
    <td><code>var(--kendo-elevation-2, 0 4px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the hovered Chat bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-selected-shadow</td>
    <td>String</td>
    <td><code>k-elevation(3)</code></td>
    <td><code>var(--kendo-elevation-3, 0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the selected Chat bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-chat-alt-bubble-bg ))</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-border</td>
    <td>String</td>
    <td><code>$kendo-chat-alt-bubble-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-shadow</td>
    <td>String</td>
    <td><code>k-elevation(1)</code></td>
    <td><code>var(--kendo-elevation-1, 0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-hover-shadow</td>
    <td>String</td>
    <td><code>k-elevation(2)</code></td>
    <td><code>var(--kendo-elevation-2, 0 4px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the hovered Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-selected-shadow</td>
    <td>String</td>
    <td><code>k-elevation(3)</code></td>
    <td><code>var(--kendo-elevation-3, 0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the selected Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-border</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-hover-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary-contrast</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-hover-border</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Chat quick reply.</div></div>
    </td>
</tr>
</tbody>
</table>

### Checkbox

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-checkbox-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-sm-size</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of a small CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-md-size</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of a medium CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-lg-size</td>
    <td>String</td>
    <td><code>k-spacing(5)</code></td>
    <td><code>var(--kendo-spacing-5, 1.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of a large CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-sm-glyph-size</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of a small CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-md-glyph-size</td>
    <td>String</td>
    <td><code>k-spacing(3.5)</code></td>
    <td><code>var(--kendo-spacing-3\.5, 0.875rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of a medium CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-lg-glyph-size</td>
    <td>String</td>
    <td><code>k-spacing(4.5)</code></td>
    <td><code>var(--kendo-spacing-4\.5, 1.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of a large CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-sm-ripple-size</td>
    <td>Number</td>
    <td><code>300%</code></td>
    <td><code>300%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of a small CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-md-ripple-size</td>
    <td>Number</td>
    <td><code>300%</code></td>
    <td><code>300%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of a medium CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-lg-ripple-size</td>
    <td>Number</td>
    <td><code>300%</code></td>
    <td><code>300%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of a large CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-checkbox-checked-bg ))</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-border</td>
    <td>String</td>
    <td><code>$kendo-checkbox-checked-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-bg</td>
    <td>String</td>
    <td><code>$kendo-checkbox-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the indeterminate CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-text</td>
    <td>String</td>
    <td><code>$kendo-checkbox-checked-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the indeterminate CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-border</td>
    <td>String</td>
    <td><code>$kendo-checkbox-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the indeterminate CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px rgba( black, .06 )</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.06)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-checked-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused and checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-checked-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 30%, transparent), rgba( $kendo-color-primary, .3 ))</code></td>
    <td><code>0 0 0 2px color-mix(in srgb, var(--kendo-color-primary, #f35800) 30%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused and checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled and checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled and checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled and checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-invalid-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of an invalid CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-invalid-text</td>
    <td>String</td>
    <td><code>$kendo-invalid-text</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of an invalid CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-invalid-border</td>
    <td>String</td>
    <td><code>$kendo-invalid-border</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of an invalid CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indicator-type</td>
    <td>String</td>
    <td><code>image</code></td>
    <td><code>image</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The type of the CheckBox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-glyph-font-family</td>
    <td>List</td>
    <td><code>"WebComponentsIcons", monospace</code></td>
    <td><code>"WebComponentsIcons", monospace</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the CheckBox indicator glyph.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-glyph</td>
    <td>String</td>
    <td><code>"\e118"</code></td>
    <td><code>"\e118"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph of the CheckBox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-glyph</td>
    <td>String</td>
    <td><code>"\e121"</code></td>
    <td><code>"\e121"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph of the indeterminate CheckBox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-image</td>
    <td>String</td>
    <td><code>k-escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$kendo-checkbox-checked-text}' stroke-linecap='square' stroke-linejoin='square' stroke-width='2' d='M3,8 l3,3 l7-7'/></svg>") )</code></td>
    <td><code>url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='var%28--kendo-color-on-primary, %23ffffff%29' stroke-linecap='square' stroke-linejoin='square' stroke-width='2' d='M3,8 l3,3 l7-7'/%3e%3c/svg%3e")</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image for a checked CheckBox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-image</td>
    <td>String</td>
    <td><code>k-escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$kendo-checkbox-indeterminate-text}' stroke-linecap='square' stroke-linejoin='square' stroke-width='2' d='M4,8 h8'/></svg>") )</code></td>
    <td><code>url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='var%28--kendo-color-primary, %23f35800%29' stroke-linecap='square' stroke-linejoin='square' stroke-width='2' d='M4,8 h8'/%3e%3c/svg%3e")</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image for a indeterminate CheckBox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-label-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the CheckBox inside a label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-list-spacing</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items in a horizontal CheckBox list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-list-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the CheckBox list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-list-item-padding-y</td>
    <td>String</td>
    <td><code>$kendo-list-md-item-padding-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the CheckBox list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-ripple-bg</td>
    <td>String</td>
    <td><code>$kendo-checkbox-checked-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the CheckBox' ripple.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-ripple-opacity</td>
    <td>Number</td>
    <td><code>.25</code></td>
    <td><code>0.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the CheckBox' ripple.</div></div>
    </td>
</tr>
</tbody>
</table>

### Chip

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-chip-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-spacing</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the text and the icons of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sm-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-md-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-lg-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sm-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-md-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-lg-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sm-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-md-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-lg-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-line-height</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Chip's line height that is related to the $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sm-line-height</td>
    <td>Number</td>
    <td><code>$kendo-chip-line-height</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The small Chip's line height that is related to the $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-md-line-height</td>
    <td>Number</td>
    <td><code>$kendo-chip-line-height</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium Chip's line height that is related to the $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-lg-line-height</td>
    <td>Number</td>
    <td><code>$kendo-chip-line-height</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The large Chip's line height that is related to the $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-calc-size</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-chip-line-height * 1em} + calc( #{$kendo-chip-padding-y} * 2 ) + #{$kendo-chip-border-width * 2} )</code></td>
    <td><code>calc(1em + var(--kendo-spacing-1, 0.25rem) * 2 + 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated height of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-chip-sm-padding-x,
        padding-y: $kendo-chip-sm-padding-y,
        font-size: $kendo-chip-sm-font-size,
        line-height: $kendo-chip-sm-line-height
    ),
    md: (
        padding-x: $kendo-chip-md-padding-x,
        padding-y: $kendo-chip-md-padding-y,
        font-size: $kendo-chip-md-font-size,
        line-height: $kendo-chip-md-line-height
    ),
    lg: (
        padding-x: $kendo-chip-lg-padding-x,
        padding-y: $kendo-chip-lg-padding-y,
        font-size: $kendo-chip-lg-font-size,
        line-height: $kendo-chip-lg-line-height
    )
)</code></td>
    <td><code>(sm: (padding-x: var(--kendo-spacing-1, 0.25rem), padding-y: var(--kendo-spacing-0\.5, 0.125rem), font-size: var(--kendo-font-size, inherit), line-height: 1), md: (padding-x: var(--kendo-spacing-1, 0.25rem), padding-y: var(--kendo-spacing-1, 0.25rem), font-size: var(--kendo-font-size, inherit), line-height: 1), lg: (padding-x: var(--kendo-spacing-1, 0.25rem), padding-y: var(--kendo-spacing-1\.5, 0.375rem), font-size: var(--kendo-font-size, inherit), line-height: 1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the sizes of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-base-bg</td>
    <td>String</td>
    <td><code>$kendo-button-bg</code></td>
    <td><code>var(--kendo-color-base, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "base": $kendo-chip-base-bg,
    "error": k-map-get( $kendo-theme-colors, "error" ),
    "info": k-map-get( $kendo-theme-colors, "info" ),
    "warning": k-map-get( $kendo-theme-colors, "warning" ),
    "success": k-map-get( $kendo-theme-colors, "success" )
)</code></td>
    <td><code>("base": var(--kendo-color-base, #ebebeb), "error": var(--kendo-color-error, #d92800), "info": var(--kendo-color-info, #007bc3), "warning": var(--kendo-color-warning, #ffa41f), "success": var(--kendo-color-success, #3ea44e))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-bg</td>
    <td>String</td>
    <td><code>$kendo-chip-base-bg</code></td>
    <td><code>var(--kendo-color-base, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-text</td>
    <td>String</td>
    <td><code>$kendo-button-text</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-border</td>
    <td>String</td>
    <td><code>$kendo-button-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 16%, transparent), if( $kendo-is-dark-theme, rgba( $kendo-color-white, .16 ), rgba( $kendo-color-black, .16 ) ))</code></td>
    <td><code>0 0 0 2px color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-gradient</td>
    <td>Null</td>
    <td><code>$kendo-button-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base gradient of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the focused solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the focused solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-button-hover-bg</code></td>
    <td><code>var(--kendo-color-base-hover, #dddddd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the hovered solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the hovered solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-button-active-bg</code></td>
    <td><code>var(--kendo-color-base-active, #d6d6d6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the selected solid Chip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-selected-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the selected solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-text</td>
    <td>String</td>
    <td><code>$kendo-chip-solid-text</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-border</td>
    <td>String</td>
    <td><code>$kendo-chip-outline-text</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 16%, transparent), if( $kendo-is-dark-theme, rgba( $kendo-color-white, .16 ), rgba( $kendo-color-black, .16 ) ))</code></td>
    <td><code>0 0 0 2px color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-chip-outline-text</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the hovered outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-hover-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base-subtle ), k-contrast-legacy( $kendo-chip-outline-hover-bg ))</code></td>
    <td><code>var(--kendo-color-base-subtle, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the hovered outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-chip-outline-hover-bg</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the selected outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-selected-text</td>
    <td>String</td>
    <td><code>$kendo-chip-outline-hover-text</code></td>
    <td><code>var(--kendo-color-base-subtle, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the selected outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-list-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: k-spacing(1),
    md: k-spacing(1),
    lg: k-spacing(1)
)</code></td>
    <td><code>(sm: var(--kendo-spacing-1, 0.25rem), md: var(--kendo-spacing-1, 0.25rem), lg: var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the Chip list.</div></div>
    </td>
</tr>
</tbody>
</table>

### Cologradient

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-color-gradient-spacer</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacer of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-width</td>
    <td>Number</td>
    <td><code>272px</code></td>
    <td><code>272px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-padding-y</td>
    <td>String</td>
    <td><code>$kendo-color-gradient-spacer</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-padding-x</td>
    <td>String</td>
    <td><code>$kendo-color-gradient-padding-y</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-gap</td>
    <td>String</td>
    <td><code>$kendo-color-gradient-spacer</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the sections of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-focus-shadow</td>
    <td>String</td>
    <td><code>k-elevation(3)</code></td>
    <td><code>var(--kendo-elevation-3, 0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-gap</td>
    <td>String</td>
    <td><code>$kendo-color-gradient-spacer</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-rectangle-height</td>
    <td>Number</td>
    <td><code>180px</code></td>
    <td><code>180px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height the ColorGradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-track-size</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-border-radius</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-draghandle-border-width</td>
    <td>Number</td>
    <td><code>3px</code></td>
    <td><code>3px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-vertical-size</td>
    <td>Number</td>
    <td><code>180px</code></td>
    <td><code>180px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorGradient vertical slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-horizontal-size</td>
    <td>Number</td>
    <td><code>100%</code></td>
    <td><code>100%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient horizontal slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-width</td>
    <td>Number</td>
    <td><code>14px</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-height</td>
    <td>Number</td>
    <td><code>14px</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-outline-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-border-radius</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-border</td>
    <td>Color</td>
    <td><code>rgba( white, .8)</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 255, 255, 0.8)"></span><code>rgba(255, 255, 255, 0.8)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-shadow</td>
    <td>Color</td>
    <td><code>rgba( $kendo-color-black, .5)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.5)"></span><code>rgba(0, 0, 0, 0.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-focus-shadow</td>
    <td>Color</td>
    <td><code>$kendo-color-black</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus color of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-hover-shadow</td>
    <td>Color</td>
    <td><code>$kendo-color-black</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-shadow</td>
    <td>Color</td>
    <td><code>k-elevation(2)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.5)"></span><code>rgba(0, 0, 0, 0.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-draghandle-margin-y</td>
    <td>Number</td>
    <td><code>- k-math-div( $kendo-color-gradient-draghandle-height, 2 )</code></td>
    <td><code>-7px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-draghandle-margin-x</td>
    <td>Number</td>
    <td><code>- k-math-div( $kendo-color-gradient-draghandle-width, 2 )</code></td>
    <td><code>-7px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-width</td>
    <td>Number</td>
    <td><code>46px</code></td>
    <td><code>46px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-gap</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-color-gradient-spacer} / 1.5 )</code></td>
    <td><code>calc(var(--kendo-spacing-3, 0.75rem) / 1.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ColorGradient inputs.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-label-gap</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-color-gradient-spacer} / 3 )</code></td>
    <td><code>calc(var(--kendo-spacing-3, 0.75rem) / 3)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ColorGradient inputs and their labels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-label-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorGradient input labels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-contrast-ratio-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-bold, normal )</code></td>
    <td><code>var(--kendo-font-weight-bold, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the ColorGradient contrast ratio text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-contrast-spacer</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-color-gradient-spacer} / 1.5 )</code></td>
    <td><code>calc(var(--kendo-spacing-3, 0.75rem) / 1.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items in the ColorGradient contrast tool.</div></div>
    </td>
</tr>
</tbody>
</table>

### Color System

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-colors</td>
    <td>Map</td>
    <td><code>$_default-colors</code></td>
    <td><code>(app-surface: #ffffff, on-app-surface: #272727, subtle: #666666, surface: #f0f0f0, surface-alt: #ffffff, border: #cacaca, border-alt: #b6b6b6, base-subtle: #f0f0f0, base-subtle-hover: #ebebeb, base-subtle-active: #dddddd, base: #ebebeb, base-hover: #dddddd, base-active: #d6d6d6, base-emphasis: #cacaca, base-on-subtle: #272727, on-base: #272727, base-on-surface: #272727, primary-subtle: #fff2eb, primary-subtle-hover: #ffe5d6, primary-subtle-active: #ffd8c2, primary: #f35800, primary-hover: #e05100, primary-active: #cc4a00, primary-emphasis: #ff8b47, primary-on-subtle: #3d1600, on-primary: #ffffff, primary-on-surface: #f35800, secondary-subtle: #cacaca, secondary-subtle-hover: #b6b6b6, secondary-subtle-active: #a3a3a3, secondary: #b6b6b6, secondary-hover: #a3a3a3, secondary-active: #8f8f8f, secondary-emphasis: #7a7a7a, secondary-on-subtle: #272727, on-secondary: #000000, secondary-on-surface: #8f8f8f, tertiary-subtle: #9cdffe, tertiary-subtle-hover: #72d1fe, tertiary-subtle-active: #49c4fd, tertiary: #03a9f4, tertiary-hover: #039be0, tertiary-active: #038ecd, tertiary-emphasis: #2cbbfd, tertiary-on-subtle: #01364e, on-tertiary: #ffffff, tertiary-on-surface: #0273a6, info-subtle: #cce5f3, info-subtle-hover: #a6d1ea, info-subtle-active: #6ab2dc, info: #007bc3, info-hover: #0071b3, info-active: #0067a4, info-emphasis: #409cd2, info-on-subtle: #002b44, on-info: #ffffff, info-on-surface: #005485, success-subtle: #bbdfc1, success-subtle-hover: #9ed1a6, success-subtle-active: #82c48c, success: #3ea44e, success-hover: #399748, success-active: #348a42, success-emphasis: #6ebb7a, success-on-subtle: #16391b, on-success: #ffffff, success-on-surface: #2a7035, warning-subtle: #ffdead, warning-subtle-hover: #ffd699, warning-subtle-active: #ffc670, warning: #ffa41f, warning-hover: #ff9800, warning-active: #eb8c00, warning-emphasis: #ffb240, warning-on-subtle: #593500, on-warning: #000000, warning-on-surface: #ffa41f, error-subtle: #f4c3b8, error-subtle-hover: #f2b4a6, error-subtle-active: #ec8e79, error: #d92800, error-hover: #c82500, error-active: #b62200, error-emphasis: #e35e40, error-on-subtle: #4c0e00, on-error: #ffffff, error-on-surface: #941b00, light-subtle: #f0f0f0, light-subtle-hover: #ebebeb, light-subtle-active: #dddddd, light: #ebebeb, light-hover: #dddddd, light-active: #d6d6d6, light-emphasis: #cacaca, light-on-subtle: #272727, on-light: #000000, light-on-surface: #ebebeb, dark-subtle: #cacaca, dark-subtle-hover: #b6b6b6, dark-subtle-active: #a3a3a3, dark: #404040, dark-hover: #333333, dark-active: #272727, dark-emphasis: #7a7a7a, dark-on-subtle: #000000, on-dark: #ffffff, dark-on-surface: #333333, inverse-subtle: #cacaca, inverse-subtle-hover: #b6b6b6, inverse-subtle-active: #a3a3a3, inverse: #404040, inverse-hover: #333333, inverse-active: #272727, inverse-emphasis: #7a7a7a, inverse-on-subtle: #000000, on-inverse: #ffffff, inverse-on-surface: #333333, series-a: #ff6358, series-a-bold: #bf4a42, series-a-bolder: #80322c, series-a-subtle: #ffb1ac, series-a-subtler: #ff8a82, series-b: #ffd246, series-b-bold: #bf9d35, series-b-bolder: #806923, series-b-subtle: #ffe9a2, series-b-subtler: #ffdd74, series-c: #78d237, series-c-bold: #5a9d29, series-c-bolder: #3c691c, series-c-subtle: #bbe99b, series-c-subtler: #9add69, series-d: #28b4c8, series-d-bold: #1e8796, series-d-bolder: #145a64, series-d-subtle: #93d9e3, series-d-subtler: #5ec7d6, series-e: #2d73f5, series-e-bold: #2256b8, series-e-bolder: #173a7b, series-e-subtle: #96b9fa, series-e-subtler: #6296f7, series-f: #9d40b0, series-f-bold: #80358e, series-f-bolder: #55235f, series-f-subtle: #d5a2df, series-f-subtler: #bf74ce)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Colors map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-primary, #f35800)"></span><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color that focuses the user attention.<br />Used for primary buttons and for elements of primary importance across the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-legacy( $kendo-color-primary )</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-on-primary, #ffffff)"></span><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the primary color denoted by $kendo-color-primary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #e9e9e9"></span><code>#e9e9e9</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-secondary, #b6b6b6)"></span><code>var(--kendo-color-secondary, #b6b6b6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The secondary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-color( $kendo-color-secondary )</code></td>
    <td><span class="color-preview" style="background-color: black"></span><code>black</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the secondary color denoted by $kendo-color-secondary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-tertiary</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #03a9f4"></span><code>#03a9f4</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-tertiary, #03a9f4)"></span><code>var(--kendo-color-tertiary, #03a9f4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The tertiary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-tertiary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-color( $kendo-color-tertiary )</code></td>
    <td><span class="color-preview" style="background-color: black"></span><code>black</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the tertiary color denoted by $kendo-color-tertiary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-info</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #2498bc"></span><code>#2498bc</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-info, #007bc3)"></span><code>var(--kendo-color-info, #007bc3)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for informational messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-success</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #3ea44e"></span><code>#3ea44e</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-success, #3ea44e)"></span><code>var(--kendo-color-success, #3ea44e)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for success messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-warning</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ff9800"></span><code>#ff9800</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-warning, #ffa41f)"></span><code>var(--kendo-color-warning, #ffa41f)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for warning messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-error</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #d92800"></span><code>#d92800</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-error, #d92800)"></span><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for error messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-dark</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #404040"></span><code>#404040</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-dark, #404040)"></span><code>var(--kendo-color-dark, #404040)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The dark color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-light</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-light, #ebebeb)"></span><code>var(--kendo-color-light, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The light color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-inverse</td>
    <td>String</td>
    <td><code>if( $kendo-is-dark-theme, $kendo-color-light, $kendo-color-dark )</code></td>
    <td><code>var(--kendo-color-dark, #404040)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Inverse color of the theme. Depending on the theme luminance dark or light, it will be light or dark</div></div>
    </td>
</tr>
</tbody>
</table>

### Coloreditor

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-color-editor-spacer</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacer of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-min-width</td>
    <td>Number</td>
    <td><code>272px</code></td>
    <td><code>272px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-focus-shadow</td>
    <td>String</td>
    <td><code>k-elevation(3)</code></td>
    <td><code>var(--kendo-elevation-3, 0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-header-padding-y</td>
    <td>String</td>
    <td><code>$kendo-color-editor-spacer</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ColorEditor header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-header-padding-x</td>
    <td>String</td>
    <td><code>$kendo-color-editor-header-padding-y</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ColorEditor header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-header-actions-gap</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-color-editor-spacer} / 1.5 )</code></td>
    <td><code>calc(var(--kendo-spacing-3, 0.75rem) / 1.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ColorEditor header actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-preview-width</td>
    <td>Number</td>
    <td><code>32px</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-preview-height</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-preview-gap</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the colors in the ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-views-padding-y</td>
    <td>String</td>
    <td><code>$kendo-color-editor-spacer</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-views-padding-x</td>
    <td>String</td>
    <td><code>$kendo-color-editor-views-padding-y</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-views-gap</td>
    <td>String</td>
    <td><code>$kendo-color-editor-spacer</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-gradient-focus-outline-color</td>
    <td>Color</td>
    <td><code>rgba(0, 0, 0, .3)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.3)"></span><code>rgba(0, 0, 0, 0.3)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-gradient-focus-outline</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-gradient-focus-outline-offset</td>
    <td>Number</td>
    <td><code>4px</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline offset of the focused ColorGradient.</div></div>
    </td>
</tr>
</tbody>
</table>

### Colorpalette

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-color-palette-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ColorPalette.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorPalette.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-line-height</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ColorPalette.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-width</td>
    <td>String</td>
    <td><code>k-spacing(6)</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-height</td>
    <td>String</td>
    <td><code>$kendo-color-palette-tile-width</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-focus-shadow</td>
    <td>List</td>
    <td><code>0 0 3px 1px rgba( black, .3 ), inset 0 0 0 1px rgba( white, .5 )</code></td>
    <td><code>0 0 3px 1px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the ColorPalette focused tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-hover-shadow</td>
    <td>List</td>
    <td><code>0 0 3px 1px rgba( black, .3 ), inset 0 0 0 1px rgba( white, .8 )</code></td>
    <td><code>0 0 3px 1px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.8)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the ColorPalette hovered tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-selected-shadow</td>
    <td>List</td>
    <td><code>0 1px 3px 1px rgba( black, .3 ), inset 0 0 0 1px rgba( white, 1 )</code></td>
    <td><code>0 1px 3px 1px rgba(0, 0, 0, 0.3), inset 0 0 0 1px white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the ColorPalette selected tile.</div></div>
    </td>
</tr>
</tbody>
</table>

### Component

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-component-bg</td>
    <td>String</td>
    <td><code>$kendo-body-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-bg` e.g. `$kendo-grid-bg: $kendo-component-bg !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-text</td>
    <td>String</td>
    <td><code>$kendo-body-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-text` e.g. `$kendo-grid-text: $kendo-component-text !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-border</td>
    <td>String</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-border` e.g. `$kendo-grid-border: $kendo-component-border !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-bg</td>
    <td>String</td>
    <td><code>$kendo-base-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the component header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-text</td>
    <td>String</td>
    <td><code>$kendo-base-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the component header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-border</td>
    <td>String</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the component header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-gradient</td>
    <td>Null</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of the component header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the invalid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-text</td>
    <td>String</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the invalid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-border</td>
    <td>String</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the invalid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the invalid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-valid-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the valid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-valid-text</td>
    <td>Color</td>
    <td><code>$kendo-color-success</code></td>
    <td><span class="color-preview" style="background-color: #3ea44e"></span><code>#3ea44e</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the valid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-valid-border</td>
    <td>Color</td>
    <td><code>$kendo-color-success</code></td>
    <td><span class="color-preview" style="background-color: #3ea44e"></span><code>#3ea44e</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the valid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-valid-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the valid items.</div></div>
    </td>
</tr>
</tbody>
</table>

### Dialog

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-dialog-titlebar-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Dialog titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-titlebar-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Dialog titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-titlebar-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Dialog titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-buttongroup-padding-x</td>
    <td>String</td>
    <td><code>$kendo-actions-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-buttongroup-padding-y</td>
    <td>String</td>
    <td><code>$kendo-actions-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-buttongroup-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the top border of the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-button-spacing</td>
    <td>String</td>
    <td><code>$kendo-actions-button-spacing</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "primary": k-map-get($kendo-theme-colors, "primary"),
    "light": k-map-get($kendo-theme-colors, "light"),
    "dark": k-map-get($kendo-theme-colors, "dark")
)</code></td>
    <td><code>("primary": var(--kendo-color-primary, #f35800), "light": var(--kendo-color-light, #ebebeb), "dark": var(--kendo-color-dark, #404040))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Dialog.</div></div>
    </td>
</tr>
</tbody>
</table>

### Dock-manager

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-dock-manager-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> The width of the border around the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-border</td>
    <td>String</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-border-width</td>
    <td>Number</td>
    <td><code>$kendo-dock-manager-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> The style of the border around the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-bg</td>
    <td>String</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-lg, inherit )</code></td>
    <td><code>var(--kendo-font-size-lg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-sm, normal )</code></td>
    <td><code>var(--kendo-line-height-sm, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-normal, normal )</code></td>
    <td><code>var(--kendo-font-weight-normal, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-content-padding-x</td>
    <td>String</td>
    <td><code>$kendo-dock-manager-pane-header-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the pane content in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-content-padding-y</td>
    <td>String</td>
    <td><code>$kendo-dock-manager-pane-header-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the pane content in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-tabbed-pane-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the tabbed pane in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-tabbed-pane-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the tabbed pane in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-unpinned-container-width</td>
    <td>Number</td>
    <td><code>300px</code></td>
    <td><code>300px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the unpinned pane container in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-unpinned-container-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-white</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background-color of the unpinned pane container in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-unpinned-container-shadow</td>
    <td>List</td>
    <td><code>4px 0px 5px 0px rgba(0, 0, 0, 0.04), 2px 0px 4px 0px rgba(0, 0, 0, 0.03)</code></td>
    <td><code>4px 0px 5px 0px rgba(0, 0, 0, 0.04), 2px 0px 4px 0px rgba(0, 0, 0, 0.03)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the unpinned pane container in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-padding</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-bg</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #f5f5f5"></span><code>#f5f5f5</code></td>
    <td><span class="color-preview" style="background-color: #f5f5f5"></span><code>#f5f5f5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-outline-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-outline-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-outline</td>
    <td>String</td>
    <td><code>$kendo-dock-indicator-text</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-shadow</td>
    <td>List</td>
    <td><code>drop-shadow( 0px 1px 18px rgba(0, 0, 0, 0.12) ) drop-shadow( 0px 6px 10px rgba(0, 0, 0, 0.14) ) drop-shadow( 0px 3px 5px rgba(0, 0, 0, 0.20) )</code></td>
    <td><code>drop-shadow(0px 1px 18px rgba(0, 0, 0, 0.12)) drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.14)) drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> The background color of the hovered dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-color-white</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-dock-preview-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the dropping area in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-dock-preview-border-style</td>
    <td>String</td>
    <td><code>dashed</code></td>
    <td><code>dashed</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the dropping area in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-dock-preview-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(sm)</code></td>
    <td><code>var(--kendo-border-radius-sm, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the dropping area in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-dock-preview-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 16%, transparent), rgba( $kendo-color-primary, .16 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #f35800) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the dropping area in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-dock-preview-border</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the dropping area in the DockManager component.</div></div>
    </td>
</tr>
</tbody>
</table>

### Drawer

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-drawer-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-content-padding-y</td>
    <td>String</td>
    <td><code>$kendo-padding-md-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-width</td>
    <td>Number</td>
    <td><code>7px</code></td>
    <td><code>7px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Drawer scrollbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-color</td>
    <td>Color</td>
    <td><code>rgba( 156, 156, 156, .7 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(156, 156, 156, 0.7)"></span><code>rgba(156, 156, 156, 0.7)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Drawer scrollbar track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-bg</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #dedede"></span><code>#dedede</code></td>
    <td><span class="color-preview" style="background-color: #dedede"></span><code>#dedede</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Drawer scrollbar thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-radius</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Drawer scrollbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-hover-color</td>
    <td>Color</td>
    <td><code>rgba( 156, 156, 156, 1 )</code></td>
    <td><span class="color-preview" style="background-color: rgb(156, 156, 156)"></span><code>rgb(156, 156, 156)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover color of the Drawer scrollbar track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-padding-y</td>
    <td>String</td>
    <td><code>$kendo-padding-md-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-font-size</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-lg</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-level-padding-x</td>
    <td>String</td>
    <td><code>$kendo-drawer-item-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer item in each level.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-level-count</td>
    <td>Number</td>
    <td><code>5</code></td>
    <td><code>5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The count of the Drawer item levels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-icon-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-icon-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-mini-initial-width</td>
    <td>Calculation</td>
    <td><code>calc( 2 * #{$kendo-drawer-item-padding-x} + #{$kendo-icon-size} )</code></td>
    <td><code>calc(2 * var(--kendo-spacing-4, 1rem) + 16px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The initial width of the mini Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-hover-bg</code></td>
    <td><code>var(--kendo-color-base-hover, #dddddd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-hover-text</td>
    <td>String</td>
    <td><code>$kendo-hover-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-focus-bg</td>
    <td>String</td>
    <td><code>$kendo-drawer-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-text</td>
    <td>String</td>
    <td><code>$kendo-selected-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-selected-hover-bg</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-hover-text</td>
    <td>String</td>
    <td><code>$kendo-selected-hover-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and hovered Drawer item.</div></div>
    </td>
</tr>
</tbody>
</table>

### Dropdowntree

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-dropdowntree-popup-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the DropdownTree popup</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropdowntree-popup-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the DropdownTree popup</div></div>
    </td>
</tr>
</tbody>
</table>

### Dropzone

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-dropzone-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-min-height</td>
    <td>Number</td>
    <td><code>220px</code></td>
    <td><code>220px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum height of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-bg</td>
    <td>String</td>
    <td><code>$kendo-base-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-text</td>
    <td>String</td>
    <td><code>$kendo-base-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-border</td>
    <td>String</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-spacing</td>
    <td>String</td>
    <td><code>k-spacing(6)</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing below the DropZone icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( subtle ), k-try-tint( $kendo-dropzone-text, 4 ))</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the DropZone icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-hover-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered DropZone icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the DropZone hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing below the DropZone hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the DropZone hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the DropZone note.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing below the DropZone note.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the DropZone note.</div></div>
    </td>
</tr>
</tbody>
</table>

### Editor

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-editor-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-placeholder-text</td>
    <td>String</td>
    <td><code>$kendo-input-placeholder-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Еditor placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-placeholder-opacity</td>
    <td>Number</td>
    <td><code>$kendo-input-placeholder-opacity</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Editor placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selected-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary-contrast</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected text color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected background color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-highlighted-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-subtle ), k-color-mix( $kendo-color-primary, #ffffff, 20% ))</code></td>
    <td><code>var(--kendo-color-primary-subtle, #fff2eb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The highlighted background color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-export-tool-icon-margin-x</td>
    <td>Number</td>
    <td><code>.25em</code></td>
    <td><code>0.25em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Editor's export tool icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-size</td>
    <td>Number</td>
    <td><code>8px</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-border</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-bg</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selectednode-outline-width</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> The outline width of the Editor's selected node.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selectednode-outline-color</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #88ccff"></span><code>#88ccff</code></td>
    <td><span class="color-preview" style="background-color: #88ccff"></span><code>#88ccff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the Editor's selected node.</div></div>
    </td>
</tr>
</tbody>
</table>

### Expander

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-expander-spacing-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hine height of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-text</td>
    <td>String</td>
    <td><code>$kendo-expander-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-hover-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base-subtle-hover ), k-color-shade( $kendo-expander-bg, 1 ))</code></td>
    <td><code>var(--kendo-color-base-subtle-hover, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-title-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-sub-title-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel sub-title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-indicator-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the ExpansionPanel indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-content-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ExpansionPanel content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-content-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ExpansionPanel content.</div></div>
    </td>
</tr>
</tbody>
</table>

### Filemanager

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-file-manager-spacer</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The space between the FileManager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-toolbar-border-width</td>
    <td>Number</td>
    <td><code>$kendo-file-manager-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FileManager Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-toolbar-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-toolbar-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-toolbar-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-toolbar-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the FileManager Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-padding-x</td>
    <td>String</td>
    <td><code>$kendo-file-manager-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-padding-y</td>
    <td>String</td>
    <td><code>$kendo-file-manager-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-width</td>
    <td>Number</td>
    <td><code>20%</code></td>
    <td><code>20%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-border-width</td>
    <td>Number</td>
    <td><code>$kendo-file-manager-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-border-width</td>
    <td>Number</td>
    <td><code>$kendo-file-manager-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-bg</td>
    <td>String</td>
    <td><code>$kendo-toolbar-bg</code></td>
    <td><code>var(--kendo-color-base, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-width</td>
    <td>Number</td>
    <td><code>120px</code></td>
    <td><code>120px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-height</td>
    <td>Number</td>
    <td><code>120px</code></td>
    <td><code>120px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( subtle ), k-try-tint($kendo-file-manager-text, 4))</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-selected-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the FileManager selected ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-selected-text</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the FileManager selected ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the FileManager selected ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-grid-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-grid-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-grid-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-padding-x</td>
    <td>String</td>
    <td><code>$kendo-file-manager-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-padding-y</td>
    <td>String</td>
    <td><code>$kendo-file-manager-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-width</td>
    <td>Number</td>
    <td><code>20%</code></td>
    <td><code>20%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-border-width</td>
    <td>Number</td>
    <td><code>$kendo-file-manager-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-spacing</td>
    <td>String</td>
    <td><code>$kendo-file-manager-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-column-gap</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the columns in the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-icon-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager preview icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-icon-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( subtle ), k-try-tint($kendo-file-manager-text, 4))</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager preview icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-icon-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager preview icon.</div></div>
    </td>
</tr>
</tbody>
</table>

### Filter

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-filter-padding-x</td>
    <td>String</td>
    <td><code>$kendo-padding-md-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Filter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-padding-y</td>
    <td>String</td>
    <td><code>$kendo-padding-md-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Filter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-bottom-margin</td>
    <td>String</td>
    <td><code>k-spacing(7.5)</code></td>
    <td><code>var(--kendo-spacing-7\.5, 1.875rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Filter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-line-size</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the line that connects the Filter items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-operator-dropdown-width</td>
    <td>Number</td>
    <td><code>15em</code></td>
    <td><code>15em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the dropdown elements in the Filter items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-preview-field-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Filter preview field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-preview-operator-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Filter preview operator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-toolbar-focus-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px rgba(0, 0, 0, .08)</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Filter toolbar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Floating-action-button

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-fab-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-sm-padding-x</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-fab-padding-x} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-md-padding-x</td>
    <td>String</td>
    <td><code>$kendo-fab-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-lg-padding-x</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-fab-padding-x} * 1.5 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) * 1.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-padding-y</td>
    <td>String</td>
    <td><code>$kendo-fab-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-sm-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-fab-padding-y} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-md-padding-y</td>
    <td>String</td>
    <td><code>$kendo-fab-padding-y</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-lg-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-fab-padding-y} * 1.5 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) * 1.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-padding-y</td>
    <td>String</td>
    <td><code>$kendo-fab-icon-padding-x</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-spacing</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the FAB icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-items-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-items-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-padding-y</td>
    <td>String</td>
    <td><code>$kendo-fab-item-text-padding-x</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the FAB item text border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-border-radius</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-xs, inherit )</code></td>
    <td><code>var(--kendo-font-size-xs, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-line-height</td>
    <td>Number</td>
    <td><code>1.2</code></td>
    <td><code>1.2</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-padding-x</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(2)} + #{$kendo-fab-icon-padding-x} )</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) + var(--kendo-spacing-0\.5, 0.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-padding-y</td>
    <td>Calculation</td>
    <td><code>$kendo-fab-item-icon-padding-x</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) + var(--kendo-spacing-0\.5, 0.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border-width</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the FAB item icon border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border-radius</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-theme-colors</td>
    <td>Map</td>
    <td><code>$kendo-theme-colors</code></td>
    <td><code>("primary": var(--kendo-color-primary, #f35800), "secondary": var(--kendo-color-secondary, #b6b6b6), "tertiary": var(--kendo-color-tertiary, #03a9f4), "info": var(--kendo-color-info, #007bc3), "success": var(--kendo-color-success, #3ea44e), "warning": var(--kendo-color-warning, #ffa41f), "error": var(--kendo-color-error, #d92800), "dark": var(--kendo-color-dark, #404040), "light": var(--kendo-color-light, #ebebeb), "inverse": var(--kendo-color-dark, #404040))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-fab-sm-padding-x,
        padding-y: $kendo-fab-sm-padding-y
    ),
    md: (
        padding-x: $kendo-fab-md-padding-x,
        padding-y: $kendo-fab-md-padding-y
    ),
    lg: (
        padding-x: $kendo-fab-lg-padding-x,
        padding-y: $kendo-fab-lg-padding-y
    )
)</code></td>
    <td><code>(sm: (padding-x: calc(var(--kendo-spacing-4, 1rem) / 2), padding-y: calc(var(--kendo-spacing-4, 1rem) / 2)), md: (padding-x: var(--kendo-spacing-4, 1rem), padding-y: var(--kendo-spacing-4, 1rem)), lg: (padding-x: calc(var(--kendo-spacing-4, 1rem) * 1.5), padding-y: calc(var(--kendo-spacing-4, 1rem) * 1.5)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size map for the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-shadow</td>
    <td>String</td>
    <td><code>k-elevation(5)</code></td>
    <td><code>var(--kendo-elevation-5, 0 10px 12px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-disabled-shadow</td>
    <td>String</td>
    <td><code>k-elevation(5)</code></td>
    <td><code>var(--kendo-elevation-5, 0 10px 12px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the disabled FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-active-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the active FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-outline-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-outline-width</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-text</td>
    <td>String</td>
    <td><code>$kendo-button-text</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-bg</td>
    <td>String</td>
    <td><code>$kendo-button-bg</code></td>
    <td><code>var(--kendo-color-base, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border</td>
    <td>String</td>
    <td><code>$kendo-button-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-shadow</td>
    <td>String</td>
    <td><code>$kendo-fab-shadow</code></td>
    <td><code>var(--kendo-elevation-5, 0 10px 12px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-disabled-shadow</td>
    <td>String</td>
    <td><code>$kendo-fab-disabled-shadow</code></td>
    <td><code>var(--kendo-elevation-5, 0 10px 12px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the disabled FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-active-shadow</td>
    <td>Null</td>
    <td><code>$kendo-fab-active-shadow</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the active FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-outline-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-outline-width</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-outline-color</td>
    <td>Color</td>
    <td><code>rgba(0, 0, 0, .08)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the FAB item.</div></div>
    </td>
</tr>
</tbody>
</table>

### Floating-label

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-floating-label-scale</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transformation scale of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-font-size</td>
    <td>String</td>
    <td><code>$kendo-input-font-size</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-max-width</td>
    <td>Number</td>
    <td><code>90%</code></td>
    <td><code>90%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-line-height</td>
    <td>String</td>
    <td><code>$kendo-input-line-height</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-floating-label-line-height} * #{$kendo-floating-label-font-size} )</code></td>
    <td><code>calc(var(--kendo-line-height, normal) * var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-offset-x</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-input-padding-x} + #{$kendo-input-border-width} )</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal offset of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-offset-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-floating-label-height} + #{$kendo-input-border-width} + #{$kendo-input-padding-y} )</code></td>
    <td><code>calc(calc(var(--kendo-line-height, normal) * var(--kendo-font-size, inherit)) + 1px + var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical offset of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-scale</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transformation scale of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-offset-x</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal offset of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-offset-y</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical offset of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-transition</td>
    <td>List</td>
    <td><code>.2s ease-out</code></td>
    <td><code>0.2s ease-out</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Floating Label.</div></div>
    </td>
</tr>
</tbody>
</table>

### Form

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-form-spacer</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-padding-md-x} * 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the inline Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-line-height-em</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-form-line-height} * 1em )</code></td>
    <td><code>calc(var(--kendo-line-height, normal) * 1em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Form in em units.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-sm-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-sm, normal )</code></td>
    <td><code>var(--kendo-line-height-sm, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the small Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-lg-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-lg, normal )</code></td>
    <td><code>var(--kendo-line-height-lg, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the large Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-fieldset-margin</td>
    <td>List</td>
    <td><code>2em 0 0</code></td>
    <td><code>2em 0 0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-fieldset-padding</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-margin</td>
    <td>List</td>
    <td><code>0 0 1em</code></td>
    <td><code>0 0 1em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-padding</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-border-width</td>
    <td>List</td>
    <td><code>0 0 2px</code></td>
    <td><code>0 0 2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-border-color</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-width</td>
    <td>Number</td>
    <td><code>100%</code></td>
    <td><code>100%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-font-size</td>
    <td>Number</td>
    <td><code>14px</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-text-transform</td>
    <td>String</td>
    <td><code>uppercase</code></td>
    <td><code>uppercase</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text capitalization of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-label-margin-bottom</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Form label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-button-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Form buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-font-size</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Form hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-font-style</td>
    <td>String</td>
    <td><code>italic</code></td>
    <td><code>italic</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font style of the Form hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-margin-top</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top margin of the Form hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-sm-rows-spacing</td>
    <td>Number</td>
    <td><code>1em</code></td>
    <td><code>1em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row spacing of the small Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-md-rows-spacing</td>
    <td>Number</td>
    <td><code>$kendo-form-sm-rows-spacing</code></td>
    <td><code>1em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row spacing of the medium Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-lg-rows-spacing</td>
    <td>Number</td>
    <td><code>$kendo-form-sm-rows-spacing</code></td>
    <td><code>1em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row spacing of the large Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-separator-margin</td>
    <td>List</td>
    <td><code>$kendo-form-md-rows-spacing 0 0</code></td>
    <td><code>1em 0 0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-separator-border-color</td>
    <td>String</td>
    <td><code>$kendo-form-legend-border-color</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Form separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-padding-top</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(2.5)} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-2\.5, 0.625rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top padding of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-width</td>
    <td>Number</td>
    <td><code>25%</code></td>
    <td><code>25%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-align</td>
    <td>String</td>
    <td><code>flex-end</code></td>
    <td><code>flex-end</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal alignment of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-field-wrap-max-width</td>
    <td>Calculation</td>
    <td><code>calc( ( 100% - #{$kendo-horizontal-form-label-width} ) - #{$kendo-horizontal-form-label-margin-x} )</code></td>
    <td><code>calc(100% - 25% - var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the field wrap in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-inline-form-element-width</td>
    <td>Number</td>
    <td><code>25%</code></td>
    <td><code>25%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the inline Form element.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-forms-invalid-color</td>
    <td>String</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The invalid text color of the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-label-optional-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the optional label in the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-label-optional-font-size</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the optional label in the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-label-optional-font-style</td>
    <td>String</td>
    <td><code>italic</code></td>
    <td><code>italic</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font style of the optional label in the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-margin</td>
    <td>String</td>
    <td><code>k-spacing(7.5)</code></td>
    <td><code>var(--kendo-spacing-7\.5, 1.875rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-font-size</td>
    <td>Calculation</td>
    <td><code>$kendo-h4-font-size</code></td>
    <td><code>calc(var(--kendo-font-size, inherit) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-legend-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-legend-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-app-surface ), k-try-shade( $kendo-body-text, 2 ))</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-legend-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        form-rows-spacing: $kendo-form-sm-rows-spacing
    ),
    md: (
        form-rows-spacing: $kendo-form-md-rows-spacing
    ),
    lg: (
        form-rows-spacing: $kendo-form-lg-rows-spacing
    )
)</code></td>
    <td><code>(sm: (form-rows-spacing: 1em), md: (form-rows-spacing: 1em), lg: (form-rows-spacing: 1em))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Form.</div></div>
    </td>
</tr>
</tbody>
</table>

### Gantt

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-gantt-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-sm, normal )</code></td>
    <td><code>var(--kendo-line-height-sm, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-treelist-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt TreeList.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-treelist-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Gantt TreeList.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-treelist-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt TreeList.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-nonwork-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-base ) 3%, transparent), rgba( k-contrast-color( $kendo-gantt-bg ), .025 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-base, #272727) 3%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt non-working days.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-nonwork-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Gantt non-working days.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-nonwork-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt non-working days.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-size</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Gantt connecting lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-fill</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-base ), k-contrast-color( $kendo-gantt-bg ))</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background fill color of the Gantt connecting lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-selected-fill</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background fill of the selected Gantt connecting lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-size</td>
    <td>Number</td>
    <td><code>8px</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-spacing</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-bg</td>
    <td>String</td>
    <td><code>$kendo-gantt-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-gantt-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-hover-border</td>
    <td>String</td>
    <td><code>$kendo-gantt-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-bg</td>
    <td>String</td>
    <td><code>$kendo-gantt-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-border</td>
    <td>String</td>
    <td><code>$kendo-gantt-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-selected-border</td>
    <td>String</td>
    <td><code>$kendo-selected-border</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected Gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( subtle ), k-try-tint( $kendo-gantt-text, 1 ))</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt summary.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-progress-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-base ), k-try-shade( $kendo-gantt-text, 5 ))</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt summary progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-selected-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-subtle-active ), k-try-tint( $kendo-selected-bg, 6 ))</code></td>
    <td><code>var(--kendo-color-primary-subtle-active, #ffd8c2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Gantt summary.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-progress-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Gantt summary progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( subtle ), k-try-tint( $kendo-gantt-text, 2 ))</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base-subtle ), k-contrast-color( $kendo-gantt-text ))</code></td>
    <td><code>var(--kendo-color-base-subtle, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-progress-bg</td>
    <td>String</td>
    <td><code>$kendo-gantt-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt task progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-selected-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-subtle-active ), k-try-tint( $kendo-selected-bg, 6 ))</code></td>
    <td><code>var(--kendo-color-primary-subtle-active, #ffd8c2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected the Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-selected-text</td>
    <td>String</td>
    <td><code>$kendo-selected-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-progress-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Gantt task progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-margin-y</td>
    <td>Number</td>
    <td><code>.35em</code></td>
    <td><code>0.35em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the Gantt task planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-border-width</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Gantt task planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-line-height</td>
    <td>Number</td>
    <td><code>.75em</code></td>
    <td><code>0.75em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Gantt task planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-dependency-margin-y</td>
    <td>Number</td>
    <td><code>.55em</code></td>
    <td><code>0.55em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the Gantt planned dependencies.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-width</td>
    <td>Number</td>
    <td><code>6px</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the Gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-height</td>
    <td>Number</td>
    <td><code>$kendo-gantt-planned-moment-width</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default height of the Gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-border-radius</td>
    <td>Calculation</td>
    <td><code>calc( ( #{$kendo-gantt-planned-border-width * 2} + #{$kendo-gantt-planned-moment-width} ) / 2 )</code></td>
    <td><code>calc((4px + 6px) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-left-margin-x</td>
    <td>Calculation</td>
    <td><code>calc( #{k-math-div( $kendo-gantt-planned-border-width, 2 )} - #{$kendo-gantt-planned-moment-border-radius} )</code></td>
    <td><code>calc(1px - calc((4px + 6px) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-milestone-moment-margin-x</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-gantt-planned-moment-width, 2 )</code></td>
    <td><code>3px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Gantt milestone planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-duration-height</td>
    <td>Number</td>
    <td><code>$kendo-gantt-planned-border-width</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default height of the Gantt planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-duration-hover-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-gantt-planned-border-width} + 1px )</code></td>
    <td><code>calc(2px + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the hovered Gantt planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-single-drag-hint-top</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top position of the Gantt drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-summary-drag-hint-top</td>
    <td>Number</td>
    <td><code>.5em</code></td>
    <td><code>0.5em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top position of the Gantt summary drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-milestone-drag-hint-top</td>
    <td>Number</td>
    <td><code>.3em</code></td>
    <td><code>0.3em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top position of the Gantt planned milestone drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-rtl-milestone-wrap-margin-x</td>
    <td>Number</td>
    <td><code>-2.4em</code></td>
    <td><code>-2.4em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Gantt milestone wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-rtl-milestone-planned-moment-margin-x</td>
    <td>Number</td>
    <td><code>.2em</code></td>
    <td><code>0.2em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Gantt milestone line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-rtl-milestone-dot-start-margin-x</td>
    <td>Number</td>
    <td><code>-.1em</code></td>
    <td><code>-0.1em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Gantt milestone task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-offset-resize-handler-margin-x</td>
    <td>Number</td>
    <td><code>1.4em</code></td>
    <td><code>1.4em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal offset of the Gantt delayed task resize handler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt planned Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-border</td>
    <td>String</td>
    <td><code>$kendo-gantt-planned-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt planned Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-delayed-bg</td>
    <td>String</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt delayed task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-delayed-bg-lighter</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( error-emphasis ), k-color-tint($kendo-gantt-delayed-bg, 5))</code></td>
    <td><code>var(--kendo-color-error-emphasis, #e35e40)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The complement background color of the Gantt delayed task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-advanced-bg</td>
    <td>String</td>
    <td><code>$kendo-color-success</code></td>
    <td><code>var(--kendo-color-success, #3ea44e)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt advanced task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-advanced-bg-lighter</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( success-emphasis ), k-color-tint($kendo-gantt-advanced-bg, 5))</code></td>
    <td><code>var(--kendo-color-success-emphasis, #6ebb7a)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The complement background color of the Gantt advanced task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-action-on-offset-text</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Gantt delayed task action.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-offset-resize-handler-top</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top position of the Gantt delayed task resize handler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-width</td>
    <td>Number</td>
    <td><code>200px</code></td>
    <td><code>200px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the Gantt validation Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-label-width</td>
    <td>Number</td>
    <td><code>50px</code></td>
    <td><code>50px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the Gantt validation Tooltip label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-border</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #656565"></span><code>#656565</code></td>
    <td><span class="color-preview" style="background-color: #656565"></span><code>#656565</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt validation Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-valid-border</td>
    <td>String</td>
    <td><code>$kendo-color-success</code></td>
    <td><code>var(--kendo-color-success, #3ea44e)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the valid Gantt validation Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-invalid-border</td>
    <td>String</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the invalid Gantt validation Tooltip.</div></div>
    </td>
</tr>
</tbody>
</table>

### Grid

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-grid-padding-x</td>
    <td>String</td>
    <td><code>$kendo-table-md-cell-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-padding-y</td>
    <td>String</td>
    <td><code>$kendo-table-md-cell-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-header-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-header-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-grouping-header-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-cell-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-filter-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-filter-cell-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-filter-cell-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-edit-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-cell-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid edit cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-edit-cell-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(1.5)} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-1\.5, 0.375rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-bg</td>
    <td>String</td>
    <td><code>$kendo-table-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-text</td>
    <td>String</td>
    <td><code>$kendo-table-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-border</td>
    <td>String</td>
    <td><code>$kendo-table-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-bg</td>
    <td>String</td>
    <td><code>$kendo-table-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-text</td>
    <td>String</td>
    <td><code>$kendo-table-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-border</td>
    <td>String</td>
    <td><code>$kendo-table-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-gradient</td>
    <td>Null</td>
    <td><code>$kendo-table-header-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-bg</td>
    <td>String</td>
    <td><code>$kendo-table-footer-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of Grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-text</td>
    <td>String</td>
    <td><code>$kendo-table-footer-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of Grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-border</td>
    <td>String</td>
    <td><code>$kendo-grid-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of Grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-alt-bg</td>
    <td>String</td>
    <td><code>$kendo-table-alt-row-bg</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 5%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid alternating rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-alt-text</td>
    <td>Null</td>
    <td><code>$kendo-table-alt-row-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid alternating rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-alt-border</td>
    <td>Null</td>
    <td><code>$kendo-table-alt-row-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Grid alternating rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-table-hover-bg</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 11%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of hovered Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hover-text</td>
    <td>Null</td>
    <td><code>$kendo-table-hover-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hover-border</td>
    <td>Null</td>
    <td><code>$kendo-table-hover-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-table-selected-bg</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #f35800) 25%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-text</td>
    <td>Null</td>
    <td><code>$kendo-table-selected-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-border</td>
    <td>Null</td>
    <td><code>$kendo-table-selected-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-bg</td>
    <td>String</td>
    <td><code>$kendo-grid-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-text</td>
    <td>String</td>
    <td><code>$kendo-grid-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-border</td>
    <td>String</td>
    <td><code>$kendo-grid-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-border-width</td>
    <td>Number</td>
    <td><code>$kendo-grid-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the selection aggregates items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-line-height</td>
    <td>String</td>
    <td><code>$kendo-grid-line-height</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-bold, normal )</code></td>
    <td><code>var(--kendo-font-weight-bold, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-row-resizer-hover-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-base ) 20%, transparent), rgba( k-contrast-color( $kendo-grid-bg ), .12 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-base, #272727) 20%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid row resize indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-row-resizer-active-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the active Grid row resize indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-row-resizer-height</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Grid row resize indicator.</div></div>
    </td>
</tr>
</tbody>
</table>

### Input

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-input-default-width</td>
    <td>Number</td>
    <td><code>100%</code></td>
    <td><code>100%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-lg, inherit )</code></td>
    <td><code>var(--kendo-font-size-lg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-lg, normal )</code></td>
    <td><code>var(--kendo-line-height-lg, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-input-sm-padding-x,
        padding-y: $kendo-input-sm-padding-y,
        font-size: $kendo-input-sm-font-size,
        line-height: $kendo-input-sm-line-height,
        button-padding-x: $kendo-input-sm-padding-y,
        button-padding-y: $kendo-input-sm-padding-y
    ),
    md: (
        padding-x: $kendo-input-md-padding-x,
        padding-y: $kendo-input-md-padding-y,
        font-size: $kendo-input-md-font-size,
        line-height: $kendo-input-md-line-height,
        button-padding-x: $kendo-input-md-padding-y,
        button-padding-y: $kendo-input-md-padding-y
    ),
    lg: (
        padding-x: $kendo-input-lg-padding-x,
        padding-y: $kendo-input-lg-padding-y,
        font-size: $kendo-input-lg-font-size,
        line-height: $kendo-input-lg-line-height,
        button-padding-x: $kendo-input-lg-padding-y,
        button-padding-y: $kendo-input-lg-padding-y
    )
)</code></td>
    <td><code>(sm: (padding-x: var(--kendo-spacing-2, 0.5rem), padding-y: var(--kendo-spacing-0\.5, 0.125rem), font-size: var(--kendo-font-size, inherit), line-height: var(--kendo-line-height, normal), button-padding-x: var(--kendo-spacing-0\.5, 0.125rem), button-padding-y: var(--kendo-spacing-0\.5, 0.125rem)), md: (padding-x: var(--kendo-spacing-2, 0.5rem), padding-y: var(--kendo-spacing-1, 0.25rem), font-size: var(--kendo-font-size, inherit), line-height: var(--kendo-line-height, normal), button-padding-x: var(--kendo-spacing-1, 0.25rem), button-padding-y: var(--kendo-spacing-1, 0.25rem)), lg: (padding-x: var(--kendo-spacing-3, 0.75rem), padding-y: var(--kendo-spacing-2, 0.5rem), font-size: var(--kendo-font-size-lg, inherit), line-height: var(--kendo-line-height-lg, normal), button-padding-x: var(--kendo-spacing-2, 0.5rem), button-padding-y: var(--kendo-spacing-2, 0.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border</td>
    <td>String</td>
    <td><code>$kendo-button-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-border</td>
    <td>String</td>
    <td><code>$kendo-button-hover-border</code></td>
    <td><code>var(--kendo-color-border-alt, #b6b6b6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-border</td>
    <td>Color</td>
    <td><code>rgba( black, .1 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.1)"></span><code>rgba(0, 0, 0, 0.1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-shadow</td>
    <td>List</td>
    <td><code>0 2px 4px 0 rgba( black, .03 ), 0 4px 5px 0 rgba( black, .04 )</code></td>
    <td><code>0 2px 4px 0 rgba(0, 0, 0, 0.03), 0 4px 5px 0 rgba(0, 0, 0, 0.04)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-selected-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-selected-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the disabled Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the disabled Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 50%, transparent), rgba( $kendo-button-text, .5))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 50%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 80%, transparent), rgba( $kendo-button-text, .8))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 80%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-input-focus-shadow</code></td>
    <td><code>0 2px 4px 0 rgba(0, 0, 0, 0.03), 0 4px 5px 0 rgba(0, 0, 0, 0.04)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the outline focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-text</td>
    <td>String</td>
    <td><code>$kendo-input-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-border</td>
    <td>String</td>
    <td><code>$kendo-input-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-border</td>
    <td>String</td>
    <td><code>$kendo-input-hover-border</code></td>
    <td><code>var(--kendo-color-border-alt, #b6b6b6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-input-focus-shadow</code></td>
    <td><code>0 2px 4px 0 rgba(0, 0, 0, 0.03), 0 4px 5px 0 rgba(0, 0, 0, 0.04)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the flat focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-placeholder-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-placeholder-opacity</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Input placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Input clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-opacity</td>
    <td>Number</td>
    <td><code>.5</code></td>
    <td><code>0.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Input clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the hovered Input clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-hover-opacity</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the hovered Input clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-values-margin-y</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-values-margin-x</td>
    <td>String</td>
    <td><code>$kendo-input-values-margin-y</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-button-width</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Input button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-button-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Input button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-spinner-width</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Input spinner button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-spinner-icon-offset</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The icon offset of the Input spinner button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-separator-text</td>
    <td>String</td>
    <td><code>$kendo-input-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Input separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-separator-opacity</td>
    <td>Number</td>
    <td><code>.5</code></td>
    <td><code>0.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Input separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-prefix-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input prefix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-suffix-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input suffix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-invalid-border</td>
    <td>String</td>
    <td><code>$kendo-invalid-border</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the invalid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-invalid-shadow</td>
    <td>Null</td>
    <td><code>$kendo-invalid-shadow</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the invalid Input components.</div></div>
    </td>
</tr>
</tbody>
</table>

### List

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-list-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the List components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the List component, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the List component, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the List header, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the List header, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-border-width</td>
    <td>List</td>
    <td><code>0 0 1px</code></td>
    <td><code>0 0 1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the List header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the List header, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the List header, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-bold, normal )</code></td>
    <td><code>var(--kendo-font-weight-bold, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the List header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the List items, when no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the List items, when no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the List items, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the List items, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the List group items, when no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the List group items, when no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-border-width</td>
    <td>List</td>
    <td><code>1px 0 0</code></td>
    <td><code>1px 0 0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the List group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the List group items, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the List group items, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-bold, normal )</code></td>
    <td><code>var(--kendo-font-weight-bold, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of a List group item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        font-size: $kendo-list-sm-font-size,
        line-height: $kendo-list-sm-line-height,
        header-padding-x: $kendo-list-sm-header-padding-x,
        header-padding-y: $kendo-list-sm-header-padding-y,
        header-font-size: null,
        header-line-height: null,
        item-padding-x: $kendo-list-sm-item-padding-x,
        item-padding-y: $kendo-list-sm-item-padding-y,
        item-font-size: null,
        item-line-height: null,
        group-item-padding-x: $kendo-list-sm-group-item-padding-x,
        group-item-padding-y: $kendo-list-sm-group-item-padding-y,
        group-item-font-size: null,
        group-item-line-height: null
    ),
    md: (
        font-size: $kendo-list-md-font-size,
        line-height: $kendo-list-md-line-height,
        header-padding-x: $kendo-list-md-header-padding-x,
        header-padding-y: $kendo-list-md-header-padding-y,
        header-font-size: null,
        header-line-height: null,
        item-padding-x: $kendo-list-md-item-padding-x,
        item-padding-y: $kendo-list-md-item-padding-y,
        item-font-size: null,
        item-line-height: null,
        group-item-padding-x: $kendo-list-md-group-item-padding-x,
        group-item-padding-y: $kendo-list-md-group-item-padding-y,
        group-item-font-size: null,
        group-item-line-height: null
    ),
    lg: (
        font-size: $kendo-list-lg-font-size,
        line-height: $kendo-list-lg-line-height,
        header-padding-x: $kendo-list-lg-header-padding-x,
        header-padding-y: $kendo-list-lg-header-padding-y,
        header-font-size: null,
        header-line-height: null,
        item-padding-x: $kendo-list-lg-item-padding-x,
        item-padding-y: $kendo-list-lg-item-padding-y,
        item-font-size: null,
        item-line-height: null,
        group-item-padding-x: $kendo-list-lg-group-item-padding-x,
        group-item-padding-y: $kendo-list-lg-group-item-padding-y,
        group-item-font-size: null,
        group-item-line-height: null
    )
)</code></td>
    <td><code>(sm: (font-size: var(--kendo-font-size, inherit), line-height: var(--kendo-line-height, normal), header-padding-x: var(--kendo-spacing-2, 0.5rem), header-padding-y: var(--kendo-spacing-0\.5, 0.125rem), header-font-size: null, header-line-height: null, item-padding-x: var(--kendo-spacing-2, 0.5rem), item-padding-y: var(--kendo-spacing-0\.5, 0.125rem), item-font-size: null, item-line-height: null, group-item-padding-x: var(--kendo-spacing-2, 0.5rem), group-item-padding-y: var(--kendo-spacing-0\.5, 0.125rem), group-item-font-size: null, group-item-line-height: null), md: (font-size: var(--kendo-font-size, inherit), line-height: var(--kendo-line-height, normal), header-padding-x: var(--kendo-spacing-2, 0.5rem), header-padding-y: var(--kendo-spacing-1, 0.25rem), header-font-size: null, header-line-height: null, item-padding-x: var(--kendo-spacing-2, 0.5rem), item-padding-y: var(--kendo-spacing-1, 0.25rem), item-font-size: null, item-line-height: null, group-item-padding-x: var(--kendo-spacing-2, 0.5rem), group-item-padding-y: var(--kendo-spacing-1, 0.25rem), group-item-font-size: null, group-item-line-height: null), lg: (font-size: var(--kendo-font-size-lg, inherit), line-height: var(--kendo-line-height-lg, normal), header-padding-x: var(--kendo-spacing-2, 0.5rem), header-padding-y: var(--kendo-spacing-1\.5, 0.375rem), header-font-size: null, header-line-height: null, item-padding-x: var(--kendo-spacing-3, 0.75rem), item-padding-y: var(--kendo-spacing-2, 0.5rem), item-font-size: null, item-line-height: null, group-item-padding-x: var(--kendo-spacing-2, 0.5rem), group-item-padding-y: var(--kendo-spacing-1\.5, 0.375rem), group-item-font-size: null, group-item-line-height: null))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the sizes of the List.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the List component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the List component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the List component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the List header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the List header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the List header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the List header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-hover-bg</code></td>
    <td><code>var(--kendo-color-base-hover, #dddddd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-hover-text</td>
    <td>String</td>
    <td><code>$kendo-hover-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-focus-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 2px rgba( black, .12 )</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-selected-text</td>
    <td>String</td>
    <td><code>$kendo-selected-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the List group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the List group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the List group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the List group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-no-data-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the 'No Data' text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-option-label-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the 'Option Label' text.</div></div>
    </td>
</tr>
</tbody>
</table>

### Listbox

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-listbox-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ListBox elements.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-button-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ListBox buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-width</td>
    <td>Number</td>
    <td><code>10em</code></td>
    <td><code>10em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-default-height</td>
    <td>Number</td>
    <td><code>200px</code></td>
    <td><code>200px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-item-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The inline padding of the ListBox item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-item-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The block padding of the ListBox item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-drop-hint-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ListBox drop hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-drop-hint-border-width</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ListBox drop hint.</div></div>
    </td>
</tr>
</tbody>
</table>

### Listview

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-listview-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around bordered ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-selected-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-selected-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 25%, transparent), rgba( $kendo-selected-bg, .25 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #f35800) 25%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 2px rgba( black, .13 )</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ListView items.</div></div>
    </td>
</tr>
</tbody>
</table>

### Loader

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-loader-segment-border-radius</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-segment-size</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the small Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-segment-size</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the medium Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-segment-size</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the large Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-padding</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-loader-sm-segment-size} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-1, 0.25rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the small Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-padding</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-loader-md-segment-size} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the medium Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-padding</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-loader-lg-segment-size} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the large Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-3-width</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-loader-sm-segment-size} * 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-1, 0.25rem) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-3-width</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-loader-md-segment-size} * 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-3-width</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-loader-lg-segment-size} * 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-3-height</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-loader-sm-spinner-3-width} * #{$equilateral-height} )</code></td>
    <td><code>calc(calc(var(--kendo-spacing-1, 0.25rem) * 4) * 0.8660254038)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the small spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-3-height</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-loader-md-spinner-3-width} * #{$equilateral-height} )</code></td>
    <td><code>calc(calc(var(--kendo-spacing-2, 0.5rem) * 4) * 0.8660254038)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the medium spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-3-height</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-loader-lg-spinner-3-width} * #{$equilateral-height} )</code></td>
    <td><code>calc(calc(var(--kendo-spacing-4, 1rem) * 4) * 0.8660254038)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the large spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-4-width</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-loader-sm-segment-size} * 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-1, 0.25rem) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-4-width</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-loader-md-segment-size} * 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-4-width</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-loader-lg-segment-size} * 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-4-height</td>
    <td>Calculation</td>
    <td><code>$kendo-loader-sm-spinner-4-width</code></td>
    <td><code>calc(var(--kendo-spacing-1, 0.25rem) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the small spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-4-height</td>
    <td>Calculation</td>
    <td><code>$kendo-loader-md-spinner-4-width</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the medium spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-4-height</td>
    <td>Calculation</td>
    <td><code>$kendo-loader-lg-spinner-4-width</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the large spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-secondary-bg</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #656565"></span><code>#656565</code></td>
    <td><span class="color-preview" style="background-color: #656565"></span><code>#656565</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Loader based on the secondary theme color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-color</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-white</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-container-padding</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(7.5)} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-7\.5, 1.875rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the small Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-container-padding</td>
    <td>String</td>
    <td><code>k-spacing(5)</code></td>
    <td><code>var(--kendo-spacing-5, 1.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the medium Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-container-padding</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(2.5)} * 2.5 )</code></td>
    <td><code>calc(var(--kendo-spacing-2\.5, 0.625rem) * 2.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the large Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-container-gap</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the small Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-container-gap</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the medium Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-container-gap</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the large Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-container-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-xs, inherit )</code></td>
    <td><code>var(--kendo-font-size-xs, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-container-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-container-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-lg, inherit )</code></td>
    <td><code>var(--kendo-font-size-lg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Loader container.</div></div>
    </td>
</tr>
</tbody>
</table>

### Loading

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-loading-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Loading indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loading-text</td>
    <td>String</td>
    <td><code>currentColor</code></td>
    <td><code>currentColor</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Loading indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loading-opacity</td>
    <td>Number</td>
    <td><code>.3</code></td>
    <td><code>0.3</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Loading indicator.</div></div>
    </td>
</tr>
</tbody>
</table>

### Menu

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-menu-popup-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-border-width</td>
    <td>Number</td>
    <td><code>$kendo-popup-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights used along with $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-bg</td>
    <td>String</td>
    <td><code>$kendo-popup-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-text</td>
    <td>String</td>
    <td><code>$kendo-popup-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-border</td>
    <td>String</td>
    <td><code>$kendo-popup-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-padding-end</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-menu-popup-item-padding-x} * 2 + #{$kendo-icon-size} )</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) * 2 + 16px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The end padding of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-sm-item-icon-margin-start</td>
    <td>String</td>
    <td><code>$kendo-menu-popup-sm-item-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The start margin of the menu item expand icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-sm-item-icon-margin-end</td>
    <td>Calculation</td>
    <td><code>calc( -1 * (#{$kendo-menu-popup-sm-item-padding-end} - #{k-math-div( $kendo-menu-popup-sm-item-padding-x, 2 )}) )</code></td>
    <td><code>calc(-1 * (calc(var(--kendo-spacing-2, 0.5rem) * 2 + 16px) - var(--kendo-spacing-2, 0.5rem)/2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The end margin of the menu item expand icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-spacing</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the menu items in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-list-item-hover-bg</code></td>
    <td><code>var(--kendo-color-base-hover, #dddddd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-text</td>
    <td>String</td>
    <td><code>$kendo-list-item-hover-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of hovered menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-expanded-bg</td>
    <td>String</td>
    <td><code>$kendo-list-item-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of expanded menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-expanded-text</td>
    <td>String</td>
    <td><code>$kendo-list-item-selected-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of expanded menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-expanded-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of expanded menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-expanded-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of expanded menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-menu-item-focus-shadow</code></td>
    <td><code>inset 0 0 3px 1px color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 25%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of focused menu item in popup.</div></div>
    </td>
</tr>
</tbody>
</table>

### Menu-button

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-menu-button-arrow-padding-x</td>
    <td>String</td>
    <td><code>$kendo-button-padding-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the button arrow in the Menu Button.</div></div>
    </td>
</tr>
</tbody>
</table>

### Notification

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-notification-group-gap</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row-gap between the elements in the Notification group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-shadow</td>
    <td>String</td>
    <td><code>$kendo-popup-shadow</code></td>
    <td><code>var(--kendo-elevation-4, 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-icon-spacing</td>
    <td>String</td>
    <td><code>$kendo-icon-spacing</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing of the Notification icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-theme-colors</td>
    <td>Map</td>
    <td><code>$kendo-theme-colors</code></td>
    <td><code>("primary": var(--kendo-color-primary, #f35800), "secondary": var(--kendo-color-secondary, #b6b6b6), "tertiary": var(--kendo-color-tertiary, #03a9f4), "info": var(--kendo-color-info, #007bc3), "success": var(--kendo-color-success, #3ea44e), "warning": var(--kendo-color-warning, #ffa41f), "error": var(--kendo-color-error, #d92800), "dark": var(--kendo-color-dark, #404040), "light": var(--kendo-color-light, #ebebeb), "inverse": var(--kendo-color-dark, #404040))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-theme</td>
    <td>Map</td>
    <td><code>notification-theme( $kendo-notification-theme-colors )</code></td>
    <td><code>("inverse": (color: var(--kendo-color-on-inverse, #ffffff), background-color: var(--kendo-color-dark, #404040), border: var(--kendo-color-dark, #404040)), "light": (color: var(--kendo-color-on-light, #000000), background-color: var(--kendo-color-light, #ebebeb), border: var(--kendo-color-light, #ebebeb)), "dark": (color: var(--kendo-color-on-dark, #ffffff), background-color: var(--kendo-color-dark, #404040), border: var(--kendo-color-dark, #404040)), "error": (color: var(--kendo-color-on-error, #ffffff), background-color: var(--kendo-color-error, #d92800), border: var(--kendo-color-error, #d92800)), "warning": (color: var(--kendo-color-on-warning, #000000), background-color: var(--kendo-color-warning, #ffa41f), border: var(--kendo-color-warning, #ffa41f)), "success": (color: var(--kendo-color-on-success, #ffffff), background-color: var(--kendo-color-success, #3ea44e), border: var(--kendo-color-success, #3ea44e)), "info": (color: var(--kendo-color-on-info, #ffffff), background-color: var(--kendo-color-info, #007bc3), border: var(--kendo-color-info, #007bc3)), "tertiary": (color: var(--kendo-color-on-tertiary, #ffffff), background-color: var(--kendo-color-tertiary, #03a9f4), border: var(--kendo-color-tertiary, #03a9f4)), "secondary": (color: var(--kendo-color-on-secondary, #000000), background-color: var(--kendo-color-secondary, #b6b6b6), border: var(--kendo-color-secondary, #b6b6b6)), "primary": (color: var(--kendo-color-on-primary, #ffffff), background-color: var(--kendo-color-primary, #f35800), border: var(--kendo-color-primary, #f35800)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The generated theme colors map for the Notification.</div></div>
    </td>
</tr>
</tbody>
</table>

### Orgchart

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-orgchart-spacer</td>
    <td>String</td>
    <td><code>k-spacing(6)</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing index of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-padding-y</td>
    <td>String</td>
    <td><code>$kendo-orgchart-spacer</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-padding-x</td>
    <td>String</td>
    <td><code>$kendo-orgchart-padding-y</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-gap</td>
    <td>String</td>
    <td><code>$kendo-orgchart-spacer</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the OrgChart node.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-group-gap</td>
    <td>String</td>
    <td><code>$kendo-orgchart-spacer</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the OrgChart group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-container-gap</td>
    <td>String</td>
    <td><code>$kendo-orgchart-spacer</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the OrgChart node container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-padding-y</td>
    <td>String</td>
    <td><code>$kendo-orgchart-spacer</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-padding-x</td>
    <td>String</td>
    <td><code>$kendo-orgchart-node-group-padding-y</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-bg</td>
    <td>String</td>
    <td><code>$kendo-base-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-text</td>
    <td>String</td>
    <td><code>$kendo-base-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-border</td>
    <td>String</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-focus-border</td>
    <td>Color</td>
    <td><code>$kendo-card-focus-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.15)"></span><code>rgba(0, 0, 0, 0.15)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-focus-shadow</td>
    <td>String</td>
    <td><code>$kendo-card-focus-shadow</code></td>
    <td><code>var(--kendo-elevation-3, 0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-title-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-xl, inherit )</code></td>
    <td><code>var(--kendo-font-size-xl, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the OrgChart node group title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-title-margin-bottom</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-orgchart-spacer} / 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-6, 1.5rem) / 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the OrgChart node group title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-title-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-sm, normal )</code></td>
    <td><code>var(--kendo-line-height-sm, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the OrgChart node group title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-subtitle-margin-bottom</td>
    <td>String</td>
    <td><code>$kendo-orgchart-spacer</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the OrgChart node group subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-subtitle-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the OrgChart node group subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-subtitle-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the OrgChart node group subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-width</td>
    <td>Number</td>
    <td><code>300px</code></td>
    <td><code>300px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-padding-y</td>
    <td>String</td>
    <td><code>$kendo-card-padding-y</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-padding-x</td>
    <td>String</td>
    <td><code>$kendo-orgchart-card-padding-y</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-border-width</td>
    <td>Number</td>
    <td><code>$kendo-card-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-shadow</td>
    <td>String</td>
    <td><code>$kendo-card-shadow</code></td>
    <td><code>var(--kendo-elevation-1, 0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-focus-shadow</td>
    <td>String</td>
    <td><code>$kendo-card-focus-shadow</code></td>
    <td><code>var(--kendo-elevation-3, 0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-title-margin-bottom</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the OrgChart Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-title-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the OrgChart Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-subtitle-margin-bottom</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the OrgChart Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-subtitle-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the OrgChart Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-border-width</td>
    <td>List</td>
    <td><code>2px 0 0</code></td>
    <td><code>2px 0 0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the OrgChart Card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-border-color</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the OrgChart Card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-vbox-margin-right</td>
    <td>String</td>
    <td><code>k-math-div( $kendo-orgchart-spacer, 2 )</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)/2</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The right margin of the OrgChart Card body title wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-vbox-min-height</td>
    <td>Number</td>
    <td><code>$kendo-card-avatar-size</code></td>
    <td><code>45px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The min height of the OrgChart Card body title wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-size</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the OrgChart connecting line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-fill</td>
    <td>String</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fill color of the OrgChart connecting line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-v-height</td>
    <td>Number</td>
    <td><code>25px</code></td>
    <td><code>25px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the OrgChart connecting line.</div></div>
    </td>
</tr>
</tbody>
</table>

### Pager

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-pager-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-md-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-lg-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-padding-y</td>
    <td>String</td>
    <td><code>$kendo-pager-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-padding-y</td>
    <td>String</td>
    <td><code>$kendo-pager-sm-padding-x</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-md-padding-y</td>
    <td>String</td>
    <td><code>$kendo-pager-md-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-lg-padding-y</td>
    <td>String</td>
    <td><code>$kendo-pager-lg-padding-x</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-item-min-width</td>
    <td>Calculation</td>
    <td><code>$kendo-button-sm-calc-size</code></td>
    <td><code>calc(var(--kendo-line-height, normal) * 1em + var(--kendo-spacing-0\.5, 0.125rem) * 2 + 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the items in the small Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-md-item-min-width</td>
    <td>Calculation</td>
    <td><code>$kendo-button-md-calc-size</code></td>
    <td><code>calc(var(--kendo-line-height, normal) * 1em + var(--kendo-spacing-1, 0.25rem) * 2 + 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the items in the medium Pagers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-lg-item-min-width</td>
    <td>Calculation</td>
    <td><code>$kendo-button-lg-calc-size</code></td>
    <td><code>calc(var(--kendo-line-height-lg, normal) * 1em + var(--kendo-spacing-2, 0.5rem) * 2 + 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the items in the large Pagers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-item-group-spacing</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin between the item groups in the small Pager..</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-md-item-group-spacing</td>
    <td>String</td>
    <td><code>k-spacing(3.5)</code></td>
    <td><code>var(--kendo-spacing-3\.5, 0.875rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin between the item groups in the medium Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-lg-item-group-spacing</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin between the item groups in the large Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-bg</td>
    <td>String</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-text</td>
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-section-spacing</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Pager sections.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing around the Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-list-item-hover-bg</code></td>
    <td><code>var(--kendo-color-base-hover, #dddddd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-hover-text</td>
    <td>String</td>
    <td><code>$kendo-list-item-hover-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-list-item-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-selected-text</td>
    <td>String</td>
    <td><code>$kendo-list-item-selected-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-focus-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the focused Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-focus-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-number-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Pager numbers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-input-width</td>
    <td>Number</td>
    <td><code>5em</code></td>
    <td><code>5em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Inputs in the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-dropdown-width</td>
    <td>Number</td>
    <td><code>5em</code></td>
    <td><code>5em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the DropDowns in the small Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-md-dropdown-width</td>
    <td>Number</td>
    <td><code>5em</code></td>
    <td><code>5em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the DropDowns in the medium Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-lg-dropdown-width</td>
    <td>Number</td>
    <td><code>5em</code></td>
    <td><code>5em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the DropDowns in the large Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-pager-sm-padding-x,
        padding-y: $kendo-pager-sm-padding-y,
        item-group-spacing: $kendo-pager-sm-item-group-spacing,
        item-min-width: $kendo-pager-sm-item-min-width,
        pager-dropdown-width: $kendo-pager-sm-dropdown-width
    ),
    md: (
        padding-x: $kendo-pager-md-padding-x,
        padding-y: $kendo-pager-md-padding-y,
        item-group-spacing: $kendo-pager-md-item-group-spacing,
        item-min-width: $kendo-pager-md-item-min-width,
        pager-dropdown-width: $kendo-pager-md-dropdown-width
    ),
    lg: (
        padding-x: $kendo-pager-lg-padding-x,
        padding-y: $kendo-pager-lg-padding-y,
        item-group-spacing: $kendo-pager-lg-item-group-spacing,
        item-min-width: $kendo-pager-lg-item-min-width,
        pager-dropdown-width: $kendo-pager-lg-dropdown-width
    )
)</code></td>
    <td><code>(sm: (padding-x: var(--kendo-spacing-1, 0.25rem), padding-y: var(--kendo-spacing-1, 0.25rem), item-group-spacing: var(--kendo-spacing-3, 0.75rem), item-min-width: calc(var(--kendo-line-height, normal) * 1em + var(--kendo-spacing-0\.5, 0.125rem) * 2 + 2px), pager-dropdown-width: 5em), md: (padding-x: var(--kendo-spacing-2, 0.5rem), padding-y: var(--kendo-spacing-2, 0.5rem), item-group-spacing: var(--kendo-spacing-3\.5, 0.875rem), item-min-width: calc(var(--kendo-line-height, normal) * 1em + var(--kendo-spacing-1, 0.25rem) * 2 + 2px), pager-dropdown-width: 5em), lg: (padding-x: var(--kendo-spacing-2\.5, 0.625rem), padding-y: var(--kendo-spacing-2\.5, 0.625rem), item-group-spacing: var(--kendo-spacing-4, 1rem), item-min-width: calc(var(--kendo-line-height-lg, normal) * 1em + var(--kendo-spacing-2, 0.5rem) * 2 + 2px), pager-dropdown-width: 5em))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Pager.</div></div>
    </td>
</tr>
</tbody>
</table>

### Panelbar

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-panelbar-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )!default</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style around the the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-level-count</td>
    <td>Number</td>
    <td><code>4</code></td>
    <td><code>4</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum nesting of the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-bg</td>
    <td>String</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-text</td>
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-border</td>
    <td>String</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-gradient</td>
    <td>Null</td>
    <td><code>$kendo-component-header-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-hover-bg</code></td>
    <td><code>var(--kendo-color-base-hover, #dddddd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-text</td>
    <td>String</td>
    <td><code>$kendo-hover-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-border</td>
    <td>String</td>
    <td><code>$kendo-hover-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the focused and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-text</td>
    <td>String</td>
    <td><code>$kendo-selected-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-border</td>
    <td>String</td>
    <td><code>$kendo-selected-border</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-hover ), k-try-shade( $kendo-panelbar-header-selected-bg ))</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected, hovered and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected, hovered and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected, hovered and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected, hovered and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base-subtle-hover ), k-try-shade( $kendo-panelbar-bg, .5 ))</code></td>
    <td><code>var(--kendo-color-base-subtle-hover, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the focused and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-text</td>
    <td>String</td>
    <td><code>$kendo-selected-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-hover ), k-try-shade( $kendo-panelbar-item-selected-bg ))</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected, hovered and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected, hovered and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected, hovered and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected, hovered and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the expanded PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the expanded PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the expanded PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the expanded PanelBar header.</div></div>
    </td>
</tr>
</tbody>
</table>

### Pdf-viewer

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-pdf-viewer-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-toolbar-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-toolbar-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-toolbar-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-toolbar-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the PDFViewer Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-canvas-bg</td>
    <td>String</td>
    <td><code>$kendo-app-bg</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-canvas-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-canvas-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-spacing</td>
    <td>String</td>
    <td><code>k-spacing(7.5)</code></td>
    <td><code>var(--kendo-spacing-7\.5, 1.875rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the PDFViewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-bg</td>
    <td>Color</td>
    <td><code>white</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-shadow</td>
    <td>String</td>
    <td><code>k-elevation(3)</code></td>
    <td><code>var(--kendo-elevation-3, 0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the PDFViewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-padding-x</td>
    <td>String</td>
    <td><code>$kendo-toolbar-md-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-spacing</td>
    <td>String</td>
    <td><code>$kendo-toolbar-md-spacing</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-border-radius</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-shadow</td>
    <td>String</td>
    <td><code>$kendo-window-shadow</code></td>
    <td><code>var(--kendo-elevation-8, 0 16px 18px rgba(0, 0, 0, 0.28), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-matches-spacing</td>
    <td>String</td>
    <td><code>$kendo-padding-sm-x</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the matches container in the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-selection-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-sm</code></td>
    <td><code>1.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the PDFViewer selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-highlight-bg</td>
    <td>String</td>
    <td><code>$kendo-body-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer highlight.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-highlight-mark-bg</td>
    <td>Color</td>
    <td><code>yellow</code></td>
    <td><span class="color-preview" style="background-color: yellow"></span><code>yellow</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer highlight mark.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-icon-text</td>
    <td>String</td>
    <td><code>$kendo-dropzone-icon-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer icon.</div></div>
    </td>
</tr>
</tbody>
</table>

### Picker

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-picker-bg</td>
    <td>String</td>
    <td><code>$kendo-button-bg</code></td>
    <td><code>var(--kendo-color-base, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-text</td>
    <td>String</td>
    <td><code>$kendo-button-text</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-border</td>
    <td>String</td>
    <td><code>$kendo-button-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-gradient</td>
    <td>Null</td>
    <td><code>$kendo-button-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-shadow</td>
    <td>Null</td>
    <td><code>$kendo-button-shadow</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-button-hover-bg</code></td>
    <td><code>var(--kendo-color-base-hover, #dddddd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-hover-text</td>
    <td>Null</td>
    <td><code>$kendo-button-hover-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-hover-border</td>
    <td>String</td>
    <td><code>$kendo-button-hover-border</code></td>
    <td><code>var(--kendo-color-border-alt, #b6b6b6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-hover-gradient</td>
    <td>Null</td>
    <td><code>$kendo-button-hover-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-hover-shadow</td>
    <td>Null</td>
    <td><code>$kendo-button-hover-shadow</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-focus-bg</td>
    <td>Null</td>
    <td><code>$kendo-button-focus-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-focus-text</td>
    <td>Null</td>
    <td><code>$kendo-button-focus-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-focus-border</td>
    <td>Null</td>
    <td><code>$kendo-button-focus-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-focus-gradient</td>
    <td>Null</td>
    <td><code>$kendo-button-focus-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-button-focus-shadow</code></td>
    <td><code>0 0 4px 0 color-mix(in srgb, var(--kendo-color-border, #cacaca) 75%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-disabled-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the disabled Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-disabled-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the disabled Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-text</td>
    <td>String</td>
    <td><code>$kendo-button-text</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 50%, transparent), rgba( $kendo-picker-outline-text, .5))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 50%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-picker-outline-text</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base-subtle ), k-contrast-color( $kendo-picker-outline-hover-bg ))</code></td>
    <td><code>var(--kendo-color-base-subtle, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-border</td>
    <td>String</td>
    <td><code>$kendo-picker-outline-hover-bg</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-picker-focus-shadow</code></td>
    <td><code>0 0 4px 0 color-mix(in srgb, var(--kendo-color-border, #cacaca) 75%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the outline focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline hovered and focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline hovered and focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline hovered and focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-text</td>
    <td>String</td>
    <td><code>$kendo-button-text</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-border</td>
    <td>String</td>
    <td><code>$kendo-button-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 4%, transparent), rgba( $kendo-button-text, .04 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 4%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( border ) 16%, transparent), rgba( $kendo-button-border, .16 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #cacaca) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-picker-focus-shadow</code></td>
    <td><code>0 0 4px 0 color-mix(in srgb, var(--kendo-color-border, #cacaca) 75%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the flat focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat hovered and focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat hovered and focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat hovered and focused Picker components.</div></div>
    </td>
</tr>
</tbody>
</table>

### Popover

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-popover-border-width</td>
    <td>Number</td>
    <td><code>$kendo-card-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-border-radius</td>
    <td>String</td>
    <td><code>$kendo-card-border-radius</code></td>
    <td><code>var(--kendo-border-radius-lg, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The radius of the border around the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-font-family</td>
    <td>String</td>
    <td><code>$kendo-card-font-family</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-font-size</td>
    <td>String</td>
    <td><code>$kendo-card-font-size</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-line-height</td>
    <td>String</td>
    <td><code>$kendo-card-line-height</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-shadow</td>
    <td>String</td>
    <td><code>$kendo-popup-shadow</code></td>
    <td><code>var(--kendo-elevation-4, 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-padding-x</td>
    <td>String</td>
    <td><code>$kendo-card-header-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-padding-y</td>
    <td>String</td>
    <td><code>$kendo-card-header-padding-y</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-border-width</td>
    <td>Number</td>
    <td><code>$kendo-card-header-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-border-style</td>
    <td>String</td>
    <td><code>$kendo-popover-border-style</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-text</td>
    <td>String</td>
    <td><code>$kendo-card-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-bg</td>
    <td>Null</td>
    <td><code>$kendo-card-header-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-border</td>
    <td>String</td>
    <td><code>$kendo-card-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-body-padding-x</td>
    <td>String</td>
    <td><code>$kendo-card-body-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Popover body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-body-padding-y</td>
    <td>String</td>
    <td><code>$kendo-card-body-padding-y</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Popover body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-actions-border-width</td>
    <td>Number</td>
    <td><code>$kendo-popover-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Popover actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-width</td>
    <td>Number</td>
    <td><code>$kendo-card-callout-width</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-height</td>
    <td>Number</td>
    <td><code>$kendo-card-callout-height</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-border-width</td>
    <td>Number</td>
    <td><code>$kendo-popover-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-border-style</td>
    <td>String</td>
    <td><code>$kendo-popover-border-style</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-bg</td>
    <td>String</td>
    <td><code>$kendo-popover-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-border</td>
    <td>String</td>
    <td><code>$kendo-popover-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Popover callout.</div></div>
    </td>
</tr>
</tbody>
</table>

### Popup

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-popup-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-content-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the popup content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-content-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the popup content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-shadow</td>
    <td>String</td>
    <td><code>k-elevation(4)</code></td>
    <td><code>var(--kendo-elevation-4, 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the popup.</div></div>
    </td>
</tr>
</tbody>
</table>

### Progressbar

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-progressbar-height</td>
    <td>Number</td>
    <td><code>22px</code></td>
    <td><code>22px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-horizontal-width</td>
    <td>Number</td>
    <td><code>100%</code></td>
    <td><code>100%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal width of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-animation-timing</td>
    <td>List</td>
    <td><code>1s linear infinite</code></td>
    <td><code>1s linear infinite</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The animation timing of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-line-height</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base ), k-try-shade( $kendo-component-bg, 1 ))</code></td>
    <td><code>var(--kendo-color-base, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The progress background color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-progressbar-value-bg ))</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The progress text color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-active ), k-try-shade( $kendo-progressbar-value-bg ))</code></td>
    <td><code>var(--kendo-color-primary-active, #cc4a00)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The progress border color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The progress background gradient of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-bg</td>
    <td>String</td>
    <td><code>$kendo-progressbar-bg</code></td>
    <td><code>var(--kendo-color-base, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the indeterminate ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-text</td>
    <td>String</td>
    <td><code>$kendo-progressbar-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the indeterminate ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-border</td>
    <td>String</td>
    <td><code>$kendo-progressbar-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the indeterminate ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the indeterminate ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-chunk-border</td>
    <td>String</td>
    <td><code>$kendo-body-bg</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the chunk ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-circular-progressbar-arc-stroke</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The arc stroke color of the circular ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-circular-progressbar-scale-stroke</td>
    <td>String</td>
    <td><code>$kendo-progressbar-bg</code></td>
    <td><code>var(--kendo-color-base, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The scale stroke background color of the circular ProgressBar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Prompt

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-prompt-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Prompt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Prompt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Prompt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-header-text</td>
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Prompt header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-header-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Prompt header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-header-border</td>
    <td>String</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Prompt header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-content-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Prompt content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-content-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Prompt content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-content-spacing</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the Prompt content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-content-text</td>
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Prompt content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-content-bg</td>
    <td>String</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Prompt content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-content-border</td>
    <td>String</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text border of the Prompt content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-expander-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the Prompt content expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-suggestion-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Prompt suggestion container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-suggestion-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Prompt suggestion container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-suggestion-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Prompt suggestion container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-suggestion-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Prompt suggestion container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-suggestion-bg</td>
    <td>String</td>
    <td><code>$kendo-body-bg</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Prompt suggestion container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-suggestion-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Prompt suggestion container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-suggestion-shadow</td>
    <td>String</td>
    <td><code>k-elevation(1)</code></td>
    <td><code>var(--kendo-elevation-1, 0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The elevation of the Prompt suggestion container.</div></div>
    </td>
</tr>
</tbody>
</table>

### Radio

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-radio-radius</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-sm-size</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of a small RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-md-size</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of a medium RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-lg-size</td>
    <td>String</td>
    <td><code>k-spacing(5)</code></td>
    <td><code>var(--kendo-spacing-5, 1.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of a large RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-sm-glyph-size</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of a small RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-md-glyph-size</td>
    <td>String</td>
    <td><code>k-spacing(3.5)</code></td>
    <td><code>var(--kendo-spacing-3\.5, 0.875rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of a medium RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-lg-glyph-size</td>
    <td>String</td>
    <td><code>k-spacing(4.5)</code></td>
    <td><code>var(--kendo-spacing-4\.5, 1.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of a large RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-sm-ripple-size</td>
    <td>Number</td>
    <td><code>300%</code></td>
    <td><code>300%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of a small RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-md-ripple-size</td>
    <td>Number</td>
    <td><code>300%</code></td>
    <td><code>300%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of a medium RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-lg-ripple-size</td>
    <td>Number</td>
    <td><code>300%</code></td>
    <td><code>300%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of a large RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        size: $kendo-radio-sm-size,
        glyph-size: $kendo-radio-sm-glyph-size,
        ripple-size: $kendo-radio-sm-ripple-size
    ),
    md: (
        size: $kendo-radio-md-size,
        glyph-size: $kendo-radio-md-glyph-size,
        ripple-size: $kendo-radio-md-ripple-size
    ),
    lg: (
        size: $kendo-radio-lg-size,
        glyph-size: $kendo-radio-lg-glyph-size,
        ripple-size: $kendo-radio-lg-ripple-size
    )
)</code></td>
    <td><code>(sm: (size: var(--kendo-spacing-3, 0.75rem), glyph-size: var(--kendo-spacing-2\.5, 0.625rem), ripple-size: 300%), md: (size: var(--kendo-spacing-4, 1rem), glyph-size: var(--kendo-spacing-3\.5, 0.875rem), ripple-size: 300%), lg: (size: var(--kendo-spacing-5, 1.25rem), glyph-size: var(--kendo-spacing-4\.5, 1.125rem), ripple-size: 300%))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the different RadioButton sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-bg</td>
    <td>String</td>
    <td><code>$kendo-checkbox-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-text</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-border</td>
    <td>String</td>
    <td><code>$kendo-checkbox-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-bg</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-hover-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-text</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-hover-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the hovered RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-border</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-hover-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-bg</td>
    <td>String</td>
    <td><code>$kendo-checkbox-checked-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-text</td>
    <td>String</td>
    <td><code>$kendo-checkbox-checked-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-border</td>
    <td>String</td>
    <td><code>$kendo-checkbox-checked-border</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-border</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-focus-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-checkbox-focus-shadow</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.06)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-checked-border</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-focus-checked-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-checked-shadow</td>
    <td>List</td>
    <td><code>$kendo-checkbox-focus-checked-shadow</code></td>
    <td><code>0 0 0 2px color-mix(in srgb, var(--kendo-color-primary, #f35800) 30%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-bg</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-disabled-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-text</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-disabled-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the disabled RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-border</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-disabled-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-bg</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-disabled-checked-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-text</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-disabled-checked-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the disabled and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-border</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-disabled-checked-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of disabled and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-bg</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-invalid-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the invalid RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-text</td>
    <td>String</td>
    <td><code>$kendo-checkbox-invalid-text</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the invalid RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-border</td>
    <td>String</td>
    <td><code>$kendo-checkbox-invalid-border</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the invalid RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-indicator-type</td>
    <td>String</td>
    <td><code>image</code></td>
    <td><code>image</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The type of the RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-glyph-font-family</td>
    <td>List</td>
    <td><code>"WebComponentsIcons", monospace</code></td>
    <td><code>"WebComponentsIcons", monospace</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the RadioButton indicator glyph.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-glyph</td>
    <td>String</td>
    <td><code>"\e308"</code></td>
    <td><code>"\e308"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph of the RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-image</td>
    <td>String</td>
    <td><code>k-escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'><circle cx='50%' cy='50%' r='4' fill='#{$kendo-radio-checked-text}'/></svg>") )</code></td>
    <td><code>url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'%3e%3ccircle cx='50%25' cy='50%25' r='4' fill='var%28--kendo-color-on-primary, %23ffffff%29'/%3e%3c/svg%3e")</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image of the checked RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-image</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image of the disabled and checked RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-label-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the RadioButton inside of a label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-spacing</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal list item margin of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal list item padding of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-item-padding-y</td>
    <td>String</td>
    <td><code>$kendo-list-md-item-padding-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical list item padding of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-ripple-bg</td>
    <td>String</td>
    <td><code>$kendo-radio-checked-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the RadioButton ripple.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-ripple-opacity</td>
    <td>Number</td>
    <td><code>.25</code></td>
    <td><code>0.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the RadioButton ripple.</div></div>
    </td>
</tr>
</tbody>
</table>

### Rating

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-rating-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-container-margin-x</td>
    <td>String</td>
    <td><code>$kendo-padding-sm-x</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Rating container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-padding-x</td>
    <td>String</td>
    <td><code>$kendo-padding-sm-x</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-padding-y</td>
    <td>String</td>
    <td><code>$kendo-padding-md-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-label-margin-x</td>
    <td>String</td>
    <td><code>$kendo-padding-md-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Rating label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-label-margin-y</td>
    <td>String</td>
    <td><code>$kendo-padding-md-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the Rating label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-label-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-lg</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Rating label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-icon-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Rating icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-icon-selected-text</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Rating icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-icon-hover-text</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Rating icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-icon-focus-text</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Rating icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-icon-focus-shadow</td>
    <td>List</td>
    <td><code>0 2px 4px rgba( black, .1 )</code></td>
    <td><code>0 2px 4px rgba(0, 0, 0, 0.1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused Rating icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-icon-focus-selected-shadow</td>
    <td>List</td>
    <td><code>0 2px 4px rgba( black, .1)</code></td>
    <td><code>0 2px 4px rgba(0, 0, 0, 0.1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused and selected Rating icon.</div></div>
    </td>
</tr>
</tbody>
</table>

### Scrollview

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-scrollview-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ScrollView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ScrollView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ScrollView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ScrollView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ScrollView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ScrollView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ScrollView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-size</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the ScrollView page button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-bg</td>
    <td>String</td>
    <td><code>$kendo-button-bg</code></td>
    <td><code>var(--kendo-color-base, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ScrollView page button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-border</td>
    <td>String</td>
    <td><code>$kendo-button-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ScrollView page button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-primary-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The primary background color of the ScrollView page button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-primary-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-try-shade( $kendo-color-primary, 2 ))</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The primary border color of the ScrollView page button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px rgba( black, .13 )</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the ScrollView page button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-offset</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the ScrollView pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-item-spacing</td>
    <td>String</td>
    <td><code>k-spacing(5)</code></td>
    <td><code>var(--kendo-spacing-5, 1.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ScrollView pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-item-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the ScrollView pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-scrollview-pagebutton-size} + #{$kendo-scrollview-pager-item-border-width * 2} + calc( #{$kendo-scrollview-pager-item-spacing} * 2 ) )</code></td>
    <td><code>calc(10px + 0px + var(--kendo-spacing-5, 1.25rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ScrollView pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-arrow-tap-highlight-color</td>
    <td>Color</td>
    <td><code>$kendo-color-rgba-transparent</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0)"></span><code>rgba(0, 0, 0, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the highlight over the tapped ScrollView navigation arrows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-color</td>
    <td>Color</td>
    <td><code>white</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the ScrollView navigation arrows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-icon-shadow</td>
    <td>List</td>
    <td><code>rgba( black, .3 ) 0 0 15px</code></td>
    <td><code>rgba(0, 0, 0, 0.3) 0 0 15px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the ScrollView navigation arrows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-bg</td>
    <td>Color</td>
    <td><code>rgba( black, 0 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0)"></span><code>rgba(0, 0, 0, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ScrollView navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-default-opacity</td>
    <td>Number</td>
    <td><code>.7</code></td>
    <td><code>0.7</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the ScrollView navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-hover-opacity</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover opacity of the ScrollView navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-hover-span-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the ScrollView navigation arrows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-light-bg</td>
    <td>Color</td>
    <td><code>rgba( white, .4 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 255, 255, 0.4)"></span><code>rgba(255, 255, 255, 0.4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ScrollView pager in light mode.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-dark-bg</td>
    <td>Color</td>
    <td><code>rgba( black, .4 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.4)"></span><code>rgba(0, 0, 0, 0.4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ScrollView pager in dark mode.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-transition-duration</td>
    <td>Number</td>
    <td><code>.3s</code></td>
    <td><code>0.3s</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The duration of the ScrollView transition.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-transition-timing-function</td>
    <td>String</td>
    <td><code>ease-in-out</code></td>
    <td><code>ease-in-out</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The timing function of the ScrollView transition.</div></div>
    </td>
</tr>
</tbody>
</table>

### Skeleton

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-skeleton-text-transform</td>
    <td>String</td>
    <td><code>scale( 1, .6 )</code></td>
    <td><code>scale(1, 0.6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transform scale of the Skeleton text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-text-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Skeleton text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-rect-border-radius</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the rectangular Skeleton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-circle-border-radius</td>
    <td>Number</td>
    <td><code>9999px</code></td>
    <td><code>9999px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the circular Skeleton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-item-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 20%, transparent), rgba( $kendo-color-inverse, .2 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 20%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Skeleton item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-wave-bg</td>
    <td>Color</td>
    <td><code>rgba( black, .04 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.04)"></span><code>rgba(0, 0, 0, 0.04)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Skeleton wave animation.</div></div>
    </td>
</tr>
</tbody>
</table>

### Slider

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-slider-size</td>
    <td>Number</td>
    <td><code>200px</code></td>
    <td><code>200px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-tick-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the Slider tick.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-alt-size</td>
    <td>Number</td>
    <td><code>30px</code></td>
    <td><code>30px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the Slider's track wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-button-offset</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the Slider Buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-button-size</td>
    <td>Number</td>
    <td><code>($kendo-slider-alt-size - 2)</code></td>
    <td><code>28px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Slider Buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-button-spacing</td>
    <td>Number</td>
    <td><code>($kendo-slider-button-size + $kendo-slider-button-offset)</code></td>
    <td><code>38px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Slider Buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-button-focus-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused Slider Buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-thickness</td>
    <td>Number</td>
    <td><code>4px</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The thickness of the Slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-size</td>
    <td>Number</td>
    <td><code>14px</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-active-scale</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition scale of the active Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-active-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the active Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-color-primary ))</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-try-shade( $kendo-color-primary, 2 ))</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-hover-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-hover ), k-try-shade( $kendo-color-primary, 1 ))</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-hover-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-hover ), k-try-shade( $kendo-slider-draghandle-hover-bg, 2 ))</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the hovered Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-pressed-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-active ), k-try-shade( $kendo-color-primary, 2 ))</code></td>
    <td><code>var(--kendo-color-primary-active, #cc4a00)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the active Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-pressed-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the active Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-pressed-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-active ), k-try-shade( $kendo-slider-draghandle-pressed-bg, 2 ))</code></td>
    <td><code>var(--kendo-color-primary-active, #cc4a00)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the active Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-pressed-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the active Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-focus-shadow</td>
    <td>List</td>
    <td><code>0 0 4px 0 if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 75%, transparent), rgba( $kendo-slider-draghandle-border, .75 ))</code></td>
    <td><code>0 0 4px 0 color-mix(in srgb, var(--kendo-color-primary, #f35800) 75%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-transition-speed</td>
    <td>Number</td>
    <td><code>.3s</code></td>
    <td><code>0.3s</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition speed of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-transition-function</td>
    <td>String</td>
    <td><code>ease-out</code></td>
    <td><code>ease-out</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition function of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-transition-speed</td>
    <td>Number</td>
    <td><code>.4s</code></td>
    <td><code>0.4s</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition speed of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-transition-function</td>
    <td>String</td>
    <td><code>cubic-bezier(.25, .8, .25, 1)</code></td>
    <td><code>cubic-bezier(0.25, 0.8, 0.25, 1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition function of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base ), k-try-shade( $kendo-component-bg, 1 ))</code></td>
    <td><code>var(--kendo-color-base, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-selection-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Slider's track selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-disabled-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
</tbody>
</table>

### Split-button

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-split-button-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-button-focus-shadow</code></td>
    <td><code>0 0 4px 0 color-mix(in srgb, var(--kendo-color-border, #cacaca) 75%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus shadow of the SplitButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-arrow-padding-x</td>
    <td>String</td>
    <td><code>$kendo-button-padding-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-sm-arrow-padding-x</td>
    <td>String</td>
    <td><code>$kendo-button-sm-padding-y</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-md-arrow-padding-x</td>
    <td>String</td>
    <td><code>$kendo-button-md-padding-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-lg-arrow-padding-x</td>
    <td>String</td>
    <td><code>$kendo-button-lg-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-arrow-padding-y</td>
    <td>String</td>
    <td><code>$kendo-button-padding-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-sm-arrow-padding-y</td>
    <td>String</td>
    <td><code>$kendo-button-sm-padding-y</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-md-arrow-padding-y</td>
    <td>String</td>
    <td><code>$kendo-button-md-padding-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-lg-arrow-padding-y</td>
    <td>String</td>
    <td><code>$kendo-button-lg-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large arrow Button.</div></div>
    </td>
</tr>
</tbody>
</table>

### Splitter

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-splitter-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-splitbar-size</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Splitter split bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-drag-handle-length</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The length of the Splitter drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-drag-handle-thickness</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The thickness of the Splitter drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-drag-icon-margin</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(3.5)} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-3\.5, 0.875rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Splitter drag handle icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-collapse-icon-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the collapse icon in the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-collapse-icon-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the collapse icon in the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-bg</td>
    <td>String</td>
    <td><code>$kendo-base-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Splitter split bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-text</td>
    <td>String</td>
    <td><code>$kendo-base-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Splitter split bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-hover-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base-subtle-hover ), k-try-shade( $kendo-splitbar-bg, .5 ))</code></td>
    <td><code>var(--kendo-color-base-subtle-hover, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the Splitter split bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-hover-text</td>
    <td>String</td>
    <td><code>$kendo-splitbar-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the Splitter split bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected background color of the Splitter split bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-selected-text</td>
    <td>String</td>
    <td><code>$kendo-selected-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected text color of the Splitter split bar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Spreadsheet

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-spreadsheet-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-header-bg</td>
    <td>String</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-header-text</td>
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Spreadsheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-header-border</td>
    <td>String</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-header-gradient</td>
    <td>Null</td>
    <td><code>$kendo-component-header-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the Spreadsheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-table-header-bg</td>
    <td>String</td>
    <td><code>$kendo-spreadsheet-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-table-header-text</td>
    <td>String</td>
    <td><code>$kendo-spreadsheet-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Spreadsheet table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-table-header-border</td>
    <td>String</td>
    <td><code>$kendo-spreadsheet-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-table-header-gradient</td>
    <td>Null</td>
    <td><code>$kendo-spreadsheet-header-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the Spreadsheet table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-action-bar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Spreadsheet action bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-action-bar-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Spreadsheet action bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-action-bar-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Spreadsheet action bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-action-bar-font-size</td>
    <td>String</td>
    <td><code>$kendo-spreadsheet-font-size</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Spreadsheet action bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-action-bar-font-family</td>
    <td>List</td>
    <td><code>Arial, Verdana, sans-serif</code></td>
    <td><code>Arial, Verdana, sans-serif</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Spreadsheet action bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-action-bar-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacings of the Spreadsheet action bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-formula-bar-gap</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the Spreadsheet formula bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-formula-input-padding-x</td>
    <td>String</td>
    <td><code>$kendo-input-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Spreadsheet formula input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-formula-input-padding-y</td>
    <td>String</td>
    <td><code>$kendo-input-padding-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Spreadsheet formula input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-formula-input-line-height</td>
    <td>String</td>
    <td><code>$kendo-input-line-height</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Spreadsheet formula input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-view-font-family</td>
    <td>List</td>
    <td><code>Arial, Verdana, sans-serif</code></td>
    <td><code>Arial, Verdana, sans-serif</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Spreadsheet view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-view-font-size</td>
    <td>String</td>
    <td><code>$kendo-spreadsheet-font-size</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Spreadsheet view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-selection-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 25%, transparent), rgba( $kendo-selected-bg, .25 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #f35800) 25%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-selection-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Spreadsheet selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-selection-border</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-selection-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 1px $kendo-selected-bg</code></td>
    <td><code>inset 0 0 0 1px var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Spreadsheet selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-single-selection-bg</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet single selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-single-selection-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Spreadsheet single selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-single-selection-border</td>
    <td>String</td>
    <td><code>$kendo-spreadsheet-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet single selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-partial-selection-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 25%, transparent), rgba( $kendo-selected-bg, .25 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #f35800) 25%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet partial selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-active-cell-bg</td>
    <td>String</td>
    <td><code>$kendo-spreadsheet-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet active cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-active-cell-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 1px $kendo-selected-bg</code></td>
    <td><code>inset 0 0 0 1px var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Spreadsheet active cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-auto-fill-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 25%, transparent), rgba( $kendo-selected-bg, .25 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #f35800) 25%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet auto fill.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-auto-fill-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Spreadsheet auto fill.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-auto-fill-border</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet auto fill.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-auto-fill-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 1px $kendo-selected-bg</code></td>
    <td><code>inset 0 0 0 1px var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Spreadsheet auto fill.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-auto-fill-punch-bg</td>
    <td>String</td>
    <td><code>rgba( $kendo-spreadsheet-bg, .5 )</code></td>
    <td><code>rgba(var(--kendo-color-surface-alt, #ffffff), 0.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet auto fill punch.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Spreadsheet cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-spreadsheet-cell-padding-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Spreadsheet cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-editor-line-height</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Spreadsheet cell editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-editor-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Spreadsheet cell editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-editor-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Spreadsheet cell editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-editor-bg</td>
    <td>String</td>
    <td><code>$kendo-spreadsheet-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet cell editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-editor-text</td>
    <td>String</td>
    <td><code>$kendo-spreadsheet-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Spreadsheet cell editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-editor-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet cell editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-resize-handle-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-comment-border</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet cell comment indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-dirty-border</td>
    <td>String</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet cell dirty indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-sheets-bar-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Spreadsheet sheets bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-sheets-bar-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Spreadsheet sheets bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-sheets-bar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Spreadsheet sheets bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-border-style</td>
    <td>String</td>
    <td><code>dashed</code></td>
    <td><code>dashed</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Spreadsheet image Dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-border-width</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Spreadsheet image Dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-text-margin-bottom</td>
    <td>String</td>
    <td><code>k-spacing(7.5)</code></td>
    <td><code>var(--kendo-spacing-7\.5, 1.875rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Spreadsheet image Dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-width</td>
    <td>Number</td>
    <td><code>355px</code></td>
    <td><code>355px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Spreadsheet image Dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-height</td>
    <td>Number</td>
    <td><code>230px</code></td>
    <td><code>230px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Spreadsheet image Dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-img</td>
    <td>String</td>
    <td><code>"image-default.png"</code></td>
    <td><code>"image-default.png"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image of the Spreadsheet image Dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the Spreadsheet image Dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Spreadsheet image Dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-overlay-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 2000px rgba( black, .5 )</code></td>
    <td><code>inset 0 0 0 2000px rgba(0, 0, 0, 0.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Spreadsheet image Dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-overlay-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Spreadsheet image Dialog preview overlay.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-overlay-hover-text</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Spreadsheet image Dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-width</td>
    <td>Number</td>
    <td><code>6px</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-height</td>
    <td>Number</td>
    <td><code>6px</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-outline-color</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-border-color</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(lg)</code></td>
    <td><code>var(--kendo-border-radius-lg, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-outline-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the Spreadsheet drawing.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-outline-width</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the Spreadsheet drawing.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-anchor-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 25%, transparent), rgba( $kendo-selected-bg, .25 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #f35800) 25%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet drawing anchor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-dropzone-spacing-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the Spreadsheet DropZone.</div></div>
    </td>
</tr>
</tbody>
</table>

### Stepper

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-stepper-margin-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-margin-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin the Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding the Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(2.5)} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-2\.5, 0.625rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding the Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-inline-content-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(5)</code></td>
    <td><code>var(--kendo-spacing-5, 1.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Stepper content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-inline-content-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Stepper content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$kendo-stepper-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$kendo-stepper-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$kendo-stepper-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-width</td>
    <td>Number</td>
    <td><code>28px</code></td>
    <td><code>28px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-height</td>
    <td>Number</td>
    <td><code>$kendo-stepper-indicator-width</code></td>
    <td><code>28px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-border-radius</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-focus-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the focused Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-focus-size</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the focused Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-focus-offset</td>
    <td>Number</td>
    <td><code>3px</code></td>
    <td><code>3px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the Stepper's focused indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-focus-calc-offset</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-stepper-indicator-focus-border-width} + #{$kendo-stepper-indicator-focus-offset} )</code></td>
    <td><code>calc(1px + 3px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated offset of the Stepper's focused indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-hover-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base-subtle-hover ), k-try-shade( $kendo-stepper-indicator-bg ))</code></td>
    <td><code>var(--kendo-color-base-subtle-hover, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-disabled-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 60%, transparent), $kendo-disabled-text)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 60%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper's done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-stepper-indicator-done-bg ))</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper's done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-border</td>
    <td>String</td>
    <td><code>$kendo-stepper-indicator-done-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper's done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-hover-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-hover ), k-try-shade( $kendo-stepper-indicator-done-bg ))</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper's hovered done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper's hovered done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper's hovered done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-disabled-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 60%, transparent), k-color-mix( $kendo-stepper-indicator-done-bg, $kendo-component-bg, 60% ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #f35800) 60%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper's disabled done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-disabled-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-stepper-indicator-done-bg ))</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper's disabled done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-disabled-border</td>
    <td>String</td>
    <td><code>$kendo-stepper-indicator-done-disabled-bg</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #f35800) 60%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper's disabled done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-bg</td>
    <td>String</td>
    <td><code>$kendo-stepper-indicator-done-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-text</td>
    <td>String</td>
    <td><code>$kendo-stepper-indicator-done-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-border</td>
    <td>String</td>
    <td><code>$kendo-stepper-indicator-done-border</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-stepper-indicator-done-hover-bg</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper's hovered current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-hover-text</td>
    <td>Null</td>
    <td><code>$kendo-stepper-indicator-done-hover-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper's hovered current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-hover-border</td>
    <td>Null</td>
    <td><code>$kendo-stepper-indicator-done-hover-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper's hovered current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-disabled-bg</td>
    <td>String</td>
    <td><code>$kendo-stepper-indicator-done-disabled-bg</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #f35800) 60%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper's disabled current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-disabled-text</td>
    <td>String</td>
    <td><code>$kendo-stepper-indicator-done-disabled-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper's disabled current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-disabled-border</td>
    <td>String</td>
    <td><code>$kendo-stepper-indicator-done-disabled-border</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #f35800) 60%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper's disabled current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-success-text</td>
    <td>String</td>
    <td><code>$kendo-color-success</code></td>
    <td><code>var(--kendo-color-success, #3ea44e)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The success text color of the Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-error-text</td>
    <td>String</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The error text color of the Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-disabled-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 60%, transparent), $kendo-disabled-text)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 60%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-optional-label-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the optional Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-optional-label-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the optional Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-optional-label-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the optional Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-optional-label-font-style</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font style of the optional Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-progressbar-size</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Stepper ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-progressbar-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-progressbar-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-progressbar-fill-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Stepper ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-progressbar-fill-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Stepper ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-content-transition-property</td>
    <td>String</td>
    <td><code>height</code></td>
    <td><code>height</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The property name of the Stepper transition.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-content-transition-duration</td>
    <td>Number</td>
    <td><code>300ms</code></td>
    <td><code>300ms</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The duration of the Stepper transition.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-content-transition-timing-function</td>
    <td>List</td>
    <td><code>cubic-bezier(.4, 0, .2, 1) 0ms</code></td>
    <td><code>cubic-bezier(0.4, 0, 0.2, 1) 0ms</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The timing function of the Stepper transition.</div></div>
    </td>
</tr>
</tbody>
</table>

### Switch

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-switch-font-family</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Switch.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-track-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Switch track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-thumb-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Switch thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-label-text-transform</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text transform of the Switch label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-label-display</td>
    <td>String</td>
    <td><code>inline</code></td>
    <td><code>inline</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The display of the Switch label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: ( font-size: 12px, track-width: 48px, track-height: 26px, thumb-width: 20px, thumb-height: 20px, thumb-offset: 3px, label-offset: 4px ),
    md: ( font-size: 12px, track-width: 56px, track-height: 30px, thumb-width: 24px, thumb-height: 24px, thumb-offset: 3px, label-offset: 6px ),
    lg: ( font-size: 12px, track-width: 64px, track-height: 34px, thumb-width: 28px, thumb-height: 28px, thumb-offset: 3px, label-offset: 8px )
)</code></td>
    <td><code>(sm: (font-size: 12px, track-width: 48px, track-height: 26px, thumb-width: 20px, thumb-height: 20px, thumb-offset: 3px, label-offset: 4px), md: (font-size: 12px, track-width: 56px, track-height: 30px, thumb-width: 24px, thumb-height: 24px, thumb-offset: 3px, label-offset: 6px), lg: (font-size: 12px, track-width: 64px, track-height: 34px, thumb-width: 28px, thumb-height: 28px, thumb-offset: 3px, label-offset: 8px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the different Switch sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-ring</td>
    <td>List</td>
    <td><code>0 0 3px 1px if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 25%, transparent), rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .25 ))</code></td>
    <td><code>0 0 3px 1px color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 25%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ring around the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base ), k-try-shade( $kendo-switch-off-track-bg ))</code></td>
    <td><code>var(--kendo-color-base, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-border</td>
    <td>String</td>
    <td><code>$kendo-switch-off-track-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-gradient</td>
    <td>Null</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( base-hover ), k-try-shade( $kendo-switch-off-thumb-bg ))</code></td>
    <td><code>var(--kendo-color-base-hover, #dddddd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-border</td>
    <td>String</td>
    <td><code>$kendo-switch-off-thumb-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track wen the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track wen the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track wen the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track wen the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track wen the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track wen the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track wen the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track wen the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-ring</td>
    <td>List</td>
    <td><code>0 0 3px 1px if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 25%, transparent), rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .25 ))</code></td>
    <td><code>0 0 3px 1px color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 25%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ring around the track wen the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-try-shade( $kendo-switch-on-thumb-bg ))</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-gradient</td>
    <td>Null</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-hover ), k-try-shade( $kendo-switch-on-thumb-bg ))</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-hover ), k-try-shade( $kendo-switch-on-thumb-hover-bg ))</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the hovered Switch is checked.</div></div>
    </td>
</tr>
</tbody>
</table>

### Table

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-table-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the table border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-vertical-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of vertical border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-horizontal-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of horizontal border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        font-size: var( --kendo-font-size, inherit ),
        line-height: var( --kendo-line-height, normal ),
        cell-padding-x: $kendo-table-sm-cell-padding-x,
        cell-padding-y: $kendo-table-sm-cell-padding-y
    ),
    md: (
        font-size: var( --kendo-font-size, inherit ),
        line-height: var( --kendo-line-height, normal ),
        cell-padding-x: $kendo-table-md-cell-padding-x,
        cell-padding-y: $kendo-table-md-cell-padding-y
    ),
    lg: (
        font-size: var( --kendo-font-size, inherit ),
        line-height: var( --kendo-line-height, normal ),
        cell-padding-x: $kendo-table-lg-cell-padding-x,
        cell-padding-y: $kendo-table-lg-cell-padding-y
    )
)</code></td>
    <td><code>(sm: (font-size: var(--kendo-font-size, inherit), line-height: var(--kendo-line-height, normal), cell-padding-x: var(--kendo-spacing-1, 0.25rem), cell-padding-y: var(--kendo-spacing-1, 0.25rem)), md: (font-size: var(--kendo-font-size, inherit), line-height: var(--kendo-line-height, normal), cell-padding-x: var(--kendo-spacing-2, 0.5rem), cell-padding-y: var(--kendo-spacing-2, 0.5rem)), lg: (font-size: var(--kendo-font-size, inherit), line-height: var(--kendo-line-height, normal), cell-padding-x: var(--kendo-spacing-2, 0.5rem), cell-padding-y: var(--kendo-spacing-2\.5, 0.625rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-bg</td>
    <td>String</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-text</td>
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-border</td>
    <td>String</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-gradient</td>
    <td>Null</td>
    <td><code>$kendo-component-header-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-bg</td>
    <td>String</td>
    <td><code>$kendo-table-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-text</td>
    <td>String</td>
    <td><code>$kendo-table-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-border</td>
    <td>String</td>
    <td><code>$kendo-table-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-bg</td>
    <td>String</td>
    <td><code>$kendo-table-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-text</td>
    <td>String</td>
    <td><code>$kendo-table-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-border</td>
    <td>String</td>
    <td><code>$kendo-table-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 5%, transparent), k-try-shade( $kendo-table-bg, .5 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 5%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 11%, transparent), k-try-shade( $kendo-table-bg, 1 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 11%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 25%, transparent), rgba( $kendo-selected-bg, .25 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #f35800) 25%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected rows in table.</div></div>
    </td>
</tr>
</tbody>
</table>

### Tabstrip

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-tabstrip-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tabstrip component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabstrip component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of border around tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-gap</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-bg</td>
    <td>String</td>
    <td><code>$kendo-base-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-text</td>
    <td>String</td>
    <td><code>$kendo-base-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-border</td>
    <td>String</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-gradient</td>
    <td>Null</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-hover-bg</code></td>
    <td><code>var(--kendo-color-base-hover, #dddddd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-hover-text</td>
    <td>String</td>
    <td><code>$kendo-hover-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-hover-border</td>
    <td>String</td>
    <td><code>$kendo-hover-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-selected-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-selected-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-selected-gradient</td>
    <td>Bool</td>
    <td><code>false</code></td>
    <td><code>false</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of border around tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-focus-border</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip focused content</div></div>
    </td>
</tr>
</tbody>
</table>

### Taskboard

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-taskboard-spacer</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing index of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )!default</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-toolbar-padding-y</td>
    <td>String</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-toolbar-padding-x</td>
    <td>String</td>
    <td><code>$kendo-taskboard-toolbar-padding-y</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-toolbar-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-toolbar-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-toolbar-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-toolbar-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the TaskBoard Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-content-padding-y</td>
    <td>String</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-content-padding-x</td>
    <td>String</td>
    <td><code>$kendo-taskboard-content-padding-y</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-container-spacing-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-taskboard-spacer} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the TaskBoard column container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-container-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard column container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-container-padding-x</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-taskboard-spacer} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard column container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-columns-container-gap</td>
    <td>String</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard columns container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-width</td>
    <td>Number</td>
    <td><code>320px</code></td>
    <td><code>320px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-bg</td>
    <td>String</td>
    <td><code>$kendo-base-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-border</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-focus-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( border-alt ), k-try-shade( $kendo-base-border, 2.5 ))</code></td>
    <td><code>var(--kendo-color-border-alt, #b6b6b6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-taskboard-spacer} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-padding-x</td>
    <td>Calculation</td>
    <td><code>$kendo-taskboard-column-header-padding-y</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-gap</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-taskboard-spacer} / 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-actions-gap</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-taskboard-spacer} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard column header actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-font-weight</td>
    <td>Number</td>
    <td><code>500</code></td>
    <td><code>500</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-text</td>
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-cards-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard column Card wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-cards-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard column Card wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-cards-gap</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-taskboard-spacer} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard column Card wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-width</td>
    <td>Number</td>
    <td><code>$kendo-taskboard-column-width</code></td>
    <td><code>320px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-taskboard-spacer} * .75 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) * 0.75)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-padding-x</td>
    <td>String</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-font-weight</td>
    <td>Number</td>
    <td><code>500</code></td>
    <td><code>500</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-text</td>
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-content-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-content-padding-x</td>
    <td>String</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-actions-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-taskboard-spacer} * .75 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) * 0.75)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-actions-padding-x</td>
    <td>String</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-padding-y</td>
    <td>String</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-padding-x</td>
    <td>String</td>
    <td><code>$kendo-taskboard-card-padding-y</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-border-width</td>
    <td>Number</td>
    <td><code>$kendo-card-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-border-radius</td>
    <td>String</td>
    <td><code>$kendo-card-border-radius</code></td>
    <td><code>var(--kendo-border-radius-lg, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-bg</td>
    <td>String</td>
    <td><code>$kendo-card-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-text</td>
    <td>String</td>
    <td><code>$kendo-card-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-border</td>
    <td>String</td>
    <td><code>$kendo-card-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-shadow</td>
    <td>String</td>
    <td><code>$kendo-card-shadow</code></td>
    <td><code>var(--kendo-elevation-1, 0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-category-border-width</td>
    <td>Number</td>
    <td><code>4px</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard Card category.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-hover-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( border-alt ), k-try-shade( $kendo-taskboard-card-border, 10% ))</code></td>
    <td><code>var(--kendo-color-border-alt, #b6b6b6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-focus-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( border-alt ), k-try-shade( $kendo-taskboard-card-border, 18% ))</code></td>
    <td><code>var(--kendo-color-border-alt, #b6b6b6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-focus-shadow</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-selected-border</td>
    <td>Color</td>
    <td><code>k-color-tint( $kendo-color-primary-lighter, 5 )</code></td>
    <td><span class="color-preview" style="background-color: #f9ab7f"></span><code>#f9ab7f</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the selected TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-selected-shadow</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the selected TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-header-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard Card header text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-header-focus-text</td>
    <td>Color</td>
    <td><code>$kendo-color-primary-darker</code></td>
    <td><span class="color-preview" style="background-color: #cc4a00"></span><code>#cc4a00</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered TaskBoard Card header text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-header-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-color-primary-darker</code></td>
    <td><span class="color-preview" style="background-color: #cc4a00"></span><code>#cc4a00</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused TaskBoard Card header text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard Card placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-border-radius</td>
    <td>String</td>
    <td><code>$kendo-taskboard-card-border-radius</code></td>
    <td><code>var(--kendo-border-radius-lg, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the TaskBoard Card placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-bg</td>
    <td>Color</td>
    <td><code>rgba( white, .2 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 255, 255, 0.2)"></span><code>rgba(255, 255, 255, 0.2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard Card placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard Card placeholder.</div></div>
    </td>
</tr>
</tbody>
</table>

### Tilelayout

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-tile-layout-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the TileLayout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-bg</td>
    <td>String</td>
    <td><code>$kendo-base-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TileLayout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TileLayout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-padding-y</td>
    <td>String</td>
    <td><code>$kendo-tile-layout-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TileLayout</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-card-border-width</td>
    <td>Number</td>
    <td><code>$kendo-card-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the TileLayout card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-card-focus-shadow</td>
    <td>String</td>
    <td><code>$kendo-card-focus-shadow</code></td>
    <td><code>var(--kendo-elevation-3, 0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus box shadow of the TileLayout card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the TileLayout hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(lg)</code></td>
    <td><code>var(--kendo-border-radius-lg, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The radius of the border around the TileLayout hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the TileLayout hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-bg</td>
    <td>Color</td>
    <td><code>rgba( white, .2 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 255, 255, 0.2)"></span><code>rgba(255, 255, 255, 0.2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TileLayout hint.</div></div>
    </td>
</tr>
</tbody>
</table>

### Timeline

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-timeline-spacing-x</td>
    <td>String</td>
    <td><code>k-spacing(10)</code></td>
    <td><code>var(--kendo-spacing-10, 2.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-spacing-y</td>
    <td>String</td>
    <td><code>k-spacing(10)</code></td>
    <td><code>var(--kendo-spacing-10, 2.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-items-padding</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding between the Timeline's track items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-spacing-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing of the mobile Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-spacing-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the mobile Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-width</td>
    <td>Number</td>
    <td><code>30px</code></td>
    <td><code>30px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline track arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-height</td>
    <td>Number</td>
    <td><code>30px</code></td>
    <td><code>30px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline track arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-disabled-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( base ) 60%, transparent), k-true-mix( $kendo-button-bg, $kendo-body-bg, 65% ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-base, #ebebeb) 60%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled Timeline track arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-disabled-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-base ) 60%, transparent), k-true-mix( $kendo-button-text, $kendo-body-bg, 65% ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-base, #272727) 60%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Timeline track arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-disabled-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( border ) 15%, transparent), k-true-mix( #000000, $kendo-body-bg, 4.8% ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #cacaca) 15%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled Timeline track arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-size</td>
    <td>Number</td>
    <td><code>6px</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-wrap-padding-bottom</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-timeline-track-size, 2 )</code></td>
    <td><code>3px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom padding of the Timeline's track wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-margin-bottom</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-bottom-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{k-math-div( $kendo-timeline-track-arrow-height, 2 )} + #{$kendo-timeline-track-wrap-padding-bottom})</code></td>
    <td><code>calc(15px + 3px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom offset of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-start-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-track-arrow-width} - 2 * #{$kendo-timeline-track-border-width})</code></td>
    <td><code>calc(30px - 2 * 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The left offset of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-end-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-track-arrow-width} - 2 * #{$kendo-timeline-track-border-width})</code></td>
    <td><code>calc(30px - 2 * 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The right offset of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-bg</td>
    <td>String</td>
    <td><code>$kendo-button-bg</code></td>
    <td><code>var(--kendo-color-base, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-border-color</td>
    <td>String</td>
    <td><code>$kendo-button-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-item-focus-shadow</td>
    <td>String</td>
    <td><code>k-elevation(2)</code></td>
    <td><code>var(--kendo-elevation-2, 0 4px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Timeline's focused track items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-event-offset</td>
    <td>Number</td>
    <td><code>36px</code></td>
    <td><code>36px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the Timeline track event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-padding-x</td>
    <td>String</td>
    <td><code>$kendo-button-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-padding-y</td>
    <td>String</td>
    <td><code>$kendo-button-padding-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-line-height</td>
    <td>String</td>
    <td><code>$kendo-button-line-height</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-min-width</td>
    <td>Number</td>
    <td><code>80px</code></td>
    <td><code>80px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-max-width</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-flag-min-width} + 2 * #{$kendo-timeline-spacing-x})</code></td>
    <td><code>calc(80px + 2 * var(--kendo-spacing-10, 2.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-flag-max-width</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-flag-min-width} + 2 * #{$kendo-timeline-mobile-spacing-x})</code></td>
    <td><code>calc(80px + 2 * var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the mobile Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-horizontal-flag-min-width</td>
    <td>Number</td>
    <td><code>60px</code></td>
    <td><code>60px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the horizontal Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-timeline-flag-bg ))</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-callout-width</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline's flag callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-callout-height</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline's flag callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-offset-bottom</td>
    <td>Number</td>
    <td><code>4px</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom offset of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-margin-bottom-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-track-size} + 2 * #{$kendo-timeline-track-border-width} + #{$kendo-timeline-flag-offset-bottom} + #{$kendo-timeline-flag-callout-height})</code></td>
    <td><code>calc(6px + 2 * 1px + 4px + 10px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-date-width</td>
    <td>Number</td>
    <td><code>50px</code></td>
    <td><code>50px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-date-margin-bottom</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-vertical-padding-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-spacing-x} + (#{$kendo-timeline-flag-min-width} - #{$kendo-timeline-track-size}) / 2)</code></td>
    <td><code>calc(var(--kendo-spacing-10, 2.5rem) + (80px - 6px) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-vertical-padding-with-dates-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-vertical-padding-calc} + #{$kendo-timeline-date-width})</code></td>
    <td><code>calc(calc(var(--kendo-spacing-10, 2.5rem) + (80px - 6px) / 2) + 50px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-vertical-padding-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-mobile-spacing-x} + (#{$kendo-timeline-flag-min-width} - #{$kendo-timeline-track-size}) / 2)</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) + (80px - 6px) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical mobile Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-vertical-padding-with-dates-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-mobile-vertical-padding-calc} + #{$kendo-timeline-date-width})</code></td>
    <td><code>calc(calc(var(--kendo-spacing-4, 1rem) + (80px - 6px) / 2) + 50px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical mobile Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-circle-width</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline circle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-circle-height</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline circle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-circle-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline circle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-collapse-arrow-padding-x</td>
    <td>String</td>
    <td><code>$kendo-padding-md-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Timeline collapse arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-event-width</td>
    <td>Number</td>
    <td><code>400px</code></td>
    <td><code>400px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-event-height</td>
    <td>Number</td>
    <td><code>600px</code></td>
    <td><code>600px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-event-min-height-calc</td>
    <td>Calculation</td>
    <td><code>calc(2 * (#{$kendo-timeline-track-event-offset} - #{$kendo-card-border-width}))</code></td>
    <td><code>calc(2 * (36px - 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum height of the Timeline event.</div></div>
    </td>
</tr>
</tbody>
</table>

### Toolbar

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-toolbar-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sm-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-md-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-lg-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sm-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-md-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-lg-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Toolbar tools.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sm-spacing</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the tools of the small Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-md-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the tools of the medium Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-lg-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the tools of the large Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-bg</td>
    <td>String</td>
    <td><code>$kendo-button-bg</code></td>
    <td><code>var(--kendo-color-base, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-text</td>
    <td>String</td>
    <td><code>$kendo-button-text</code></td>
    <td><code>var(--kendo-color-on-base, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border</td>
    <td>String</td>
    <td><code>$kendo-button-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-separator-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the separator border of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-input-width</td>
    <td>Number</td>
    <td><code>10em</code></td>
    <td><code>10em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the input in the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-item-shadow</td>
    <td>List</td>
    <td><code>$kendo-button-focus-shadow</code></td>
    <td><code>0 0 4px 0 color-mix(in srgb, var(--kendo-color-border, #cacaca) 75%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Toolbar item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-flat-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the flat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-toolbar-sm-padding-x,
        padding-y: $kendo-toolbar-sm-padding-y,
        spacing: $kendo-toolbar-sm-spacing
    ),
    md: (
        padding-x: $kendo-toolbar-md-padding-x,
        padding-y: $kendo-toolbar-md-padding-y,
        spacing: $kendo-toolbar-md-spacing
    ),
    lg: (
        padding-x: $kendo-toolbar-lg-padding-x,
        padding-y: $kendo-toolbar-lg-padding-y,
        spacing: $kendo-toolbar-lg-spacing
    )
)</code></td>
    <td><code>(sm: (padding-x: var(--kendo-spacing-1, 0.25rem), padding-y: var(--kendo-spacing-1, 0.25rem), spacing: var(--kendo-spacing-1\.5, 0.375rem)), md: (padding-x: var(--kendo-spacing-2, 0.5rem), padding-y: var(--kendo-spacing-2, 0.5rem), spacing: var(--kendo-spacing-2, 0.5rem)), lg: (padding-x: var(--kendo-spacing-2\.5, 0.625rem), padding-y: var(--kendo-spacing-2\.5, 0.625rem), spacing: var(--kendo-spacing-2\.5, 0.625rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Toolbar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Tooltip

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-tooltip-padding-y</td>
    <td>String</td>
    <td><code>$kendo-padding-md-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-padding-x</td>
    <td>String</td>
    <td><code>$kendo-padding-md-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-line-height</td>
    <td>Number</td>
    <td><code>1.25</code></td>
    <td><code>1.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-title-font-size</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-tooltip-font-size} * 1.25 )</code></td>
    <td><code>calc(var(--kendo-font-size, inherit) * 1.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Tooltip title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-title-line-height</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Tooltip title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-callout-size</td>
    <td>Number</td>
    <td><code>6px</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Tooltip callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-app-surface ), rgba( k-contrast-color( $kendo-body-bg ), .75 ))</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default background of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( app-surface ), k-contrast-color( $kendo-tooltip-bg ))</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default text color of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-border</td>
    <td>String</td>
    <td><code>$kendo-tooltip-bg</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default border color of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-shadow</td>
    <td>String</td>
    <td><code>k-elevation(2)</code></td>
    <td><code>var(--kendo-elevation-2, 0 4px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box-shadow of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-theme-colors</td>
    <td>Map</td>
    <td><code>$kendo-theme-colors</code></td>
    <td><code>("primary": var(--kendo-color-primary, #f35800), "secondary": var(--kendo-color-secondary, #b6b6b6), "tertiary": var(--kendo-color-tertiary, #03a9f4), "info": var(--kendo-color-info, #007bc3), "success": var(--kendo-color-success, #3ea44e), "warning": var(--kendo-color-warning, #ffa41f), "error": var(--kendo-color-error, #d92800), "dark": var(--kendo-color-dark, #404040), "light": var(--kendo-color-light, #ebebeb), "inverse": var(--kendo-color-dark, #404040))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-theme</td>
    <td>Map</td>
    <td><code>tooltip-theme( $kendo-tooltip-theme-colors )</code></td>
    <td><code>("inverse": (color: var(--kendo-color-on-inverse, #ffffff), background-color: var(--kendo-color-dark, #404040), border: var(--kendo-color-dark, #404040)), "light": (color: var(--kendo-color-on-light, #000000), background-color: var(--kendo-color-light, #ebebeb), border: var(--kendo-color-light, #ebebeb)), "dark": (color: var(--kendo-color-on-dark, #ffffff), background-color: var(--kendo-color-dark, #404040), border: var(--kendo-color-dark, #404040)), "error": (color: var(--kendo-color-on-error, #ffffff), background-color: var(--kendo-color-error, #d92800), border: var(--kendo-color-error, #d92800)), "warning": (color: var(--kendo-color-on-warning, #000000), background-color: var(--kendo-color-warning, #ffa41f), border: var(--kendo-color-warning, #ffa41f)), "success": (color: var(--kendo-color-on-success, #ffffff), background-color: var(--kendo-color-success, #3ea44e), border: var(--kendo-color-success, #3ea44e)), "info": (color: var(--kendo-color-on-info, #ffffff), background-color: var(--kendo-color-info, #007bc3), border: var(--kendo-color-info, #007bc3)), "tertiary": (color: var(--kendo-color-on-tertiary, #ffffff), background-color: var(--kendo-color-tertiary, #03a9f4), border: var(--kendo-color-tertiary, #03a9f4)), "secondary": (color: var(--kendo-color-on-secondary, #000000), background-color: var(--kendo-color-secondary, #b6b6b6), border: var(--kendo-color-secondary, #b6b6b6)), "primary": (color: var(--kendo-color-on-primary, #ffffff), background-color: var(--kendo-color-primary, #f35800), border: var(--kendo-color-primary, #f35800)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The generated theme colors map for the Tooltip.</div></div>
    </td>
</tr>
</tbody>
</table>

### Treelist

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-treelist-footer-row-bg</td>
    <td>String</td>
    <td><code>$kendo-grid-hover-bg</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #272727) 11%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TreeList footer row.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treelist-footer-row-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TreeList footer row.</div></div>
    </td>
</tr>
</tbody>
</table>

### Treeview

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-treeview-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sm-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-md-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-lg-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-lg, inherit )</code></td>
    <td><code>var(--kendo-font-size-lg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sm-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the small TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-md-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the medium TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-lg-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-lg, normal )</code></td>
    <td><code>var(--kendo-line-height-lg, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the large TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-indent</td>
    <td>Number</td>
    <td><code>24px</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The indentation of child groups in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sm-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-md-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-lg-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sm-item-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-md-item-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-lg-item-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TreeView items</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sm-checkbox-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the checkbox in the small TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-md-checkbox-padding-x</td>
    <td>String</td>
    <td><code>$kendo-treeview-sm-checkbox-padding-x</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the checkbox in the medium TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-lg-checkbox-padding-x</td>
    <td>String</td>
    <td><code>$kendo-treeview-sm-checkbox-padding-x</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the checkbox in the large TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sm-checkbox-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the checkbox in the small TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-md-checkbox-padding-y</td>
    <td>String</td>
    <td><code>$kendo-treeview-sm-checkbox-padding-y</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the checkbox in the medium TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-lg-checkbox-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the checkbox in the large TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        font-size: $kendo-treeview-sm-font-size,
        line-height: $kendo-treeview-sm-line-height,
        item-padding-x: $kendo-treeview-sm-item-padding-x,
        item-padding-y: $kendo-treeview-sm-item-padding-y,
        checkbox-padding-x: $kendo-treeview-sm-checkbox-padding-x,
        checkbox-padding-y: $kendo-treeview-sm-checkbox-padding-y
    ),
    md: (
        font-size: $kendo-treeview-md-font-size,
        line-height: $kendo-treeview-md-line-height,
        item-padding-x: $kendo-treeview-md-item-padding-x,
        item-padding-y: $kendo-treeview-md-item-padding-y,
        checkbox-padding-x: $kendo-treeview-md-checkbox-padding-x,
        checkbox-padding-y: $kendo-treeview-md-checkbox-padding-y
    ),
    lg: (
        font-size: $kendo-treeview-lg-font-size,
        line-height: $kendo-treeview-lg-line-height,
        item-padding-x: $kendo-treeview-lg-item-padding-x,
        item-padding-y: $kendo-treeview-lg-item-padding-y,
        checkbox-padding-x: $kendo-treeview-lg-checkbox-padding-x,
        checkbox-padding-y: $kendo-treeview-lg-checkbox-padding-y
    )
)</code></td>
    <td><code>(sm: (font-size: var(--kendo-font-size, inherit), line-height: var(--kendo-line-height, normal), item-padding-x: var(--kendo-spacing-2, 0.5rem), item-padding-y: var(--kendo-spacing-0\.5, 0.125rem), checkbox-padding-x: var(--kendo-spacing-1, 0.25rem), checkbox-padding-y: var(--kendo-spacing-0\.5, 0.125rem)), md: (font-size: var(--kendo-font-size, inherit), line-height: var(--kendo-line-height, normal), item-padding-x: var(--kendo-spacing-2, 0.5rem), item-padding-y: var(--kendo-spacing-1, 0.25rem), checkbox-padding-x: var(--kendo-spacing-1, 0.25rem), checkbox-padding-y: var(--kendo-spacing-0\.5, 0.125rem)), lg: (font-size: var(--kendo-font-size-lg, inherit), line-height: var(--kendo-line-height-lg, normal), item-padding-x: var(--kendo-spacing-3, 0.75rem), item-padding-y: var(--kendo-spacing-2, 0.5rem), checkbox-padding-x: var(--kendo-spacing-1, 0.25rem), checkbox-padding-y: null))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-hover-bg</code></td>
    <td><code>var(--kendo-color-base-hover, #dddddd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of hovered TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-text</td>
    <td>String</td>
    <td><code>$kendo-hover-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-border</td>
    <td>String</td>
    <td><code>$kendo-hover-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-gradient</td>
    <td>Null</td>
    <td><code>$kendo-hover-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of hovered TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-text</td>
    <td>String</td>
    <td><code>$kendo-selected-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-border</td>
    <td>String</td>
    <td><code>$kendo-selected-border</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-gradient</td>
    <td>Null</td>
    <td><code>$kendo-selected-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of selected TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of focused TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Load More button in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-text</td>
    <td>String</td>
    <td><code>$kendo-link-text</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Load More button in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Load More button in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Load More button in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-text</td>
    <td>String</td>
    <td><code>$kendo-link-hover-text</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Load More button in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Load More button in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Load More button in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-text</td>
    <td>String</td>
    <td><code>$kendo-link-hover-text</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Load More button in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Load More button in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-treeview-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Load More button in the TreeView.</div></div>
    </td>
</tr>
</tbody>
</table>

### Upload

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-upload-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-max-height</td>
    <td>Number</td>
    <td><code>300px</code></td>
    <td><code>300px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum height of the list with uploaded items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-text</td>
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-bg</td>
    <td>String</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-border</td>
    <td>String</td>
    <td><code>$kendo-upload-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-hover-bg</code></td>
    <td><code>var(--kendo-color-base-hover, #dddddd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-status-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Upload status message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-status-text-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Upload status message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of an uploaded item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-item-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of an uploaded item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-multiple-items-spacing</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing between uploaded batch items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-validation-font-size</td>
    <td>Number</td>
    <td><code>11px</code></td>
    <td><code>11px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Upload validation message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-icon-spacing</td>
    <td>String</td>
    <td><code>$kendo-icon-spacing</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing of the Upload status icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-icon-color</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the uploaded items icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-progress-thickness</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The thickness of the Upload progress bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-progress-bg</td>
    <td>String</td>
    <td><code>$kendo-color-info</code></td>
    <td><code>var(--kendo-color-info, #007bc3)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Upload progress bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-success-text</td>
    <td>String</td>
    <td><code>$kendo-color-success</code></td>
    <td><code>var(--kendo-color-success, #3ea44e)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The success text color of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-success-bg</td>
    <td>String</td>
    <td><code>$kendo-color-success</code></td>
    <td><code>var(--kendo-color-success, #3ea44e)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The success background color of the Upload progress bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-error-text</td>
    <td>String</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The error text color of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-error-bg</td>
    <td>String</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The error background color of the Upload progress bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-focus-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px rgba( black, .13 )</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused Upload button, actions and uploaded items.</div></div>
    </td>
</tr>
</tbody>
</table>

### Window

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-window-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-border-radius</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-border-width</td>
    <td>List</td>
    <td><code>0 0 1px</code></td>
    <td><code>0 0 1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-title-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-lg, inherit )</code></td>
    <td><code>var(--kendo-font-size-lg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the title of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-title-line-height</td>
    <td>Number</td>
    <td><code>1.25</code></td>
    <td><code>1.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the title of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-actions-gap</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the buttons in the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-action-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the buttons in the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-action-hover-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the hovered buttons in the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-inner-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the content of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-inner-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the content of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-buttongroup-padding-x</td>
    <td>String</td>
    <td><code>$kendo-actions-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Window action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-buttongroup-padding-y</td>
    <td>String</td>
    <td><code>$kendo-actions-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Window action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-buttongroup-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the top border of the Window action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-shadow</td>
    <td>String</td>
    <td><code>k-elevation(8)</code></td>
    <td><code>var(--kendo-elevation-8, 0 16px 18px rgba(0, 0, 0, 0.28), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-focus-shadow</td>
    <td>String</td>
    <td><code>k-elevation(9)</code></td>
    <td><code>var(--kendo-elevation-9, 0 32px 34px rgba(0, 0, 0, 0.32), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-bg</td>
    <td>String</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-text</td>
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-border</td>
    <td>String</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-gradient</td>
    <td>Null</td>
    <td><code>$kendo-component-header-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: 300px,
    md: 800px,
    lg: 1200px
)</code></td>
    <td><code>(sm: 300px, md: 800px, lg: 1200px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map of the width for the different Window sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "primary": k-map-get($kendo-theme-colors, "primary"),
    "light": k-map-get($kendo-theme-colors, "light"),
    "dark": k-map-get($kendo-theme-colors, "dark")
)</code></td>
    <td><code>("primary": var(--kendo-color-primary, #f35800), "light": var(--kendo-color-light, #ebebeb), "dark": var(--kendo-color-dark, #404040))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Window.</div></div>
    </td>
</tr>
</tbody>
</table>

### Wizard

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody><tr>
    <td>$kendo-wizard-padding-x</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-padding-md-x} * 2.5 )</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) * 2.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-padding-y</td>
    <td>Calculation</td>
    <td><code>$kendo-wizard-padding-x</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) * 2.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-content-padding-x</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-padding-md-x} * 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Wizard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-content-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-padding-md-y} * 8 )</code></td>
    <td><code>calc(var(--kendo-spacing-1, 0.25rem) * 8)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Wizard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-buttons-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Wizard's Button container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-step-focus-border</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #656565"></span><code>#656565</code></td>
    <td><span class="color-preview" style="background-color: #656565"></span><code>#656565</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline of the focused Wizard step.</div></div>
    </td>
</tr>
</tbody>
</table>








## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
