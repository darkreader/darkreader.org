# How to restore a missing Site List after v4.9.69 update

There was an error in version **4.9.69**: users who had a very big **Site List** may have it disappeared 🤷.
Only Google Chrome users could have this update.
Here are some instructions for restoring a part of the Site List.

### Storage

There are 2 types of extension's storage:
- **`sync`** synchronizes settings across devices (default).
- **`local`** stores the settings locally.

When users hit a **size limit**, they are switched from `sync` to `local` storage.
Due to **The Bug** the Site List was removed from the `local` storage.
But some websites could be still saved in the `sync` storage.

## Restoring the Site List

### Opening the extensions' background Console

1. Go to [chrome://extensions](chrome://extensions) page.
2. Enable **Developer mode**.
3. Find **Dark Reader** and click [background/index.html](background/index.html).
4. Open **Console** tab.

<img src="/images/tips/bug-4-9-69-page.png" alt="Chrome Extensions page" style="width: 24rem;" loading="lazy" />

### Viewing the stored Site List

<style>
    pre {
        background-color: #090e10;
        color: #53b26f;
    }
</style>

First let's see if the settings synchronization is turned off.
Put the cursor after **`>`** mark, copy/paste the following code block and press **Enter** to run it.
If you see **`syncSettings: false`** it means it is turned off:
```
chrome.storage.local.get(
    {
        syncSettings: true,
    },
    settings => {
        console.log(settings);
    },
);
```

Lets see if there are any sites in the `sync` storage:
```
chrome.storage.sync.get(
    {
        enabledFor: [],
        disabledFor: [],
    },
    sites => {
        console.log(sites);
    },
);
```

This should display the sites from the `local` storage:
```
chrome.storage.local.get(
    {
        enabledFor: [],
        disabledFor: [],
    },
    sites => {
        console.log(sites);
    },
);
```

### Moving sites from Sync to Local storage

The following code snippet copies the sites from the Sync storage into the Local storage and reloads the extension:
```
chrome.storage.sync.get(
    {
        enabledFor: [],
        disabledFor: [],
    },
    sites => {
        chrome.storage.sync.set(
            sites,
            () => {
                chrome.runtime.reload();
            },
        );
    },
);
```

### Enabling settings synchronization

The following code snippet enables the settings synchronization:
```
chrome.storage.local.set(
    {
        syncSettings: true,
    },
    () => {
        chrome.runtime.reload();
    },
);
```

## Reducing the Site List

Please consider the following options to avoid the Site List becoming large:
1. **Detect Dark Theme** option.

<img src="/images/tips/bug-4-9-69-detect.png" alt="Detect Dark Theme" style="width: 16rem;" loading="lazy" />

2. **Invert listed only** mode.

<img src="/images/help/darkreader-site-list.png" alt="Dark Reader Site List" style="width: 16rem;" loading="lazy" />

We are sorry for this error. Thanks for using Dark Reader!
