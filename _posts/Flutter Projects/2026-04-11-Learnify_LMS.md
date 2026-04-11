---
title: Learnify LMS
description: Flutter LMS (Android/iOS) with feature-first Clean Architecture, BLoC, Dio + caching, Hive, GetIt, dartz, Firebase, and in-app purchases.
classes: wide
ribbon: MidnightBlue
categories:
  - Flutter_Projects
toc: true
---

# Learnify LMS

**Flutter** (Dart ≥ 3) **LMS** for **Android** and **iOS**; default **RTL** (`ar`) and **`en`**.

**Android:** [Google Play — Learnify](https://play.google.com/store/apps/details?id=com.learnify_lms) (`com.learnify_lms`).

## Architecture

Feature-first **Domain** (entities, repository contracts, use cases) / **Data** (models, remote & local sources, repository impl) / **Presentation** (BLoC, pages, widgets). **Repository pattern**, **use cases**, **GetIt** for data sources, repositories, use cases, and BLoCs.

## State

**flutter_bloc** + **equatable**. **Event bus** and **RealtimeUpdateService** where needed.

## Networking

**Dio** with interceptors (**pretty_dio_logger**, **dio_cache_interceptor**). Central **DioClient** with DI. **REST** backend.

## Storage

**Hive** / **hive_flutter** (+ **hive_generator** / **build_runner**). **flutter_secure_storage** for secrets. **shared_preferences** for light settings.

## Errors

**dartz** (`Either`, etc.) and domain **Failures** in **core**.

## Auth

Email/password, verification, **OTP**, password reset. **google_sign_in**, **sign_in_with_apple** (+ **crypto** / nonce as needed).

## Monetization

**in_app_purchase** (**in_app_purchase_android**, **in_app_purchase_storekit**); receipt verification as a domain use case.

## Media & UI

**video_player**, **better_player_plus**; **webview_flutter**. **cached_network_image**, **flutter_svg**, **visibility_detector**, **wakelock_plus**. **intl**, **flutter_localizations**.

## Firebase

**firebase_core**, **firebase_messaging**, **firebase_in_app_messaging**, **firebase_analytics**; early init in `main`.

## Tooling

**flutter_lints**, **bloc_test**, **mocktail**, **flutter_launcher_icons**, **build_runner**, **hive_generator**.
