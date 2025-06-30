import type { Movie, ContentRow } from '../types';

// Featured movie for hero section
export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'The Digital Revolution',
  description: 'A groundbreaking documentary exploring the transformation of our digital world and the technologies that shape our future.',
  genre: ['Documentary', 'Technology', 'Future'],
  year: 2024,
  rating: 'PG-13',
  duration: '2h 15m',
  thumbnail: './src/assets/1.jpg',
  backdrop: './src/assets/1.jpg',
  videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  isFeatured: true,
  likes: 1250
};

// All movies data
export const movies: Movie[] = [
  {
    id: 'movie-1',
    title: 'AI Automation Dashboard',
    description: 'Explore the future of artificial intelligence and automation through this comprehensive visual journey.',
    genre: ['Technology', 'Documentary'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: './src/assets/futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png',
    backdrop: './src/assets/futuristic_automation_dashboard_in_dark_mode_with_glowing_orange_and_amber_node_connections_grouped_xt3w9jrdh4xby65yuki2_41.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 892
  },
  {
    id: 'movie-2',
    title: 'Digital Workspace Revolution',
    description: 'A deep dive into modern digital workspaces and collaborative technologies.',
    genre: ['Technology', 'Business'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: './src/assets/futuristic_workspace_with_a_glowing_green_digital_whiteboard_displaying_multiple_connected_flowchar_bc7d5ilnh4u7xjkdzjih_2.png',
    backdrop: './src/assets/futuristic_workspace_with_a_glowing_green_digital_whiteboard_displaying_multiple_connected_flowchar_bc7d5ilnh4u7xjkdzjih_2.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 756
  },
  {
    id: 'movie-3',
    title: 'Mobile Innovation Hub',
    description: 'Discover the latest innovations in mobile technology and user experience design.',
    genre: ['Technology', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '1h 20m',
    thumbnail: './src/assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png',
    backdrop: './src/assets/a_high-resolution_image_of_a_modern_smartphone_held_in_a_users_hand_displaying_an_in-app_dashboard__gm9cby3s5d29uti3ozxh_1.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 634
  },
  {
    id: 'movie-4',
    title: 'Email Automation Future',
    description: 'The evolution of email automation and AI-powered communication systems.',
    genre: ['Technology', 'Communication'],
    year: 2024,
    rating: 'PG',
    duration: '1h 35m',
    thumbnail: './src/assets/a_sleek_futuristic_email_inbox_interface_glowing_with_blue_neon_highlights_with_ai_automation_lines_xdspk5ut06lpmu44wane_9.png',
    backdrop: './src/assets/a_sleek_futuristic_email_inbox_interface_glowing_with_blue_neon_highlights_with_ai_automation_lines_xdspk5ut06lpmu44wane_9.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    likes: 523
  },
  {
    id: 'movie-5',
    title: 'Hack It: Mobile Security',
    description: 'An in-depth look at mobile security and ethical hacking practices.',
    genre: ['Technology', 'Security'],
    year: 2024,
    rating: 'PG-13',
    duration: '2h 10m',
    thumbnail: './src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
    backdrop: './src/assets/a_sleek_futuristic_smartphone_in_the_center_of_the_image_displaying_the_words_hack_it_on_its_screen_yl6ht45amhprl8dam86s_2.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    likes: 1089
  },
  {
    id: 'movie-6',
    title: 'RevenueCat UI Design',
    description: 'Modern UI/UX design principles for subscription-based applications.',
    genre: ['Design', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 25m',
    thumbnail: './src/assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png',
    backdrop: './src/assets/a_sleek_futuristic_ui_dashboard_labeled_revenuecatui_displayed_on_a_glowing_laptop_screen_the_inter_p4scvgqk8i0ochailout_0.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    likes: 445
  },
  {
    id: 'movie-7',
    title: 'AI Avatar Training',
    description: 'The future of AI-powered training and personalized learning experiences.',
    genre: ['AI', 'Education'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: './src/assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png',
    backdrop: './src/assets/ai-generated_avatar_delivering_a_training_video_to_diverse_new_employees_screens_showing_unique_nam_u8p94293u60c75ptufoo_6.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 678
  },
  {
    id: 'movie-8',
    title: 'Funnel Builder Pro',
    description: 'Advanced marketing funnel creation and optimization strategies.',
    genre: ['Marketing', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: './src/assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png',
    backdrop: './src/assets/digital_dashboard_with_drag-and-drop_funnel_builder_interface_tavus_video_module_at_the_top_branchi_jfsdg8hx9u00gjcifcyt_3.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 567
  },
  {
    id: 'movie-9',
    title: 'Trending Dashboard Analytics',
    description: 'Deep insights into dashboard analytics and trending data visualization.',
    genre: ['Analytics', 'Data'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: './src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    backdrop: './src/assets/__on_a_deep_navy_background_show_a_sleek_dashboard_ui_highlighting_trending_prompt_chains-_a_gold-o_xf1a9fjmi103nu4aocih_0.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 789
  },
  {
    id: 'movie-10',
    title: 'Prompt Chain Builder',
    description: 'Advanced AI prompt engineering and chain building techniques.',
    genre: ['AI', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '2h 5m',
    thumbnail: './src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
    backdrop: './src/assets/on_a_deep_navy_background_depict_a_sleek_ui_canvas_where_a_semi-transparent_dark-blue_text-prompt_b_fw2wn6dx5w2o9wzxs46w_0.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    likes: 923
  },
  {
    id: 'movie-11',
    title: 'Revenue Analytics Hub',
    description: 'Comprehensive revenue tracking and analytics dashboard systems.',
    genre: ['Business', 'Analytics'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: './src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    backdrop: './src/assets/on_a_deep_navy_background_display_a_dynamic_ui_panel_showcasing_three_key_icons-_a_gold_coin_stack__bmi0q44gd974mwrgq0ce_0.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    likes: 612
  },
  {
    id: 'movie-12',
    title: 'Visual Builder Import',
    description: 'Advanced visual building tools and import/export functionalities.',
    genre: ['Development', 'Tools'],
    year: 2024,
    rating: 'PG',
    duration: '1h 35m',
    thumbnail: './src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    backdrop: './src/assets/on_a_deep_navy_background_illustrate_a_visual-builder_ui_panel_showing_an_import_modal_in_the_cente_dhcku7bn62g07zhrejku_1.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    likes: 434
  },
  {
    id: 'movie-13',
    title: 'Flow Block Connections',
    description: 'Understanding flow-based programming and visual block connections.',
    genre: ['Programming', 'Education'],
    year: 2024,
    rating: 'PG',
    duration: '1h 50m',
    thumbnail: './src/assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_cp8le6hf2m2lvtgn86re_1.png',
    backdrop: './src/assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_cp8le6hf2m2lvtgn86re_1.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 345
  },
  {
    id: 'movie-14',
    title: 'Advanced Flow Systems',
    description: 'Complex flow system design and implementation strategies.',
    genre: ['Systems', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '2h 15m',
    thumbnail: './src/assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_tb5subdftt3e2tr3ofb4_0.png',
    backdrop: './src/assets/on_a_deep_navy_background_show_a_ui_canvas_where_two_semi-transparent_dark-blue_flow_blocksone_labe_tb5subdftt3e2tr3ofb4_0.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 567
  },
  {
    id: 'movie-15',
    title: 'UI Canvas Design',
    description: 'Modern UI canvas design principles and best practices.',
    genre: ['Design', 'UI/UX'],
    year: 2024,
    rating: 'PG',
    duration: '1h 25m',
    thumbnail: './src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_ox2kbbyrmdhkg237itvj_2.png',
    backdrop: './src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_ox2kbbyrmdhkg237itvj_2.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 456
  },
  {
    id: 'movie-16',
    title: 'Interface Block Systems',
    description: 'Advanced interface block systems and modular design approaches.',
    genre: ['Interface', 'Design'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: './src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
    backdrop: './src/assets/on_a_deep_navy_background_show_a_user_interface_canvas_where_a_semi-transparent_dark-blue_block_wit_sayue34utoairme2uako_2.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    likes: 678
  },
  {
    id: 'movie-17',
    title: 'Video Personalization',
    description: 'The future of personalized video content and AI-driven customization.',
    genre: ['Video', 'AI'],
    year: 2024,
    rating: 'PG',
    duration: '1h 55m',
    thumbnail: './src/assets/split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png',
    backdrop: './src/assets/split_screen-_left_side_showing_a_salesperson_recording_a_single_video_right_side_showing_that_vide_9vuah1tktgqafjeogi77_1.png',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    likes: 789
  }
];

// Content rows configuration
export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      movies[0], // AI Automation Dashboard
      movies[4], // Hack It: Mobile Security
      movies[9], // Prompt Chain Builder
      movies[16], // Video Personalization
      movies[1], // Digital Workspace Revolution
      movies[8], // Trending Dashboard Analytics
    ]
  },
  {
    id: 'technology',
    title: 'Technology & Innovation',
    movies: [
      movies[0], // AI Automation Dashboard
      movies[1], // Digital Workspace Revolution
      movies[2], // Mobile Innovation Hub
      movies[3], // Email Automation Future
      movies[4], // Hack It: Mobile Security
      movies[5], // RevenueCat UI Design
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    movies: [
      movies[6], // AI Avatar Training
      movies[9], // Prompt Chain Builder
      movies[0], // AI Automation Dashboard
      movies[16], // Video Personalization
      movies[4], // Hack It: Mobile Security
      movies[3], // Email Automation Future
    ]
  },
  {
    id: 'design-ux',
    title: 'Design & UX',
    movies: [
      movies[5], // RevenueCat UI Design
      movies[14], // UI Canvas Design
      movies[15], // Interface Block Systems
      movies[11], // Visual Builder Import
      movies[1], // Digital Workspace Revolution
      movies[2], // Mobile Innovation Hub
    ]
  },
  {
    id: 'business-analytics',
    title: 'Business & Analytics',
    movies: [
      movies[10], // Revenue Analytics Hub
      movies[8], // Trending Dashboard Analytics
      movies[7], // Funnel Builder Pro
      movies[1], // Digital Workspace Revolution
      movies[6], // AI Avatar Training
      movies[5], // RevenueCat UI Design
    ]
  },
  {
    id: 'development',
    title: 'Development & Tools',
    movies: [
      movies[11], // Visual Builder Import
      movies[12], // Flow Block Connections
      movies[13], // Advanced Flow Systems
      movies[7], // Funnel Builder Pro
      movies[0], // AI Automation Dashboard
      movies[9], // Prompt Chain Builder
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Liked',
    movies: [] // This will be populated dynamically
  }
];

// Helper function to get most liked movies
export const getMostLikedMovies = (count: number = 8): Movie[] => {
  return [...movies]
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, count);
};