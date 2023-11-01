--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Debian 15.3-1.pgdg110+1)
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: admin_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admin_permissions (
    id integer NOT NULL,
    action character varying(255),
    subject character varying(255),
    properties jsonb,
    conditions jsonb,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    action_parameters jsonb
);


ALTER TABLE public.admin_permissions OWNER TO postgres;

--
-- Name: admin_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admin_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admin_permissions_id_seq OWNER TO postgres;

--
-- Name: admin_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admin_permissions_id_seq OWNED BY public.admin_permissions.id;


--
-- Name: admin_permissions_role_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admin_permissions_role_links (
    id integer NOT NULL,
    permission_id integer,
    role_id integer,
    permission_order double precision
);


ALTER TABLE public.admin_permissions_role_links OWNER TO postgres;

--
-- Name: admin_permissions_role_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admin_permissions_role_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admin_permissions_role_links_id_seq OWNER TO postgres;

--
-- Name: admin_permissions_role_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admin_permissions_role_links_id_seq OWNED BY public.admin_permissions_role_links.id;


--
-- Name: admin_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admin_roles (
    id integer NOT NULL,
    name character varying(255),
    code character varying(255),
    description character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.admin_roles OWNER TO postgres;

--
-- Name: admin_roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admin_roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admin_roles_id_seq OWNER TO postgres;

--
-- Name: admin_roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admin_roles_id_seq OWNED BY public.admin_roles.id;


--
-- Name: admin_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admin_users (
    id integer NOT NULL,
    firstname character varying(255),
    lastname character varying(255),
    username character varying(255),
    email character varying(255),
    password character varying(255),
    reset_password_token character varying(255),
    registration_token character varying(255),
    is_active boolean,
    blocked boolean,
    prefered_language character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.admin_users OWNER TO postgres;

--
-- Name: admin_users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admin_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admin_users_id_seq OWNER TO postgres;

--
-- Name: admin_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admin_users_id_seq OWNED BY public.admin_users.id;


--
-- Name: admin_users_roles_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admin_users_roles_links (
    id integer NOT NULL,
    user_id integer,
    role_id integer,
    role_order double precision,
    user_order double precision
);


ALTER TABLE public.admin_users_roles_links OWNER TO postgres;

--
-- Name: admin_users_roles_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admin_users_roles_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admin_users_roles_links_id_seq OWNER TO postgres;

--
-- Name: admin_users_roles_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admin_users_roles_links_id_seq OWNED BY public.admin_users_roles_links.id;


--
-- Name: components_elements_buttons; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_buttons (
    id integer NOT NULL,
    url text,
    description text,
    variant character varying(255),
    title text,
    additional_attributes jsonb,
    class_name character varying(255)
);


ALTER TABLE public.components_elements_buttons OWNER TO postgres;

--
-- Name: components_elements_buttons_arrays; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_buttons_arrays (
    id integer NOT NULL,
    title text,
    class_name character varying(255),
    variant character varying(255),
    description text,
    url character varying(255),
    additional_attributes jsonb
);


ALTER TABLE public.components_elements_buttons_arrays OWNER TO postgres;

--
-- Name: components_elements_buttons_arrays_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_buttons_arrays_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_elements_buttons_arrays_components OWNER TO postgres;

--
-- Name: components_elements_buttons_arrays_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_buttons_arrays_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_buttons_arrays_components_id_seq OWNER TO postgres;

--
-- Name: components_elements_buttons_arrays_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_buttons_arrays_components_id_seq OWNED BY public.components_elements_buttons_arrays_components.id;


--
-- Name: components_elements_buttons_arrays_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_buttons_arrays_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_buttons_arrays_id_seq OWNER TO postgres;

--
-- Name: components_elements_buttons_arrays_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_buttons_arrays_id_seq OWNED BY public.components_elements_buttons_arrays.id;


--
-- Name: components_elements_buttons_flyout_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_buttons_flyout_links (
    id integer NOT NULL,
    button_id integer,
    flyout_id integer
);


ALTER TABLE public.components_elements_buttons_flyout_links OWNER TO postgres;

--
-- Name: components_elements_buttons_flyout_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_buttons_flyout_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_buttons_flyout_links_id_seq OWNER TO postgres;

--
-- Name: components_elements_buttons_flyout_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_buttons_flyout_links_id_seq OWNED BY public.components_elements_buttons_flyout_links.id;


--
-- Name: components_elements_buttons_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_buttons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_buttons_id_seq OWNER TO postgres;

--
-- Name: components_elements_buttons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_buttons_id_seq OWNED BY public.components_elements_buttons.id;


--
-- Name: components_elements_date_values; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_date_values (
    id integer NOT NULL,
    date_value date,
    datetime_value timestamp(6) without time zone,
    time_value time without time zone
);


ALTER TABLE public.components_elements_date_values OWNER TO postgres;

--
-- Name: components_elements_date_values_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_date_values_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_date_values_id_seq OWNER TO postgres;

--
-- Name: components_elements_date_values_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_date_values_id_seq OWNED BY public.components_elements_date_values.id;


--
-- Name: components_elements_faqs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_faqs (
    id integer NOT NULL,
    description text,
    title text
);


ALTER TABLE public.components_elements_faqs OWNER TO postgres;

--
-- Name: components_elements_faqs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_faqs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_faqs_id_seq OWNER TO postgres;

--
-- Name: components_elements_faqs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_faqs_id_seq OWNED BY public.components_elements_faqs.id;


--
-- Name: components_elements_features; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_features (
    id integer NOT NULL,
    description text,
    title text,
    subtitle text
);


ALTER TABLE public.components_elements_features OWNER TO postgres;

--
-- Name: components_elements_features_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_features_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_features_id_seq OWNER TO postgres;

--
-- Name: components_elements_features_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_features_id_seq OWNED BY public.components_elements_features.id;


--
-- Name: components_elements_fonts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_fonts (
    id integer NOT NULL,
    weight character varying(255),
    style character varying(255),
    variant character varying(255)
);


ALTER TABLE public.components_elements_fonts OWNER TO postgres;

--
-- Name: components_elements_fonts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_fonts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_fonts_id_seq OWNER TO postgres;

--
-- Name: components_elements_fonts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_fonts_id_seq OWNED BY public.components_elements_fonts.id;


--
-- Name: components_elements_input_options; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_input_options (
    id integer NOT NULL,
    title text,
    description text
);


ALTER TABLE public.components_elements_input_options OWNER TO postgres;

--
-- Name: components_elements_input_options_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_input_options_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_input_options_id_seq OWNER TO postgres;

--
-- Name: components_elements_input_options_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_input_options_id_seq OWNED BY public.components_elements_input_options.id;


--
-- Name: components_elements_inputs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_inputs (
    id integer NOT NULL,
    placeholder character varying(255),
    variant character varying(255),
    is_required boolean,
    value text,
    name character varying(255),
    label text,
    class_name character varying(255),
    type character varying(255),
    multiple boolean,
    min double precision,
    max double precision,
    step double precision
);


ALTER TABLE public.components_elements_inputs OWNER TO postgres;

--
-- Name: components_elements_inputs_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_inputs_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_elements_inputs_components OWNER TO postgres;

--
-- Name: components_elements_inputs_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_inputs_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_inputs_components_id_seq OWNER TO postgres;

--
-- Name: components_elements_inputs_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_inputs_components_id_seq OWNED BY public.components_elements_inputs_components.id;


--
-- Name: components_elements_inputs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_inputs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_inputs_id_seq OWNER TO postgres;

--
-- Name: components_elements_inputs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_inputs_id_seq OWNED BY public.components_elements_inputs.id;


--
-- Name: components_elements_logotypes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_logotypes (
    id integer NOT NULL,
    title text,
    url text
);


ALTER TABLE public.components_elements_logotypes OWNER TO postgres;

--
-- Name: components_elements_logotypes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_logotypes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_logotypes_id_seq OWNER TO postgres;

--
-- Name: components_elements_logotypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_logotypes_id_seq OWNED BY public.components_elements_logotypes.id;


--
-- Name: components_elements_recievers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_recievers (
    id integer NOT NULL,
    identifier character varying(255)
);


ALTER TABLE public.components_elements_recievers OWNER TO postgres;

--
-- Name: components_elements_recievers_admin_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_recievers_admin_links (
    id integer NOT NULL,
    reciever_id integer,
    user_id integer
);


ALTER TABLE public.components_elements_recievers_admin_links OWNER TO postgres;

--
-- Name: components_elements_recievers_admin_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_recievers_admin_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_recievers_admin_links_id_seq OWNER TO postgres;

--
-- Name: components_elements_recievers_admin_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_recievers_admin_links_id_seq OWNED BY public.components_elements_recievers_admin_links.id;


--
-- Name: components_elements_recievers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_recievers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_recievers_id_seq OWNER TO postgres;

--
-- Name: components_elements_recievers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_recievers_id_seq OWNED BY public.components_elements_recievers.id;


--
-- Name: components_elements_recievers_user_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_recievers_user_links (
    id integer NOT NULL,
    reciever_id integer,
    user_id integer
);


ALTER TABLE public.components_elements_recievers_user_links OWNER TO postgres;

--
-- Name: components_elements_recievers_user_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_recievers_user_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_recievers_user_links_id_seq OWNER TO postgres;

--
-- Name: components_elements_recievers_user_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_recievers_user_links_id_seq OWNED BY public.components_elements_recievers_user_links.id;


--
-- Name: components_elements_request_inputs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_request_inputs (
    id integer NOT NULL,
    key text,
    value text,
    is_true boolean,
    date_value date,
    datetime_value timestamp(6) without time zone
);


ALTER TABLE public.components_elements_request_inputs OWNER TO postgres;

--
-- Name: components_elements_request_inputs_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_request_inputs_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_elements_request_inputs_components OWNER TO postgres;

--
-- Name: components_elements_request_inputs_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_request_inputs_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_request_inputs_components_id_seq OWNER TO postgres;

--
-- Name: components_elements_request_inputs_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_request_inputs_components_id_seq OWNED BY public.components_elements_request_inputs_components.id;


--
-- Name: components_elements_request_inputs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_request_inputs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_request_inputs_id_seq OWNER TO postgres;

--
-- Name: components_elements_request_inputs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_request_inputs_id_seq OWNED BY public.components_elements_request_inputs.id;


--
-- Name: components_elements_slides; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_slides (
    id integer NOT NULL,
    title text,
    description text,
    subtitle text
);


ALTER TABLE public.components_elements_slides OWNER TO postgres;

--
-- Name: components_elements_slides_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_elements_slides_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_elements_slides_components OWNER TO postgres;

--
-- Name: components_elements_slides_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_slides_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_slides_components_id_seq OWNER TO postgres;

--
-- Name: components_elements_slides_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_slides_components_id_seq OWNED BY public.components_elements_slides_components.id;


--
-- Name: components_elements_slides_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_elements_slides_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_elements_slides_id_seq OWNER TO postgres;

--
-- Name: components_elements_slides_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_elements_slides_id_seq OWNED BY public.components_elements_slides.id;


--
-- Name: components_functions_configs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_functions_configs (
    id integer NOT NULL,
    provider character varying(255),
    config jsonb
);


ALTER TABLE public.components_functions_configs OWNER TO postgres;

--
-- Name: components_functions_configs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_functions_configs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_functions_configs_id_seq OWNER TO postgres;

--
-- Name: components_functions_configs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_functions_configs_id_seq OWNED BY public.components_functions_configs.id;


--
-- Name: components_functions_form_side_effects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_functions_form_side_effects (
    id integer NOT NULL,
    type character varying(255),
    provider character varying(255)
);


ALTER TABLE public.components_functions_form_side_effects OWNER TO postgres;

--
-- Name: components_functions_form_side_effects_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_functions_form_side_effects_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_functions_form_side_effects_components OWNER TO postgres;

--
-- Name: components_functions_form_side_effects_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_functions_form_side_effects_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_functions_form_side_effects_components_id_seq OWNER TO postgres;

--
-- Name: components_functions_form_side_effects_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_functions_form_side_effects_components_id_seq OWNED BY public.components_functions_form_side_effects_components.id;


--
-- Name: components_functions_form_side_effects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_functions_form_side_effects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_functions_form_side_effects_id_seq OWNER TO postgres;

--
-- Name: components_functions_form_side_effects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_functions_form_side_effects_id_seq OWNED BY public.components_functions_form_side_effects.id;


--
-- Name: components_page_blocks_alert_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_alert_blocks (
    id integer NOT NULL,
    title text,
    subtitle text,
    description text,
    class_name character varying(255),
    anchor character varying(255),
    variant character varying(255)
);


ALTER TABLE public.components_page_blocks_alert_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_alert_blocks_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_alert_blocks_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_page_blocks_alert_blocks_components OWNER TO postgres;

--
-- Name: components_page_blocks_alert_blocks_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_alert_blocks_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_alert_blocks_components_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_alert_blocks_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_alert_blocks_components_id_seq OWNED BY public.components_page_blocks_alert_blocks_components.id;


--
-- Name: components_page_blocks_alert_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_alert_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_alert_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_alert_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_alert_blocks_id_seq OWNED BY public.components_page_blocks_alert_blocks.id;


--
-- Name: components_page_blocks_contact_section_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_contact_section_blocks (
    id integer NOT NULL,
    title text,
    subtitle text,
    description text,
    anchor text,
    class_name text,
    variant character varying(255)
);


ALTER TABLE public.components_page_blocks_contact_section_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_contact_section_blocks_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_contact_section_blocks_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_page_blocks_contact_section_blocks_components OWNER TO postgres;

--
-- Name: components_page_blocks_contact_section_blocks_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_contact_section_blocks_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_contact_section_blocks_components_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_contact_section_blocks_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_contact_section_blocks_components_id_seq OWNED BY public.components_page_blocks_contact_section_blocks_components.id;


--
-- Name: components_page_blocks_contact_section_blocks_form_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_contact_section_blocks_form_links (
    id integer NOT NULL,
    contact_section_block_id integer,
    form_id integer
);


ALTER TABLE public.components_page_blocks_contact_section_blocks_form_links OWNER TO postgres;

--
-- Name: components_page_blocks_contact_section_blocks_form_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_contact_section_blocks_form_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_contact_section_blocks_form_links_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_contact_section_blocks_form_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_contact_section_blocks_form_links_id_seq OWNED BY public.components_page_blocks_contact_section_blocks_form_links.id;


--
-- Name: components_page_blocks_contact_section_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_contact_section_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_contact_section_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_contact_section_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_contact_section_blocks_id_seq OWNED BY public.components_page_blocks_contact_section_blocks.id;


--
-- Name: components_page_blocks_cta_section_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_cta_section_blocks (
    id integer NOT NULL,
    variant character varying(255),
    anchor character varying(255),
    class_name character varying(255),
    title text,
    description text,
    subtitle text
);


ALTER TABLE public.components_page_blocks_cta_section_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_cta_section_blocks_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_cta_section_blocks_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_page_blocks_cta_section_blocks_components OWNER TO postgres;

--
-- Name: components_page_blocks_cta_section_blocks_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_cta_section_blocks_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_cta_section_blocks_components_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_cta_section_blocks_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_cta_section_blocks_components_id_seq OWNED BY public.components_page_blocks_cta_section_blocks_components.id;


--
-- Name: components_page_blocks_cta_section_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_cta_section_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_cta_section_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_cta_section_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_cta_section_blocks_id_seq OWNED BY public.components_page_blocks_cta_section_blocks.id;


--
-- Name: components_page_blocks_faqs_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_faqs_blocks (
    id integer NOT NULL,
    title text,
    description text,
    variant character varying(255),
    class_name character varying(255),
    anchor character varying(255),
    subtitle text
);


ALTER TABLE public.components_page_blocks_faqs_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_faqs_blocks_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_faqs_blocks_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_page_blocks_faqs_blocks_components OWNER TO postgres;

--
-- Name: components_page_blocks_faqs_blocks_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_faqs_blocks_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_faqs_blocks_components_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_faqs_blocks_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_faqs_blocks_components_id_seq OWNED BY public.components_page_blocks_faqs_blocks_components.id;


--
-- Name: components_page_blocks_faqs_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_faqs_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_faqs_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_faqs_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_faqs_blocks_id_seq OWNED BY public.components_page_blocks_faqs_blocks.id;


--
-- Name: components_page_blocks_features_section_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_features_section_blocks (
    id integer NOT NULL,
    title text,
    description text,
    subtitle text,
    variant character varying(255),
    anchor character varying(255),
    class_name character varying(255)
);


ALTER TABLE public.components_page_blocks_features_section_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_features_section_blocks_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_features_section_blocks_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_page_blocks_features_section_blocks_components OWNER TO postgres;

--
-- Name: components_page_blocks_features_section_blocks_component_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_features_section_blocks_component_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_features_section_blocks_component_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_features_section_blocks_component_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_features_section_blocks_component_id_seq OWNED BY public.components_page_blocks_features_section_blocks_components.id;


--
-- Name: components_page_blocks_features_section_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_features_section_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_features_section_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_features_section_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_features_section_blocks_id_seq OWNED BY public.components_page_blocks_features_section_blocks.id;


--
-- Name: components_page_blocks_footer_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_footer_blocks (
    id integer NOT NULL,
    copyrights text,
    description text,
    variant character varying(255),
    class_name character varying(255)
);


ALTER TABLE public.components_page_blocks_footer_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_footer_blocks_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_footer_blocks_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_page_blocks_footer_blocks_components OWNER TO postgres;

--
-- Name: components_page_blocks_footer_blocks_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_footer_blocks_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_footer_blocks_components_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_footer_blocks_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_footer_blocks_components_id_seq OWNED BY public.components_page_blocks_footer_blocks_components.id;


--
-- Name: components_page_blocks_footer_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_footer_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_footer_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_footer_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_footer_blocks_id_seq OWNED BY public.components_page_blocks_footer_blocks.id;


--
-- Name: components_page_blocks_header_section_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_header_section_blocks (
    id integer NOT NULL,
    title text,
    description text,
    variant character varying(255),
    subtitle text,
    anchor character varying(255),
    class_name character varying(255)
);


ALTER TABLE public.components_page_blocks_header_section_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_header_section_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_header_section_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_header_section_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_header_section_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_header_section_blocks_id_seq OWNED BY public.components_page_blocks_header_section_blocks.id;


--
-- Name: components_page_blocks_hero_section_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_hero_section_blocks (
    id integer NOT NULL,
    title text,
    description text,
    variant character varying(255),
    anchor character varying(255),
    class_name character varying(255)
);


ALTER TABLE public.components_page_blocks_hero_section_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_hero_section_blocks_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_hero_section_blocks_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_page_blocks_hero_section_blocks_components OWNER TO postgres;

--
-- Name: components_page_blocks_hero_section_blocks_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_hero_section_blocks_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_hero_section_blocks_components_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_hero_section_blocks_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_hero_section_blocks_components_id_seq OWNED BY public.components_page_blocks_hero_section_blocks_components.id;


--
-- Name: components_page_blocks_hero_section_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_hero_section_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_hero_section_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_hero_section_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_hero_section_blocks_id_seq OWNED BY public.components_page_blocks_hero_section_blocks.id;


--
-- Name: components_page_blocks_incentives_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_incentives_blocks (
    id integer NOT NULL,
    title text,
    description text,
    anchor character varying(255),
    class_name character varying(255),
    variant character varying(255),
    subtitle text
);


ALTER TABLE public.components_page_blocks_incentives_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_incentives_blocks_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_incentives_blocks_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_page_blocks_incentives_blocks_components OWNER TO postgres;

--
-- Name: components_page_blocks_incentives_blocks_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_incentives_blocks_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_incentives_blocks_components_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_incentives_blocks_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_incentives_blocks_components_id_seq OWNED BY public.components_page_blocks_incentives_blocks_components.id;


--
-- Name: components_page_blocks_incentives_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_incentives_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_incentives_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_incentives_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_incentives_blocks_id_seq OWNED BY public.components_page_blocks_incentives_blocks.id;


--
-- Name: components_page_blocks_logotypes_cloud_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_logotypes_cloud_blocks (
    id integer NOT NULL,
    variant character varying(255),
    title text,
    description text,
    anchor character varying(255),
    class_name character varying(255),
    subtitle text
);


ALTER TABLE public.components_page_blocks_logotypes_cloud_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_logotypes_cloud_blocks_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_logotypes_cloud_blocks_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_page_blocks_logotypes_cloud_blocks_components OWNER TO postgres;

--
-- Name: components_page_blocks_logotypes_cloud_blocks_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_logotypes_cloud_blocks_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_logotypes_cloud_blocks_components_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_logotypes_cloud_blocks_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_logotypes_cloud_blocks_components_id_seq OWNED BY public.components_page_blocks_logotypes_cloud_blocks_components.id;


--
-- Name: components_page_blocks_logotypes_cloud_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_logotypes_cloud_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_logotypes_cloud_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_logotypes_cloud_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_logotypes_cloud_blocks_id_seq OWNED BY public.components_page_blocks_logotypes_cloud_blocks.id;


--
-- Name: components_page_blocks_navbar_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_navbar_blocks (
    id integer NOT NULL,
    variant character varying(255),
    description text,
    class_name character varying(255)
);


ALTER TABLE public.components_page_blocks_navbar_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_navbar_blocks_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_navbar_blocks_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_page_blocks_navbar_blocks_components OWNER TO postgres;

--
-- Name: components_page_blocks_navbar_blocks_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_navbar_blocks_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_navbar_blocks_components_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_navbar_blocks_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_navbar_blocks_components_id_seq OWNED BY public.components_page_blocks_navbar_blocks_components.id;


--
-- Name: components_page_blocks_navbar_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_navbar_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_navbar_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_navbar_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_navbar_blocks_id_seq OWNED BY public.components_page_blocks_navbar_blocks.id;


--
-- Name: components_page_blocks_not_found_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_not_found_blocks (
    id integer NOT NULL,
    variant character varying(255),
    title text,
    description text,
    class_name text,
    anchor text,
    subtitle text
);


ALTER TABLE public.components_page_blocks_not_found_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_not_found_blocks_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_not_found_blocks_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.components_page_blocks_not_found_blocks_components OWNER TO postgres;

--
-- Name: components_page_blocks_not_found_blocks_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_not_found_blocks_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_not_found_blocks_components_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_not_found_blocks_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_not_found_blocks_components_id_seq OWNED BY public.components_page_blocks_not_found_blocks_components.id;


--
-- Name: components_page_blocks_not_found_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_not_found_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_not_found_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_not_found_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_not_found_blocks_id_seq OWNED BY public.components_page_blocks_not_found_blocks.id;


--
-- Name: components_page_blocks_pricing_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_pricing_blocks (
    id integer NOT NULL,
    variant character varying(255),
    title text,
    subtitle text,
    description text,
    class_name text,
    anchor character varying(255)
);


ALTER TABLE public.components_page_blocks_pricing_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_pricing_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_pricing_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_pricing_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_pricing_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_pricing_blocks_id_seq OWNED BY public.components_page_blocks_pricing_blocks.id;


--
-- Name: components_page_blocks_pricing_blocks_tiers_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_pricing_blocks_tiers_links (
    id integer NOT NULL,
    pricing_block_id integer,
    tier_id integer,
    tier_order double precision
);


ALTER TABLE public.components_page_blocks_pricing_blocks_tiers_links OWNER TO postgres;

--
-- Name: components_page_blocks_pricing_blocks_tiers_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_pricing_blocks_tiers_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_pricing_blocks_tiers_links_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_pricing_blocks_tiers_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_pricing_blocks_tiers_links_id_seq OWNED BY public.components_page_blocks_pricing_blocks_tiers_links.id;


--
-- Name: components_page_blocks_reviews_list_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_reviews_list_blocks (
    id integer NOT NULL,
    variant character varying(255),
    show_all boolean,
    anchor character varying(255),
    class_name character varying(255),
    title text,
    subtitle text,
    description text
);


ALTER TABLE public.components_page_blocks_reviews_list_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_reviews_list_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_reviews_list_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_reviews_list_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_reviews_list_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_reviews_list_blocks_id_seq OWNED BY public.components_page_blocks_reviews_list_blocks.id;


--
-- Name: components_page_blocks_reviews_list_blocks_reviews_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_reviews_list_blocks_reviews_links (
    id integer NOT NULL,
    reviews_list_block_id integer,
    review_id integer,
    review_order double precision
);


ALTER TABLE public.components_page_blocks_reviews_list_blocks_reviews_links OWNER TO postgres;

--
-- Name: components_page_blocks_reviews_list_blocks_reviews_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_reviews_list_blocks_reviews_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_reviews_list_blocks_reviews_links_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_reviews_list_blocks_reviews_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_reviews_list_blocks_reviews_links_id_seq OWNED BY public.components_page_blocks_reviews_list_blocks_reviews_links.id;


--
-- Name: components_page_blocks_reviews_table_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_reviews_table_blocks (
    id integer NOT NULL,
    variant character varying(255),
    anchor character varying(255),
    class_name character varying(255)
);


ALTER TABLE public.components_page_blocks_reviews_table_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_reviews_table_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_reviews_table_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_reviews_table_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_reviews_table_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_reviews_table_blocks_id_seq OWNED BY public.components_page_blocks_reviews_table_blocks.id;


--
-- Name: components_page_blocks_slider_blocks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_slider_blocks (
    id integer NOT NULL,
    variant character varying(255),
    anchor character varying(255),
    class_name character varying(255),
    title text,
    description text,
    subtitle text
);


ALTER TABLE public.components_page_blocks_slider_blocks OWNER TO postgres;

--
-- Name: components_page_blocks_slider_blocks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_slider_blocks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_slider_blocks_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_slider_blocks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_slider_blocks_id_seq OWNED BY public.components_page_blocks_slider_blocks.id;


--
-- Name: components_page_blocks_slider_blocks_slider_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.components_page_blocks_slider_blocks_slider_links (
    id integer NOT NULL,
    slider_block_id integer,
    slider_id integer
);


ALTER TABLE public.components_page_blocks_slider_blocks_slider_links OWNER TO postgres;

--
-- Name: components_page_blocks_slider_blocks_slider_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.components_page_blocks_slider_blocks_slider_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.components_page_blocks_slider_blocks_slider_links_id_seq OWNER TO postgres;

--
-- Name: components_page_blocks_slider_blocks_slider_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.components_page_blocks_slider_blocks_slider_links_id_seq OWNED BY public.components_page_blocks_slider_blocks_slider_links.id;


--
-- Name: configurations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.configurations (
    id integer NOT NULL,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.configurations OWNER TO postgres;

--
-- Name: configurations_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.configurations_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.configurations_components OWNER TO postgres;

--
-- Name: configurations_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.configurations_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.configurations_components_id_seq OWNER TO postgres;

--
-- Name: configurations_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.configurations_components_id_seq OWNED BY public.configurations_components.id;


--
-- Name: configurations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.configurations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.configurations_id_seq OWNER TO postgres;

--
-- Name: configurations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.configurations_id_seq OWNED BY public.configurations.id;


--
-- Name: currencies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.currencies (
    id integer NOT NULL,
    title character varying(255),
    unicode character varying(255),
    is_default boolean,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    locale character varying(255)
);


ALTER TABLE public.currencies OWNER TO postgres;

--
-- Name: currencies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.currencies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.currencies_id_seq OWNER TO postgres;

--
-- Name: currencies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.currencies_id_seq OWNED BY public.currencies.id;


--
-- Name: currencies_localizations_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.currencies_localizations_links (
    id integer NOT NULL,
    currency_id integer,
    inv_currency_id integer,
    currency_order double precision
);


ALTER TABLE public.currencies_localizations_links OWNER TO postgres;

--
-- Name: currencies_localizations_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.currencies_localizations_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.currencies_localizations_links_id_seq OWNER TO postgres;

--
-- Name: currencies_localizations_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.currencies_localizations_links_id_seq OWNED BY public.currencies_localizations_links.id;


--
-- Name: email_templates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.email_templates (
    id integer NOT NULL,
    template_reference_id integer,
    design jsonb,
    name character varying(255),
    subject character varying(255),
    body_html text,
    body_text text,
    enabled boolean,
    tags jsonb,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.email_templates OWNER TO postgres;

--
-- Name: email_templates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.email_templates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.email_templates_id_seq OWNER TO postgres;

--
-- Name: email_templates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.email_templates_id_seq OWNED BY public.email_templates.id;


--
-- Name: files; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.files (
    id integer NOT NULL,
    name character varying(255),
    alternative_text character varying(255),
    caption character varying(255),
    width integer,
    height integer,
    formats jsonb,
    hash character varying(255),
    ext character varying(255),
    mime character varying(255),
    size numeric(10,2),
    url character varying(255),
    preview_url character varying(255),
    provider character varying(255),
    provider_metadata jsonb,
    folder_path character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.files OWNER TO postgres;

--
-- Name: files_folder_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.files_folder_links (
    id integer NOT NULL,
    file_id integer,
    folder_id integer,
    file_order double precision
);


ALTER TABLE public.files_folder_links OWNER TO postgres;

--
-- Name: files_folder_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.files_folder_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.files_folder_links_id_seq OWNER TO postgres;

--
-- Name: files_folder_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.files_folder_links_id_seq OWNED BY public.files_folder_links.id;


--
-- Name: files_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.files_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.files_id_seq OWNER TO postgres;

--
-- Name: files_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.files_id_seq OWNED BY public.files.id;


--
-- Name: files_related_morphs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.files_related_morphs (
    id integer NOT NULL,
    file_id integer,
    related_id integer,
    related_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.files_related_morphs OWNER TO postgres;

--
-- Name: files_related_morphs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.files_related_morphs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.files_related_morphs_id_seq OWNER TO postgres;

--
-- Name: files_related_morphs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.files_related_morphs_id_seq OWNED BY public.files_related_morphs.id;


--
-- Name: flyouts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.flyouts (
    id integer NOT NULL,
    variant character varying(255),
    title character varying(255),
    uid character varying(255),
    class_name character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    locale character varying(255)
);


ALTER TABLE public.flyouts OWNER TO postgres;

--
-- Name: flyouts_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.flyouts_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.flyouts_components OWNER TO postgres;

--
-- Name: flyouts_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.flyouts_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.flyouts_components_id_seq OWNER TO postgres;

--
-- Name: flyouts_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.flyouts_components_id_seq OWNED BY public.flyouts_components.id;


--
-- Name: flyouts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.flyouts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.flyouts_id_seq OWNER TO postgres;

--
-- Name: flyouts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.flyouts_id_seq OWNED BY public.flyouts.id;


--
-- Name: flyouts_localizations_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.flyouts_localizations_links (
    id integer NOT NULL,
    flyout_id integer,
    inv_flyout_id integer,
    flyout_order double precision
);


ALTER TABLE public.flyouts_localizations_links OWNER TO postgres;

--
-- Name: flyouts_localizations_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.flyouts_localizations_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.flyouts_localizations_links_id_seq OWNER TO postgres;

--
-- Name: flyouts_localizations_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.flyouts_localizations_links_id_seq OWNED BY public.flyouts_localizations_links.id;


--
-- Name: footers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.footers (
    id integer NOT NULL,
    title character varying(255),
    uid character varying(255),
    variant character varying(255),
    class_name character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    locale character varying(255)
);


ALTER TABLE public.footers OWNER TO postgres;

--
-- Name: footers_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.footers_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.footers_components OWNER TO postgres;

--
-- Name: footers_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.footers_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.footers_components_id_seq OWNER TO postgres;

--
-- Name: footers_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.footers_components_id_seq OWNED BY public.footers_components.id;


--
-- Name: footers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.footers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.footers_id_seq OWNER TO postgres;

--
-- Name: footers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.footers_id_seq OWNED BY public.footers.id;


--
-- Name: footers_localizations_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.footers_localizations_links (
    id integer NOT NULL,
    footer_id integer,
    inv_footer_id integer,
    footer_order double precision
);


ALTER TABLE public.footers_localizations_links OWNER TO postgres;

--
-- Name: footers_localizations_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.footers_localizations_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.footers_localizations_links_id_seq OWNER TO postgres;

--
-- Name: footers_localizations_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.footers_localizations_links_id_seq OWNED BY public.footers_localizations_links.id;


--
-- Name: form_requests; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.form_requests (
    id integer NOT NULL,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.form_requests OWNER TO postgres;

--
-- Name: form_requests_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.form_requests_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.form_requests_components OWNER TO postgres;

--
-- Name: form_requests_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.form_requests_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.form_requests_components_id_seq OWNER TO postgres;

--
-- Name: form_requests_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.form_requests_components_id_seq OWNED BY public.form_requests_components.id;


--
-- Name: form_requests_form_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.form_requests_form_links (
    id integer NOT NULL,
    form_request_id integer,
    form_id integer,
    form_request_order double precision
);


ALTER TABLE public.form_requests_form_links OWNER TO postgres;

--
-- Name: form_requests_form_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.form_requests_form_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.form_requests_form_links_id_seq OWNER TO postgres;

--
-- Name: form_requests_form_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.form_requests_form_links_id_seq OWNED BY public.form_requests_form_links.id;


--
-- Name: form_requests_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.form_requests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.form_requests_id_seq OWNER TO postgres;

--
-- Name: form_requests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.form_requests_id_seq OWNED BY public.form_requests.id;


--
-- Name: forms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.forms (
    id integer NOT NULL,
    class_name text,
    additional_attributes jsonb,
    variant character varying(255),
    uid character varying(255),
    title character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    locale character varying(255)
);


ALTER TABLE public.forms OWNER TO postgres;

--
-- Name: forms_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.forms_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.forms_components OWNER TO postgres;

--
-- Name: forms_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.forms_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.forms_components_id_seq OWNER TO postgres;

--
-- Name: forms_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.forms_components_id_seq OWNED BY public.forms_components.id;


--
-- Name: forms_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.forms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.forms_id_seq OWNER TO postgres;

--
-- Name: forms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.forms_id_seq OWNED BY public.forms.id;


--
-- Name: forms_localizations_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.forms_localizations_links (
    id integer NOT NULL,
    form_id integer,
    inv_form_id integer,
    form_order double precision
);


ALTER TABLE public.forms_localizations_links OWNER TO postgres;

--
-- Name: forms_localizations_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.forms_localizations_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.forms_localizations_links_id_seq OWNER TO postgres;

--
-- Name: forms_localizations_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.forms_localizations_links_id_seq OWNED BY public.forms_localizations_links.id;


--
-- Name: i18n_locale; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.i18n_locale (
    id integer NOT NULL,
    name character varying(255),
    code character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.i18n_locale OWNER TO postgres;

--
-- Name: i18n_locale_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.i18n_locale_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.i18n_locale_id_seq OWNER TO postgres;

--
-- Name: i18n_locale_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.i18n_locale_id_seq OWNED BY public.i18n_locale.id;


--
-- Name: layouts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.layouts (
    id integer NOT NULL,
    title character varying(255),
    uid character varying(255),
    variant character varying(255),
    class_name character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    locale character varying(255)
);


ALTER TABLE public.layouts OWNER TO postgres;

--
-- Name: layouts_footer_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.layouts_footer_links (
    id integer NOT NULL,
    layout_id integer,
    footer_id integer,
    layout_order double precision
);


ALTER TABLE public.layouts_footer_links OWNER TO postgres;

--
-- Name: layouts_footer_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.layouts_footer_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.layouts_footer_links_id_seq OWNER TO postgres;

--
-- Name: layouts_footer_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.layouts_footer_links_id_seq OWNED BY public.layouts_footer_links.id;


--
-- Name: layouts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.layouts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.layouts_id_seq OWNER TO postgres;

--
-- Name: layouts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.layouts_id_seq OWNED BY public.layouts.id;


--
-- Name: layouts_localizations_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.layouts_localizations_links (
    id integer NOT NULL,
    layout_id integer,
    inv_layout_id integer,
    layout_order double precision
);


ALTER TABLE public.layouts_localizations_links OWNER TO postgres;

--
-- Name: layouts_localizations_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.layouts_localizations_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.layouts_localizations_links_id_seq OWNER TO postgres;

--
-- Name: layouts_localizations_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.layouts_localizations_links_id_seq OWNED BY public.layouts_localizations_links.id;


--
-- Name: layouts_modals_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.layouts_modals_links (
    id integer NOT NULL,
    layout_id integer,
    modal_id integer,
    modal_order double precision,
    layout_order double precision
);


ALTER TABLE public.layouts_modals_links OWNER TO postgres;

--
-- Name: layouts_modals_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.layouts_modals_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.layouts_modals_links_id_seq OWNER TO postgres;

--
-- Name: layouts_modals_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.layouts_modals_links_id_seq OWNED BY public.layouts_modals_links.id;


--
-- Name: layouts_navbar_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.layouts_navbar_links (
    id integer NOT NULL,
    layout_id integer,
    navbar_id integer,
    layout_order double precision
);


ALTER TABLE public.layouts_navbar_links OWNER TO postgres;

--
-- Name: layouts_navbar_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.layouts_navbar_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.layouts_navbar_links_id_seq OWNER TO postgres;

--
-- Name: layouts_navbar_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.layouts_navbar_links_id_seq OWNED BY public.layouts_navbar_links.id;


--
-- Name: layouts_sidebar_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.layouts_sidebar_links (
    id integer NOT NULL,
    layout_id integer,
    sidebar_id integer,
    layout_order double precision
);


ALTER TABLE public.layouts_sidebar_links OWNER TO postgres;

--
-- Name: layouts_sidebar_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.layouts_sidebar_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.layouts_sidebar_links_id_seq OWNER TO postgres;

--
-- Name: layouts_sidebar_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.layouts_sidebar_links_id_seq OWNED BY public.layouts_sidebar_links.id;


--
-- Name: layouts_slide_overs_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.layouts_slide_overs_links (
    id integer NOT NULL,
    layout_id integer,
    slide_over_id integer,
    slide_over_order double precision,
    layout_order double precision
);


ALTER TABLE public.layouts_slide_overs_links OWNER TO postgres;

--
-- Name: layouts_slide_overs_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.layouts_slide_overs_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.layouts_slide_overs_links_id_seq OWNER TO postgres;

--
-- Name: layouts_slide_overs_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.layouts_slide_overs_links_id_seq OWNED BY public.layouts_slide_overs_links.id;


--
-- Name: layouts_topbar_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.layouts_topbar_links (
    id integer NOT NULL,
    layout_id integer,
    topbar_id integer,
    layout_order double precision
);


ALTER TABLE public.layouts_topbar_links OWNER TO postgres;

--
-- Name: layouts_topbar_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.layouts_topbar_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.layouts_topbar_links_id_seq OWNER TO postgres;

--
-- Name: layouts_topbar_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.layouts_topbar_links_id_seq OWNED BY public.layouts_topbar_links.id;


--
-- Name: loaders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.loaders (
    id integer NOT NULL,
    variant character varying(255),
    class_name character varying(255),
    anchor character varying(255),
    title text,
    subtitle text,
    description text,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.loaders OWNER TO postgres;

--
-- Name: loaders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.loaders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.loaders_id_seq OWNER TO postgres;

--
-- Name: loaders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.loaders_id_seq OWNED BY public.loaders.id;


--
-- Name: metatags; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.metatags (
    id integer NOT NULL,
    title text,
    description text,
    script text,
    gtm_key character varying(255),
    is_default boolean,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    locale character varying(255)
);


ALTER TABLE public.metatags OWNER TO postgres;

--
-- Name: metatags_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.metatags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.metatags_id_seq OWNER TO postgres;

--
-- Name: metatags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.metatags_id_seq OWNED BY public.metatags.id;


--
-- Name: metatags_localizations_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.metatags_localizations_links (
    id integer NOT NULL,
    metatag_id integer,
    inv_metatag_id integer,
    metatag_order double precision
);


ALTER TABLE public.metatags_localizations_links OWNER TO postgres;

--
-- Name: metatags_localizations_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.metatags_localizations_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.metatags_localizations_links_id_seq OWNER TO postgres;

--
-- Name: metatags_localizations_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.metatags_localizations_links_id_seq OWNED BY public.metatags_localizations_links.id;


--
-- Name: modals; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modals (
    id integer NOT NULL,
    uid character varying(255),
    dialog_panel_class_name character varying(255),
    variant character varying(255),
    title character varying(255),
    class_name character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    locale character varying(255)
);


ALTER TABLE public.modals OWNER TO postgres;

--
-- Name: modals_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modals_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.modals_components OWNER TO postgres;

--
-- Name: modals_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.modals_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.modals_components_id_seq OWNER TO postgres;

--
-- Name: modals_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.modals_components_id_seq OWNED BY public.modals_components.id;


--
-- Name: modals_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.modals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.modals_id_seq OWNER TO postgres;

--
-- Name: modals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.modals_id_seq OWNED BY public.modals.id;


--
-- Name: modals_localizations_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modals_localizations_links (
    id integer NOT NULL,
    modal_id integer,
    inv_modal_id integer,
    modal_order double precision
);


ALTER TABLE public.modals_localizations_links OWNER TO postgres;

--
-- Name: modals_localizations_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.modals_localizations_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.modals_localizations_links_id_seq OWNER TO postgres;

--
-- Name: modals_localizations_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.modals_localizations_links_id_seq OWNED BY public.modals_localizations_links.id;


--
-- Name: navbars; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.navbars (
    id integer NOT NULL,
    title character varying(255),
    uid character varying(255),
    variant character varying(255),
    class_name character varying(255),
    "position" character varying(255),
    side character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    locale character varying(255)
);


ALTER TABLE public.navbars OWNER TO postgres;

--
-- Name: navbars_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.navbars_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.navbars_components OWNER TO postgres;

--
-- Name: navbars_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.navbars_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.navbars_components_id_seq OWNER TO postgres;

--
-- Name: navbars_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.navbars_components_id_seq OWNED BY public.navbars_components.id;


--
-- Name: navbars_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.navbars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.navbars_id_seq OWNER TO postgres;

--
-- Name: navbars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.navbars_id_seq OWNED BY public.navbars.id;


--
-- Name: navbars_localizations_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.navbars_localizations_links (
    id integer NOT NULL,
    navbar_id integer,
    inv_navbar_id integer,
    navbar_order double precision
);


ALTER TABLE public.navbars_localizations_links OWNER TO postgres;

--
-- Name: navbars_localizations_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.navbars_localizations_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.navbars_localizations_links_id_seq OWNER TO postgres;

--
-- Name: navbars_localizations_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.navbars_localizations_links_id_seq OWNED BY public.navbars_localizations_links.id;


--
-- Name: pages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages (
    id integer NOT NULL,
    title character varying(255),
    url character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    locale character varying(255)
);


ALTER TABLE public.pages OWNER TO postgres;

--
-- Name: pages_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.pages_components OWNER TO postgres;

--
-- Name: pages_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pages_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pages_components_id_seq OWNER TO postgres;

--
-- Name: pages_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pages_components_id_seq OWNED BY public.pages_components.id;


--
-- Name: pages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pages_id_seq OWNER TO postgres;

--
-- Name: pages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pages_id_seq OWNED BY public.pages.id;


--
-- Name: pages_layout_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_layout_links (
    id integer NOT NULL,
    page_id integer,
    layout_id integer,
    page_order double precision
);


ALTER TABLE public.pages_layout_links OWNER TO postgres;

--
-- Name: pages_layout_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pages_layout_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pages_layout_links_id_seq OWNER TO postgres;

--
-- Name: pages_layout_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pages_layout_links_id_seq OWNED BY public.pages_layout_links.id;


--
-- Name: pages_localizations_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_localizations_links (
    id integer NOT NULL,
    page_id integer,
    inv_page_id integer,
    page_order double precision
);


ALTER TABLE public.pages_localizations_links OWNER TO postgres;

--
-- Name: pages_localizations_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pages_localizations_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pages_localizations_links_id_seq OWNER TO postgres;

--
-- Name: pages_localizations_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pages_localizations_links_id_seq OWNED BY public.pages_localizations_links.id;


--
-- Name: pages_metatag_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pages_metatag_links (
    id integer NOT NULL,
    page_id integer,
    metatag_id integer,
    page_order double precision
);


ALTER TABLE public.pages_metatag_links OWNER TO postgres;

--
-- Name: pages_metatag_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pages_metatag_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pages_metatag_links_id_seq OWNER TO postgres;

--
-- Name: pages_metatag_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pages_metatag_links_id_seq OWNED BY public.pages_metatag_links.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    name text,
    title text,
    description text,
    subtitle text,
    rating integer,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.reviews OWNER TO postgres;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.reviews_id_seq OWNER TO postgres;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: robots; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.robots (
    id integer NOT NULL,
    robots text,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.robots OWNER TO postgres;

--
-- Name: robots_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.robots_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.robots_id_seq OWNER TO postgres;

--
-- Name: robots_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.robots_id_seq OWNED BY public.robots.id;


--
-- Name: sidebars; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sidebars (
    id integer NOT NULL,
    variant character varying(255),
    title character varying(255),
    uid character varying(255),
    class_name character varying(255),
    side character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    locale character varying(255)
);


ALTER TABLE public.sidebars OWNER TO postgres;

--
-- Name: sidebars_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sidebars_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.sidebars_components OWNER TO postgres;

--
-- Name: sidebars_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sidebars_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sidebars_components_id_seq OWNER TO postgres;

--
-- Name: sidebars_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sidebars_components_id_seq OWNED BY public.sidebars_components.id;


--
-- Name: sidebars_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sidebars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sidebars_id_seq OWNER TO postgres;

--
-- Name: sidebars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sidebars_id_seq OWNED BY public.sidebars.id;


--
-- Name: sidebars_localizations_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sidebars_localizations_links (
    id integer NOT NULL,
    sidebar_id integer,
    inv_sidebar_id integer,
    sidebar_order double precision
);


ALTER TABLE public.sidebars_localizations_links OWNER TO postgres;

--
-- Name: sidebars_localizations_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sidebars_localizations_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sidebars_localizations_links_id_seq OWNER TO postgres;

--
-- Name: sidebars_localizations_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sidebars_localizations_links_id_seq OWNED BY public.sidebars_localizations_links.id;


--
-- Name: slide_overs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.slide_overs (
    id integer NOT NULL,
    variant character varying(255),
    title character varying(255),
    uid character varying(255),
    class_name character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    locale character varying(255)
);


ALTER TABLE public.slide_overs OWNER TO postgres;

--
-- Name: slide_overs_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.slide_overs_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.slide_overs_components OWNER TO postgres;

--
-- Name: slide_overs_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.slide_overs_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.slide_overs_components_id_seq OWNER TO postgres;

--
-- Name: slide_overs_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.slide_overs_components_id_seq OWNED BY public.slide_overs_components.id;


--
-- Name: slide_overs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.slide_overs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.slide_overs_id_seq OWNER TO postgres;

--
-- Name: slide_overs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.slide_overs_id_seq OWNED BY public.slide_overs.id;


--
-- Name: slide_overs_localizations_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.slide_overs_localizations_links (
    id integer NOT NULL,
    slide_over_id integer,
    inv_slide_over_id integer,
    slide_over_order double precision
);


ALTER TABLE public.slide_overs_localizations_links OWNER TO postgres;

--
-- Name: slide_overs_localizations_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.slide_overs_localizations_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.slide_overs_localizations_links_id_seq OWNER TO postgres;

--
-- Name: slide_overs_localizations_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.slide_overs_localizations_links_id_seq OWNED BY public.slide_overs_localizations_links.id;


--
-- Name: sliders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sliders (
    id integer NOT NULL,
    variant character varying(255),
    show_backdrop boolean,
    show_full_screen boolean,
    show_previews boolean,
    class_name character varying(255),
    aspect_ratio_class_name character varying(255),
    title character varying(255),
    uid character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    locale character varying(255)
);


ALTER TABLE public.sliders OWNER TO postgres;

--
-- Name: sliders_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sliders_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.sliders_components OWNER TO postgres;

--
-- Name: sliders_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sliders_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sliders_components_id_seq OWNER TO postgres;

--
-- Name: sliders_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sliders_components_id_seq OWNED BY public.sliders_components.id;


--
-- Name: sliders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sliders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sliders_id_seq OWNER TO postgres;

--
-- Name: sliders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sliders_id_seq OWNED BY public.sliders.id;


--
-- Name: sliders_localizations_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sliders_localizations_links (
    id integer NOT NULL,
    slider_id integer,
    inv_slider_id integer,
    slider_order double precision
);


ALTER TABLE public.sliders_localizations_links OWNER TO postgres;

--
-- Name: sliders_localizations_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sliders_localizations_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sliders_localizations_links_id_seq OWNER TO postgres;

--
-- Name: sliders_localizations_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sliders_localizations_links_id_seq OWNED BY public.sliders_localizations_links.id;


--
-- Name: strapi_api_token_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strapi_api_token_permissions (
    id integer NOT NULL,
    action character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.strapi_api_token_permissions OWNER TO postgres;

--
-- Name: strapi_api_token_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strapi_api_token_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_api_token_permissions_id_seq OWNER TO postgres;

--
-- Name: strapi_api_token_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strapi_api_token_permissions_id_seq OWNED BY public.strapi_api_token_permissions.id;


--
-- Name: strapi_api_token_permissions_token_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strapi_api_token_permissions_token_links (
    id integer NOT NULL,
    api_token_permission_id integer,
    api_token_id integer,
    api_token_permission_order double precision
);


ALTER TABLE public.strapi_api_token_permissions_token_links OWNER TO postgres;

--
-- Name: strapi_api_token_permissions_token_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strapi_api_token_permissions_token_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_api_token_permissions_token_links_id_seq OWNER TO postgres;

--
-- Name: strapi_api_token_permissions_token_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strapi_api_token_permissions_token_links_id_seq OWNED BY public.strapi_api_token_permissions_token_links.id;


--
-- Name: strapi_api_tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strapi_api_tokens (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    type character varying(255),
    access_key character varying(255),
    last_used_at timestamp(6) without time zone,
    expires_at timestamp(6) without time zone,
    lifespan bigint,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.strapi_api_tokens OWNER TO postgres;

--
-- Name: strapi_api_tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strapi_api_tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_api_tokens_id_seq OWNER TO postgres;

--
-- Name: strapi_api_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strapi_api_tokens_id_seq OWNED BY public.strapi_api_tokens.id;


--
-- Name: strapi_core_store_settings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strapi_core_store_settings (
    id integer NOT NULL,
    key character varying(255),
    value text,
    type character varying(255),
    environment character varying(255),
    tag character varying(255)
);


ALTER TABLE public.strapi_core_store_settings OWNER TO postgres;

--
-- Name: strapi_core_store_settings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strapi_core_store_settings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_core_store_settings_id_seq OWNER TO postgres;

--
-- Name: strapi_core_store_settings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strapi_core_store_settings_id_seq OWNED BY public.strapi_core_store_settings.id;


--
-- Name: strapi_database_schema; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strapi_database_schema (
    id integer NOT NULL,
    schema json,
    "time" timestamp without time zone,
    hash character varying(255)
);


ALTER TABLE public.strapi_database_schema OWNER TO postgres;

--
-- Name: strapi_database_schema_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strapi_database_schema_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_database_schema_id_seq OWNER TO postgres;

--
-- Name: strapi_database_schema_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strapi_database_schema_id_seq OWNED BY public.strapi_database_schema.id;


--
-- Name: strapi_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strapi_migrations (
    id integer NOT NULL,
    name character varying(255),
    "time" timestamp without time zone
);


ALTER TABLE public.strapi_migrations OWNER TO postgres;

--
-- Name: strapi_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strapi_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_migrations_id_seq OWNER TO postgres;

--
-- Name: strapi_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strapi_migrations_id_seq OWNED BY public.strapi_migrations.id;


--
-- Name: strapi_transfer_token_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strapi_transfer_token_permissions (
    id integer NOT NULL,
    action character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.strapi_transfer_token_permissions OWNER TO postgres;

--
-- Name: strapi_transfer_token_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strapi_transfer_token_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_transfer_token_permissions_id_seq OWNER TO postgres;

--
-- Name: strapi_transfer_token_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strapi_transfer_token_permissions_id_seq OWNED BY public.strapi_transfer_token_permissions.id;


--
-- Name: strapi_transfer_token_permissions_token_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strapi_transfer_token_permissions_token_links (
    id integer NOT NULL,
    transfer_token_permission_id integer,
    transfer_token_id integer,
    transfer_token_permission_order double precision
);


ALTER TABLE public.strapi_transfer_token_permissions_token_links OWNER TO postgres;

--
-- Name: strapi_transfer_token_permissions_token_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strapi_transfer_token_permissions_token_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_transfer_token_permissions_token_links_id_seq OWNER TO postgres;

--
-- Name: strapi_transfer_token_permissions_token_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strapi_transfer_token_permissions_token_links_id_seq OWNED BY public.strapi_transfer_token_permissions_token_links.id;


--
-- Name: strapi_transfer_tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strapi_transfer_tokens (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    access_key character varying(255),
    last_used_at timestamp(6) without time zone,
    expires_at timestamp(6) without time zone,
    lifespan bigint,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.strapi_transfer_tokens OWNER TO postgres;

--
-- Name: strapi_transfer_tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strapi_transfer_tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_transfer_tokens_id_seq OWNER TO postgres;

--
-- Name: strapi_transfer_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strapi_transfer_tokens_id_seq OWNED BY public.strapi_transfer_tokens.id;


--
-- Name: strapi_webhooks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.strapi_webhooks (
    id integer NOT NULL,
    name character varying(255),
    url text,
    headers jsonb,
    events jsonb,
    enabled boolean
);


ALTER TABLE public.strapi_webhooks OWNER TO postgres;

--
-- Name: strapi_webhooks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.strapi_webhooks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.strapi_webhooks_id_seq OWNER TO postgres;

--
-- Name: strapi_webhooks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.strapi_webhooks_id_seq OWNED BY public.strapi_webhooks.id;


--
-- Name: telegrams; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.telegrams (
    id integer NOT NULL,
    name character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.telegrams OWNER TO postgres;

--
-- Name: telegrams_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.telegrams_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.telegrams_id_seq OWNER TO postgres;

--
-- Name: telegrams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.telegrams_id_seq OWNED BY public.telegrams.id;


--
-- Name: themes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.themes (
    id integer NOT NULL,
    theme jsonb,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.themes OWNER TO postgres;

--
-- Name: themes_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.themes_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.themes_components OWNER TO postgres;

--
-- Name: themes_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.themes_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.themes_components_id_seq OWNER TO postgres;

--
-- Name: themes_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.themes_components_id_seq OWNED BY public.themes_components.id;


--
-- Name: themes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.themes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.themes_id_seq OWNER TO postgres;

--
-- Name: themes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.themes_id_seq OWNED BY public.themes.id;


--
-- Name: tiers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tiers (
    id integer NOT NULL,
    title text,
    description text,
    price double precision,
    type character varying(255),
    period integer,
    old_price double precision,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    locale character varying(255)
);


ALTER TABLE public.tiers OWNER TO postgres;

--
-- Name: tiers_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tiers_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.tiers_components OWNER TO postgres;

--
-- Name: tiers_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tiers_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tiers_components_id_seq OWNER TO postgres;

--
-- Name: tiers_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tiers_components_id_seq OWNED BY public.tiers_components.id;


--
-- Name: tiers_currency_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tiers_currency_links (
    id integer NOT NULL,
    tier_id integer,
    currency_id integer,
    tier_order double precision
);


ALTER TABLE public.tiers_currency_links OWNER TO postgres;

--
-- Name: tiers_currency_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tiers_currency_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tiers_currency_links_id_seq OWNER TO postgres;

--
-- Name: tiers_currency_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tiers_currency_links_id_seq OWNED BY public.tiers_currency_links.id;


--
-- Name: tiers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tiers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tiers_id_seq OWNER TO postgres;

--
-- Name: tiers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tiers_id_seq OWNED BY public.tiers.id;


--
-- Name: tiers_localizations_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tiers_localizations_links (
    id integer NOT NULL,
    tier_id integer,
    inv_tier_id integer,
    tier_order double precision
);


ALTER TABLE public.tiers_localizations_links OWNER TO postgres;

--
-- Name: tiers_localizations_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tiers_localizations_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tiers_localizations_links_id_seq OWNER TO postgres;

--
-- Name: tiers_localizations_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tiers_localizations_links_id_seq OWNED BY public.tiers_localizations_links.id;


--
-- Name: topbars; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.topbars (
    id integer NOT NULL,
    title character varying(255),
    uid character varying(255),
    variant character varying(255),
    class_name character varying(255),
    "position" character varying(255),
    side character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    published_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer,
    locale character varying(255)
);


ALTER TABLE public.topbars OWNER TO postgres;

--
-- Name: topbars_components; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.topbars_components (
    id integer NOT NULL,
    entity_id integer,
    component_id integer,
    component_type character varying(255),
    field character varying(255),
    "order" double precision
);


ALTER TABLE public.topbars_components OWNER TO postgres;

--
-- Name: topbars_components_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.topbars_components_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.topbars_components_id_seq OWNER TO postgres;

--
-- Name: topbars_components_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.topbars_components_id_seq OWNED BY public.topbars_components.id;


--
-- Name: topbars_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.topbars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.topbars_id_seq OWNER TO postgres;

--
-- Name: topbars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.topbars_id_seq OWNED BY public.topbars.id;


--
-- Name: topbars_localizations_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.topbars_localizations_links (
    id integer NOT NULL,
    topbar_id integer,
    inv_topbar_id integer,
    topbar_order double precision
);


ALTER TABLE public.topbars_localizations_links OWNER TO postgres;

--
-- Name: topbars_localizations_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.topbars_localizations_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.topbars_localizations_links_id_seq OWNER TO postgres;

--
-- Name: topbars_localizations_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.topbars_localizations_links_id_seq OWNED BY public.topbars_localizations_links.id;


--
-- Name: up_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.up_permissions (
    id integer NOT NULL,
    action character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.up_permissions OWNER TO postgres;

--
-- Name: up_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.up_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.up_permissions_id_seq OWNER TO postgres;

--
-- Name: up_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.up_permissions_id_seq OWNED BY public.up_permissions.id;


--
-- Name: up_permissions_role_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.up_permissions_role_links (
    id integer NOT NULL,
    permission_id integer,
    role_id integer,
    permission_order double precision
);


ALTER TABLE public.up_permissions_role_links OWNER TO postgres;

--
-- Name: up_permissions_role_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.up_permissions_role_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.up_permissions_role_links_id_seq OWNER TO postgres;

--
-- Name: up_permissions_role_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.up_permissions_role_links_id_seq OWNED BY public.up_permissions_role_links.id;


--
-- Name: up_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.up_roles (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    type character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.up_roles OWNER TO postgres;

--
-- Name: up_roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.up_roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.up_roles_id_seq OWNER TO postgres;

--
-- Name: up_roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.up_roles_id_seq OWNED BY public.up_roles.id;


--
-- Name: up_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.up_users (
    id integer NOT NULL,
    username character varying(255),
    email character varying(255),
    provider character varying(255),
    password character varying(255),
    reset_password_token character varying(255),
    confirmation_token character varying(255),
    confirmed boolean,
    blocked boolean,
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.up_users OWNER TO postgres;

--
-- Name: up_users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.up_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.up_users_id_seq OWNER TO postgres;

--
-- Name: up_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.up_users_id_seq OWNED BY public.up_users.id;


--
-- Name: up_users_role_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.up_users_role_links (
    id integer NOT NULL,
    user_id integer,
    role_id integer,
    user_order double precision
);


ALTER TABLE public.up_users_role_links OWNER TO postgres;

--
-- Name: up_users_role_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.up_users_role_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.up_users_role_links_id_seq OWNER TO postgres;

--
-- Name: up_users_role_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.up_users_role_links_id_seq OWNED BY public.up_users_role_links.id;


--
-- Name: upload_folders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upload_folders (
    id integer NOT NULL,
    name character varying(255),
    path_id integer,
    path character varying(255),
    created_at timestamp(6) without time zone,
    updated_at timestamp(6) without time zone,
    created_by_id integer,
    updated_by_id integer
);


ALTER TABLE public.upload_folders OWNER TO postgres;

--
-- Name: upload_folders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.upload_folders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.upload_folders_id_seq OWNER TO postgres;

--
-- Name: upload_folders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.upload_folders_id_seq OWNED BY public.upload_folders.id;


--
-- Name: upload_folders_parent_links; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.upload_folders_parent_links (
    id integer NOT NULL,
    folder_id integer,
    inv_folder_id integer,
    folder_order double precision
);


ALTER TABLE public.upload_folders_parent_links OWNER TO postgres;

--
-- Name: upload_folders_parent_links_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.upload_folders_parent_links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.upload_folders_parent_links_id_seq OWNER TO postgres;

--
-- Name: upload_folders_parent_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.upload_folders_parent_links_id_seq OWNED BY public.upload_folders_parent_links.id;


--
-- Name: admin_permissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_permissions ALTER COLUMN id SET DEFAULT nextval('public.admin_permissions_id_seq'::regclass);


--
-- Name: admin_permissions_role_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_permissions_role_links ALTER COLUMN id SET DEFAULT nextval('public.admin_permissions_role_links_id_seq'::regclass);


--
-- Name: admin_roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_roles ALTER COLUMN id SET DEFAULT nextval('public.admin_roles_id_seq'::regclass);


--
-- Name: admin_users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_users ALTER COLUMN id SET DEFAULT nextval('public.admin_users_id_seq'::regclass);


--
-- Name: admin_users_roles_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_users_roles_links ALTER COLUMN id SET DEFAULT nextval('public.admin_users_roles_links_id_seq'::regclass);


--
-- Name: components_elements_buttons id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_buttons ALTER COLUMN id SET DEFAULT nextval('public.components_elements_buttons_id_seq'::regclass);


--
-- Name: components_elements_buttons_arrays id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_buttons_arrays ALTER COLUMN id SET DEFAULT nextval('public.components_elements_buttons_arrays_id_seq'::regclass);


--
-- Name: components_elements_buttons_arrays_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_buttons_arrays_components ALTER COLUMN id SET DEFAULT nextval('public.components_elements_buttons_arrays_components_id_seq'::regclass);


--
-- Name: components_elements_buttons_flyout_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_buttons_flyout_links ALTER COLUMN id SET DEFAULT nextval('public.components_elements_buttons_flyout_links_id_seq'::regclass);


--
-- Name: components_elements_date_values id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_date_values ALTER COLUMN id SET DEFAULT nextval('public.components_elements_date_values_id_seq'::regclass);


--
-- Name: components_elements_faqs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_faqs ALTER COLUMN id SET DEFAULT nextval('public.components_elements_faqs_id_seq'::regclass);


--
-- Name: components_elements_features id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_features ALTER COLUMN id SET DEFAULT nextval('public.components_elements_features_id_seq'::regclass);


--
-- Name: components_elements_fonts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_fonts ALTER COLUMN id SET DEFAULT nextval('public.components_elements_fonts_id_seq'::regclass);


--
-- Name: components_elements_input_options id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_input_options ALTER COLUMN id SET DEFAULT nextval('public.components_elements_input_options_id_seq'::regclass);


--
-- Name: components_elements_inputs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_inputs ALTER COLUMN id SET DEFAULT nextval('public.components_elements_inputs_id_seq'::regclass);


--
-- Name: components_elements_inputs_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_inputs_components ALTER COLUMN id SET DEFAULT nextval('public.components_elements_inputs_components_id_seq'::regclass);


--
-- Name: components_elements_logotypes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_logotypes ALTER COLUMN id SET DEFAULT nextval('public.components_elements_logotypes_id_seq'::regclass);


--
-- Name: components_elements_recievers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_recievers ALTER COLUMN id SET DEFAULT nextval('public.components_elements_recievers_id_seq'::regclass);


--
-- Name: components_elements_recievers_admin_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_recievers_admin_links ALTER COLUMN id SET DEFAULT nextval('public.components_elements_recievers_admin_links_id_seq'::regclass);


--
-- Name: components_elements_recievers_user_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_recievers_user_links ALTER COLUMN id SET DEFAULT nextval('public.components_elements_recievers_user_links_id_seq'::regclass);


--
-- Name: components_elements_request_inputs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_request_inputs ALTER COLUMN id SET DEFAULT nextval('public.components_elements_request_inputs_id_seq'::regclass);


--
-- Name: components_elements_request_inputs_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_request_inputs_components ALTER COLUMN id SET DEFAULT nextval('public.components_elements_request_inputs_components_id_seq'::regclass);


--
-- Name: components_elements_slides id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_slides ALTER COLUMN id SET DEFAULT nextval('public.components_elements_slides_id_seq'::regclass);


--
-- Name: components_elements_slides_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_slides_components ALTER COLUMN id SET DEFAULT nextval('public.components_elements_slides_components_id_seq'::regclass);


--
-- Name: components_functions_configs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_functions_configs ALTER COLUMN id SET DEFAULT nextval('public.components_functions_configs_id_seq'::regclass);


--
-- Name: components_functions_form_side_effects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_functions_form_side_effects ALTER COLUMN id SET DEFAULT nextval('public.components_functions_form_side_effects_id_seq'::regclass);


--
-- Name: components_functions_form_side_effects_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_functions_form_side_effects_components ALTER COLUMN id SET DEFAULT nextval('public.components_functions_form_side_effects_components_id_seq'::regclass);


--
-- Name: components_page_blocks_alert_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_alert_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_alert_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_alert_blocks_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_alert_blocks_components ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_alert_blocks_components_id_seq'::regclass);


--
-- Name: components_page_blocks_contact_section_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_contact_section_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_contact_section_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_contact_section_blocks_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_contact_section_blocks_components ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_contact_section_blocks_components_id_seq'::regclass);


--
-- Name: components_page_blocks_contact_section_blocks_form_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_contact_section_blocks_form_links ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_contact_section_blocks_form_links_id_seq'::regclass);


--
-- Name: components_page_blocks_cta_section_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_cta_section_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_cta_section_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_cta_section_blocks_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_cta_section_blocks_components ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_cta_section_blocks_components_id_seq'::regclass);


--
-- Name: components_page_blocks_faqs_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_faqs_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_faqs_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_faqs_blocks_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_faqs_blocks_components ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_faqs_blocks_components_id_seq'::regclass);


--
-- Name: components_page_blocks_features_section_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_features_section_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_features_section_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_features_section_blocks_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_features_section_blocks_components ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_features_section_blocks_component_id_seq'::regclass);


--
-- Name: components_page_blocks_footer_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_footer_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_footer_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_footer_blocks_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_footer_blocks_components ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_footer_blocks_components_id_seq'::regclass);


--
-- Name: components_page_blocks_header_section_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_header_section_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_header_section_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_hero_section_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_hero_section_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_hero_section_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_hero_section_blocks_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_hero_section_blocks_components ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_hero_section_blocks_components_id_seq'::regclass);


--
-- Name: components_page_blocks_incentives_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_incentives_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_incentives_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_incentives_blocks_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_incentives_blocks_components ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_incentives_blocks_components_id_seq'::regclass);


--
-- Name: components_page_blocks_logotypes_cloud_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_logotypes_cloud_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_logotypes_cloud_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_logotypes_cloud_blocks_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_logotypes_cloud_blocks_components ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_logotypes_cloud_blocks_components_id_seq'::regclass);


--
-- Name: components_page_blocks_navbar_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_navbar_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_navbar_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_navbar_blocks_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_navbar_blocks_components ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_navbar_blocks_components_id_seq'::regclass);


--
-- Name: components_page_blocks_not_found_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_not_found_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_not_found_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_not_found_blocks_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_not_found_blocks_components ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_not_found_blocks_components_id_seq'::regclass);


--
-- Name: components_page_blocks_pricing_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_pricing_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_pricing_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_pricing_blocks_tiers_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_pricing_blocks_tiers_links ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_pricing_blocks_tiers_links_id_seq'::regclass);


--
-- Name: components_page_blocks_reviews_list_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_reviews_list_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_reviews_list_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_reviews_list_blocks_reviews_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_reviews_list_blocks_reviews_links ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_reviews_list_blocks_reviews_links_id_seq'::regclass);


--
-- Name: components_page_blocks_reviews_table_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_reviews_table_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_reviews_table_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_slider_blocks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_slider_blocks ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_slider_blocks_id_seq'::regclass);


--
-- Name: components_page_blocks_slider_blocks_slider_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_slider_blocks_slider_links ALTER COLUMN id SET DEFAULT nextval('public.components_page_blocks_slider_blocks_slider_links_id_seq'::regclass);


--
-- Name: configurations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.configurations ALTER COLUMN id SET DEFAULT nextval('public.configurations_id_seq'::regclass);


--
-- Name: configurations_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.configurations_components ALTER COLUMN id SET DEFAULT nextval('public.configurations_components_id_seq'::regclass);


--
-- Name: currencies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.currencies ALTER COLUMN id SET DEFAULT nextval('public.currencies_id_seq'::regclass);


--
-- Name: currencies_localizations_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.currencies_localizations_links ALTER COLUMN id SET DEFAULT nextval('public.currencies_localizations_links_id_seq'::regclass);


--
-- Name: email_templates id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_templates ALTER COLUMN id SET DEFAULT nextval('public.email_templates_id_seq'::regclass);


--
-- Name: files id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files ALTER COLUMN id SET DEFAULT nextval('public.files_id_seq'::regclass);


--
-- Name: files_folder_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files_folder_links ALTER COLUMN id SET DEFAULT nextval('public.files_folder_links_id_seq'::regclass);


--
-- Name: files_related_morphs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files_related_morphs ALTER COLUMN id SET DEFAULT nextval('public.files_related_morphs_id_seq'::regclass);


--
-- Name: flyouts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flyouts ALTER COLUMN id SET DEFAULT nextval('public.flyouts_id_seq'::regclass);


--
-- Name: flyouts_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flyouts_components ALTER COLUMN id SET DEFAULT nextval('public.flyouts_components_id_seq'::regclass);


--
-- Name: flyouts_localizations_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flyouts_localizations_links ALTER COLUMN id SET DEFAULT nextval('public.flyouts_localizations_links_id_seq'::regclass);


--
-- Name: footers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers ALTER COLUMN id SET DEFAULT nextval('public.footers_id_seq'::regclass);


--
-- Name: footers_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers_components ALTER COLUMN id SET DEFAULT nextval('public.footers_components_id_seq'::regclass);


--
-- Name: footers_localizations_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers_localizations_links ALTER COLUMN id SET DEFAULT nextval('public.footers_localizations_links_id_seq'::regclass);


--
-- Name: form_requests id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_requests ALTER COLUMN id SET DEFAULT nextval('public.form_requests_id_seq'::regclass);


--
-- Name: form_requests_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_requests_components ALTER COLUMN id SET DEFAULT nextval('public.form_requests_components_id_seq'::regclass);


--
-- Name: form_requests_form_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_requests_form_links ALTER COLUMN id SET DEFAULT nextval('public.form_requests_form_links_id_seq'::regclass);


--
-- Name: forms id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms ALTER COLUMN id SET DEFAULT nextval('public.forms_id_seq'::regclass);


--
-- Name: forms_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms_components ALTER COLUMN id SET DEFAULT nextval('public.forms_components_id_seq'::regclass);


--
-- Name: forms_localizations_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms_localizations_links ALTER COLUMN id SET DEFAULT nextval('public.forms_localizations_links_id_seq'::regclass);


--
-- Name: i18n_locale id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.i18n_locale ALTER COLUMN id SET DEFAULT nextval('public.i18n_locale_id_seq'::regclass);


--
-- Name: layouts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts ALTER COLUMN id SET DEFAULT nextval('public.layouts_id_seq'::regclass);


--
-- Name: layouts_footer_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_footer_links ALTER COLUMN id SET DEFAULT nextval('public.layouts_footer_links_id_seq'::regclass);


--
-- Name: layouts_localizations_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_localizations_links ALTER COLUMN id SET DEFAULT nextval('public.layouts_localizations_links_id_seq'::regclass);


--
-- Name: layouts_modals_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_modals_links ALTER COLUMN id SET DEFAULT nextval('public.layouts_modals_links_id_seq'::regclass);


--
-- Name: layouts_navbar_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_navbar_links ALTER COLUMN id SET DEFAULT nextval('public.layouts_navbar_links_id_seq'::regclass);


--
-- Name: layouts_sidebar_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_sidebar_links ALTER COLUMN id SET DEFAULT nextval('public.layouts_sidebar_links_id_seq'::regclass);


--
-- Name: layouts_slide_overs_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_slide_overs_links ALTER COLUMN id SET DEFAULT nextval('public.layouts_slide_overs_links_id_seq'::regclass);


--
-- Name: layouts_topbar_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_topbar_links ALTER COLUMN id SET DEFAULT nextval('public.layouts_topbar_links_id_seq'::regclass);


--
-- Name: loaders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.loaders ALTER COLUMN id SET DEFAULT nextval('public.loaders_id_seq'::regclass);


--
-- Name: metatags id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metatags ALTER COLUMN id SET DEFAULT nextval('public.metatags_id_seq'::regclass);


--
-- Name: metatags_localizations_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metatags_localizations_links ALTER COLUMN id SET DEFAULT nextval('public.metatags_localizations_links_id_seq'::regclass);


--
-- Name: modals id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modals ALTER COLUMN id SET DEFAULT nextval('public.modals_id_seq'::regclass);


--
-- Name: modals_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modals_components ALTER COLUMN id SET DEFAULT nextval('public.modals_components_id_seq'::regclass);


--
-- Name: modals_localizations_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modals_localizations_links ALTER COLUMN id SET DEFAULT nextval('public.modals_localizations_links_id_seq'::regclass);


--
-- Name: navbars id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbars ALTER COLUMN id SET DEFAULT nextval('public.navbars_id_seq'::regclass);


--
-- Name: navbars_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbars_components ALTER COLUMN id SET DEFAULT nextval('public.navbars_components_id_seq'::regclass);


--
-- Name: navbars_localizations_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbars_localizations_links ALTER COLUMN id SET DEFAULT nextval('public.navbars_localizations_links_id_seq'::regclass);


--
-- Name: pages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages ALTER COLUMN id SET DEFAULT nextval('public.pages_id_seq'::regclass);


--
-- Name: pages_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_components ALTER COLUMN id SET DEFAULT nextval('public.pages_components_id_seq'::regclass);


--
-- Name: pages_layout_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_layout_links ALTER COLUMN id SET DEFAULT nextval('public.pages_layout_links_id_seq'::regclass);


--
-- Name: pages_localizations_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_localizations_links ALTER COLUMN id SET DEFAULT nextval('public.pages_localizations_links_id_seq'::regclass);


--
-- Name: pages_metatag_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_metatag_links ALTER COLUMN id SET DEFAULT nextval('public.pages_metatag_links_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Name: robots id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.robots ALTER COLUMN id SET DEFAULT nextval('public.robots_id_seq'::regclass);


--
-- Name: sidebars id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sidebars ALTER COLUMN id SET DEFAULT nextval('public.sidebars_id_seq'::regclass);


--
-- Name: sidebars_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sidebars_components ALTER COLUMN id SET DEFAULT nextval('public.sidebars_components_id_seq'::regclass);


--
-- Name: sidebars_localizations_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sidebars_localizations_links ALTER COLUMN id SET DEFAULT nextval('public.sidebars_localizations_links_id_seq'::regclass);


--
-- Name: slide_overs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slide_overs ALTER COLUMN id SET DEFAULT nextval('public.slide_overs_id_seq'::regclass);


--
-- Name: slide_overs_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slide_overs_components ALTER COLUMN id SET DEFAULT nextval('public.slide_overs_components_id_seq'::regclass);


--
-- Name: slide_overs_localizations_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slide_overs_localizations_links ALTER COLUMN id SET DEFAULT nextval('public.slide_overs_localizations_links_id_seq'::regclass);


--
-- Name: sliders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders ALTER COLUMN id SET DEFAULT nextval('public.sliders_id_seq'::regclass);


--
-- Name: sliders_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders_components ALTER COLUMN id SET DEFAULT nextval('public.sliders_components_id_seq'::regclass);


--
-- Name: sliders_localizations_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders_localizations_links ALTER COLUMN id SET DEFAULT nextval('public.sliders_localizations_links_id_seq'::regclass);


--
-- Name: strapi_api_token_permissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_api_token_permissions ALTER COLUMN id SET DEFAULT nextval('public.strapi_api_token_permissions_id_seq'::regclass);


--
-- Name: strapi_api_token_permissions_token_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_api_token_permissions_token_links ALTER COLUMN id SET DEFAULT nextval('public.strapi_api_token_permissions_token_links_id_seq'::regclass);


--
-- Name: strapi_api_tokens id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_api_tokens ALTER COLUMN id SET DEFAULT nextval('public.strapi_api_tokens_id_seq'::regclass);


--
-- Name: strapi_core_store_settings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_core_store_settings ALTER COLUMN id SET DEFAULT nextval('public.strapi_core_store_settings_id_seq'::regclass);


--
-- Name: strapi_database_schema id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_database_schema ALTER COLUMN id SET DEFAULT nextval('public.strapi_database_schema_id_seq'::regclass);


--
-- Name: strapi_migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_migrations ALTER COLUMN id SET DEFAULT nextval('public.strapi_migrations_id_seq'::regclass);


--
-- Name: strapi_transfer_token_permissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions ALTER COLUMN id SET DEFAULT nextval('public.strapi_transfer_token_permissions_id_seq'::regclass);


--
-- Name: strapi_transfer_token_permissions_token_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions_token_links ALTER COLUMN id SET DEFAULT nextval('public.strapi_transfer_token_permissions_token_links_id_seq'::regclass);


--
-- Name: strapi_transfer_tokens id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_transfer_tokens ALTER COLUMN id SET DEFAULT nextval('public.strapi_transfer_tokens_id_seq'::regclass);


--
-- Name: strapi_webhooks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_webhooks ALTER COLUMN id SET DEFAULT nextval('public.strapi_webhooks_id_seq'::regclass);


--
-- Name: telegrams id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telegrams ALTER COLUMN id SET DEFAULT nextval('public.telegrams_id_seq'::regclass);


--
-- Name: themes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.themes ALTER COLUMN id SET DEFAULT nextval('public.themes_id_seq'::regclass);


--
-- Name: themes_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.themes_components ALTER COLUMN id SET DEFAULT nextval('public.themes_components_id_seq'::regclass);


--
-- Name: tiers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers ALTER COLUMN id SET DEFAULT nextval('public.tiers_id_seq'::regclass);


--
-- Name: tiers_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers_components ALTER COLUMN id SET DEFAULT nextval('public.tiers_components_id_seq'::regclass);


--
-- Name: tiers_currency_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers_currency_links ALTER COLUMN id SET DEFAULT nextval('public.tiers_currency_links_id_seq'::regclass);


--
-- Name: tiers_localizations_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers_localizations_links ALTER COLUMN id SET DEFAULT nextval('public.tiers_localizations_links_id_seq'::regclass);


--
-- Name: topbars id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topbars ALTER COLUMN id SET DEFAULT nextval('public.topbars_id_seq'::regclass);


--
-- Name: topbars_components id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topbars_components ALTER COLUMN id SET DEFAULT nextval('public.topbars_components_id_seq'::regclass);


--
-- Name: topbars_localizations_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topbars_localizations_links ALTER COLUMN id SET DEFAULT nextval('public.topbars_localizations_links_id_seq'::regclass);


--
-- Name: up_permissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions ALTER COLUMN id SET DEFAULT nextval('public.up_permissions_id_seq'::regclass);


--
-- Name: up_permissions_role_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions_role_links ALTER COLUMN id SET DEFAULT nextval('public.up_permissions_role_links_id_seq'::regclass);


--
-- Name: up_roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_roles ALTER COLUMN id SET DEFAULT nextval('public.up_roles_id_seq'::regclass);


--
-- Name: up_users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_users ALTER COLUMN id SET DEFAULT nextval('public.up_users_id_seq'::regclass);


--
-- Name: up_users_role_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_users_role_links ALTER COLUMN id SET DEFAULT nextval('public.up_users_role_links_id_seq'::regclass);


--
-- Name: upload_folders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upload_folders ALTER COLUMN id SET DEFAULT nextval('public.upload_folders_id_seq'::regclass);


--
-- Name: upload_folders_parent_links id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upload_folders_parent_links ALTER COLUMN id SET DEFAULT nextval('public.upload_folders_parent_links_id_seq'::regclass);


--
-- Data for Name: admin_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admin_permissions (id, action, subject, properties, conditions, created_at, updated_at, created_by_id, updated_by_id, action_parameters) FROM stdin;
1	plugin::content-manager.explorer.create	api::configuration.configuration	{"fields": ["configs.provider", "configs.config"]}	[]	2023-09-06 02:41:10.81	2023-09-06 02:41:10.81	\N	\N	\N
2	plugin::content-manager.explorer.create	api::currency.currency	{"fields": ["title", "unicode", "is_default", "tiers"]}	[]	2023-09-06 02:41:10.828	2023-09-06 02:41:10.828	\N	\N	\N
3	plugin::content-manager.explorer.create	api::flyout.flyout	{"fields": ["variant", "page_blocks", "title", "uid", "class_name"]}	[]	2023-09-06 02:41:10.835	2023-09-06 02:41:10.835	\N	\N	\N
4	plugin::content-manager.explorer.create	api::footer.footer	{"fields": ["title", "uid", "layouts", "page_blocks", "variant", "class_name"]}	[]	2023-09-06 02:41:10.84	2023-09-06 02:41:10.84	\N	\N	\N
5	plugin::content-manager.explorer.create	api::form.form	{"fields": ["inputs.placeholder", "inputs.variant", "inputs.is_required", "inputs.value", "inputs.name", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.label", "inputs.class_name", "inputs.type", "inputs.multiple", "inputs.min", "inputs.max", "inputs.step", "inputs.media", "inputs.additional_media", "inputs.extra_media", "class_name", "additional_attributes", "variant", "button.url", "button.media", "button.description", "button.variant", "button.additional_media", "button.title", "button.additional_attributes", "button.class_name", "button.flyout", "form_requests", "uid", "side_effects.type", "side_effects.recievers.identifier", "side_effects.recievers.admin", "side_effects.recievers.user", "side_effects.provider", "title"]}	[]	2023-09-06 02:41:10.845	2023-09-06 02:41:10.845	\N	\N	\N
6	plugin::content-manager.explorer.create	api::form-request.form-request	{"fields": ["inputs.key", "inputs.value", "inputs.files", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.is_true", "inputs.option.title", "inputs.option.description", "inputs.option.media", "inputs.option.additional_media", "inputs.date_value", "inputs.datetime_value", "inputs.dates.date_value", "inputs.dates.datetime_value", "inputs.dates.time_value", "files", "form"]}	[]	2023-09-06 02:41:10.85	2023-09-06 02:41:10.85	\N	\N	\N
7	plugin::content-manager.explorer.create	api::layout.layout	{"fields": ["title", "uid", "sidebar", "variant", "topbar", "footer", "slide_overs", "modals", "navbar", "class_name", "pages"]}	[]	2023-09-06 02:41:10.856	2023-09-06 02:41:10.856	\N	\N	\N
8	plugin::content-manager.explorer.create	api::loader.loader	{"fields": ["variant", "media", "additional_media", "class_name", "anchor", "title", "subtitle", "description"]}	[]	2023-09-06 02:41:10.861	2023-09-06 02:41:10.861	\N	\N	\N
9	plugin::content-manager.explorer.create	api::metatag.metatag	{"fields": ["title", "description", "script", "gtm_key", "favicon", "pages", "is_default"]}	[]	2023-09-06 02:41:10.867	2023-09-06 02:41:10.867	\N	\N	\N
10	plugin::content-manager.explorer.create	api::modal.modal	{"fields": ["uid", "page_blocks", "dialog_panel_class_name", "variant", "title", "layouts", "class_name"]}	[]	2023-09-06 02:41:10.872	2023-09-06 02:41:10.872	\N	\N	\N
11	plugin::content-manager.explorer.create	api::navbar.navbar	{"fields": ["title", "uid", "page_blocks", "variant", "class_name", "layouts", "position", "side"]}	[]	2023-09-06 02:41:10.878	2023-09-06 02:41:10.878	\N	\N	\N
12	plugin::content-manager.explorer.create	api::page.page	{"fields": ["title", "url", "layout", "page_blocks", "metatag"]}	[]	2023-09-06 02:41:10.882	2023-09-06 02:41:10.882	\N	\N	\N
13	plugin::content-manager.explorer.create	api::review.review	{"fields": ["name", "title", "description", "subtitle", "rating", "media", "additional_media"]}	[]	2023-09-06 02:41:10.887	2023-09-06 02:41:10.887	\N	\N	\N
14	plugin::content-manager.explorer.create	api::robot.robot	{"fields": ["robots"]}	[]	2023-09-06 02:41:10.892	2023-09-06 02:41:10.892	\N	\N	\N
15	plugin::content-manager.explorer.create	api::sidebar.sidebar	{"fields": ["variant", "title", "uid", "page_blocks", "class_name", "layouts", "side"]}	[]	2023-09-06 02:41:10.897	2023-09-06 02:41:10.897	\N	\N	\N
16	plugin::content-manager.explorer.create	api::slide-over.slide-over	{"fields": ["variant", "title", "uid", "class_name", "page_blocks", "layouts"]}	[]	2023-09-06 02:41:10.908	2023-09-06 02:41:10.908	\N	\N	\N
17	plugin::content-manager.explorer.create	api::slider.slider	{"fields": ["variant", "slides.title", "slides.description", "slides.subtitle", "slides.media", "slides.buttons.url", "slides.buttons.media", "slides.buttons.description", "slides.buttons.variant", "slides.buttons.additional_media", "slides.buttons.title", "slides.buttons.additional_attributes", "slides.buttons.class_name", "slides.buttons.flyout", "slides.additional_media", "show_backdrop", "show_full_screen", "show_previews", "class_name", "aspect_ratio_class_name", "title", "uid"]}	[]	2023-09-06 02:41:10.917	2023-09-06 02:41:10.917	\N	\N	\N
18	plugin::content-manager.explorer.create	api::telegram.telegram	{"fields": ["name"]}	[]	2023-09-06 02:41:10.924	2023-09-06 02:41:10.924	\N	\N	\N
19	plugin::content-manager.explorer.create	api::theme.theme	{"fields": ["theme", "fonts.media", "fonts.weight", "fonts.style", "fonts.variant"]}	[]	2023-09-06 02:41:10.929	2023-09-06 02:41:10.929	\N	\N	\N
20	plugin::content-manager.explorer.create	api::tier.tier	{"fields": ["title", "description", "price", "currency", "type", "period", "features.media", "features.description", "features.additional_media", "features.title", "features.subtitle", "old_price", "buttons.url", "buttons.media", "buttons.description", "buttons.variant", "buttons.additional_media", "buttons.title", "buttons.additional_attributes", "buttons.class_name", "buttons.flyout"]}	[]	2023-09-06 02:41:10.934	2023-09-06 02:41:10.934	\N	\N	\N
21	plugin::content-manager.explorer.create	api::topbar.topbar	{"fields": ["title", "uid", "variant", "page_blocks", "layouts", "class_name", "position", "side"]}	[]	2023-09-06 02:41:10.939	2023-09-06 02:41:10.939	\N	\N	\N
22	plugin::content-manager.explorer.read	api::configuration.configuration	{"fields": ["configs.provider", "configs.config"]}	[]	2023-09-06 02:41:10.944	2023-09-06 02:41:10.944	\N	\N	\N
23	plugin::content-manager.explorer.read	api::currency.currency	{"fields": ["title", "unicode", "is_default", "tiers"]}	[]	2023-09-06 02:41:10.951	2023-09-06 02:41:10.951	\N	\N	\N
24	plugin::content-manager.explorer.read	api::flyout.flyout	{"fields": ["variant", "page_blocks", "title", "uid", "class_name"]}	[]	2023-09-06 02:41:10.955	2023-09-06 02:41:10.955	\N	\N	\N
25	plugin::content-manager.explorer.read	api::footer.footer	{"fields": ["title", "uid", "layouts", "page_blocks", "variant", "class_name"]}	[]	2023-09-06 02:41:10.96	2023-09-06 02:41:10.96	\N	\N	\N
26	plugin::content-manager.explorer.read	api::form.form	{"fields": ["inputs.placeholder", "inputs.variant", "inputs.is_required", "inputs.value", "inputs.name", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.label", "inputs.class_name", "inputs.type", "inputs.multiple", "inputs.min", "inputs.max", "inputs.step", "inputs.media", "inputs.additional_media", "inputs.extra_media", "class_name", "additional_attributes", "variant", "button.url", "button.media", "button.description", "button.variant", "button.additional_media", "button.title", "button.additional_attributes", "button.class_name", "button.flyout", "form_requests", "uid", "side_effects.type", "side_effects.recievers.identifier", "side_effects.recievers.admin", "side_effects.recievers.user", "side_effects.provider", "title"]}	[]	2023-09-06 02:41:10.965	2023-09-06 02:41:10.965	\N	\N	\N
27	plugin::content-manager.explorer.read	api::form-request.form-request	{"fields": ["inputs.key", "inputs.value", "inputs.files", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.is_true", "inputs.option.title", "inputs.option.description", "inputs.option.media", "inputs.option.additional_media", "inputs.date_value", "inputs.datetime_value", "inputs.dates.date_value", "inputs.dates.datetime_value", "inputs.dates.time_value", "files", "form"]}	[]	2023-09-06 02:41:10.97	2023-09-06 02:41:10.97	\N	\N	\N
28	plugin::content-manager.explorer.read	api::layout.layout	{"fields": ["title", "uid", "sidebar", "variant", "topbar", "footer", "slide_overs", "modals", "navbar", "class_name", "pages"]}	[]	2023-09-06 02:41:10.979	2023-09-06 02:41:10.979	\N	\N	\N
29	plugin::content-manager.explorer.read	api::loader.loader	{"fields": ["variant", "media", "additional_media", "class_name", "anchor", "title", "subtitle", "description"]}	[]	2023-09-06 02:41:10.984	2023-09-06 02:41:10.984	\N	\N	\N
30	plugin::content-manager.explorer.read	api::metatag.metatag	{"fields": ["title", "description", "script", "gtm_key", "favicon", "pages", "is_default"]}	[]	2023-09-06 02:41:10.989	2023-09-06 02:41:10.989	\N	\N	\N
31	plugin::content-manager.explorer.read	api::modal.modal	{"fields": ["uid", "page_blocks", "dialog_panel_class_name", "variant", "title", "layouts", "class_name"]}	[]	2023-09-06 02:41:10.994	2023-09-06 02:41:10.994	\N	\N	\N
32	plugin::content-manager.explorer.read	api::navbar.navbar	{"fields": ["title", "uid", "page_blocks", "variant", "class_name", "layouts", "position", "side"]}	[]	2023-09-06 02:41:10.999	2023-09-06 02:41:10.999	\N	\N	\N
33	plugin::content-manager.explorer.read	api::page.page	{"fields": ["title", "url", "layout", "page_blocks", "metatag"]}	[]	2023-09-06 02:41:11.004	2023-09-06 02:41:11.004	\N	\N	\N
34	plugin::content-manager.explorer.read	api::review.review	{"fields": ["name", "title", "description", "subtitle", "rating", "media", "additional_media"]}	[]	2023-09-06 02:41:11.009	2023-09-06 02:41:11.009	\N	\N	\N
35	plugin::content-manager.explorer.read	api::robot.robot	{"fields": ["robots"]}	[]	2023-09-06 02:41:11.013	2023-09-06 02:41:11.013	\N	\N	\N
36	plugin::content-manager.explorer.read	api::sidebar.sidebar	{"fields": ["variant", "title", "uid", "page_blocks", "class_name", "layouts", "side"]}	[]	2023-09-06 02:41:11.022	2023-09-06 02:41:11.022	\N	\N	\N
37	plugin::content-manager.explorer.read	api::slide-over.slide-over	{"fields": ["variant", "title", "uid", "class_name", "page_blocks", "layouts"]}	[]	2023-09-06 02:41:11.027	2023-09-06 02:41:11.027	\N	\N	\N
38	plugin::content-manager.explorer.read	api::slider.slider	{"fields": ["variant", "slides.title", "slides.description", "slides.subtitle", "slides.media", "slides.buttons.url", "slides.buttons.media", "slides.buttons.description", "slides.buttons.variant", "slides.buttons.additional_media", "slides.buttons.title", "slides.buttons.additional_attributes", "slides.buttons.class_name", "slides.buttons.flyout", "slides.additional_media", "show_backdrop", "show_full_screen", "show_previews", "class_name", "aspect_ratio_class_name", "title", "uid"]}	[]	2023-09-06 02:41:11.032	2023-09-06 02:41:11.032	\N	\N	\N
39	plugin::content-manager.explorer.read	api::telegram.telegram	{"fields": ["name"]}	[]	2023-09-06 02:41:11.037	2023-09-06 02:41:11.037	\N	\N	\N
40	plugin::content-manager.explorer.read	api::theme.theme	{"fields": ["theme", "fonts.media", "fonts.weight", "fonts.style", "fonts.variant"]}	[]	2023-09-06 02:41:11.041	2023-09-06 02:41:11.041	\N	\N	\N
41	plugin::content-manager.explorer.read	api::tier.tier	{"fields": ["title", "description", "price", "currency", "type", "period", "features.media", "features.description", "features.additional_media", "features.title", "features.subtitle", "old_price", "buttons.url", "buttons.media", "buttons.description", "buttons.variant", "buttons.additional_media", "buttons.title", "buttons.additional_attributes", "buttons.class_name", "buttons.flyout"]}	[]	2023-09-06 02:41:11.046	2023-09-06 02:41:11.046	\N	\N	\N
42	plugin::content-manager.explorer.read	api::topbar.topbar	{"fields": ["title", "uid", "variant", "page_blocks", "layouts", "class_name", "position", "side"]}	[]	2023-09-06 02:41:11.051	2023-09-06 02:41:11.051	\N	\N	\N
43	plugin::content-manager.explorer.update	api::configuration.configuration	{"fields": ["configs.provider", "configs.config"]}	[]	2023-09-06 02:41:11.057	2023-09-06 02:41:11.057	\N	\N	\N
44	plugin::content-manager.explorer.update	api::currency.currency	{"fields": ["title", "unicode", "is_default", "tiers"]}	[]	2023-09-06 02:41:11.062	2023-09-06 02:41:11.062	\N	\N	\N
45	plugin::content-manager.explorer.update	api::flyout.flyout	{"fields": ["variant", "page_blocks", "title", "uid", "class_name"]}	[]	2023-09-06 02:41:11.067	2023-09-06 02:41:11.067	\N	\N	\N
46	plugin::content-manager.explorer.update	api::footer.footer	{"fields": ["title", "uid", "layouts", "page_blocks", "variant", "class_name"]}	[]	2023-09-06 02:41:11.071	2023-09-06 02:41:11.071	\N	\N	\N
47	plugin::content-manager.explorer.update	api::form.form	{"fields": ["inputs.placeholder", "inputs.variant", "inputs.is_required", "inputs.value", "inputs.name", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.label", "inputs.class_name", "inputs.type", "inputs.multiple", "inputs.min", "inputs.max", "inputs.step", "inputs.media", "inputs.additional_media", "inputs.extra_media", "class_name", "additional_attributes", "variant", "button.url", "button.media", "button.description", "button.variant", "button.additional_media", "button.title", "button.additional_attributes", "button.class_name", "button.flyout", "form_requests", "uid", "side_effects.type", "side_effects.recievers.identifier", "side_effects.recievers.admin", "side_effects.recievers.user", "side_effects.provider", "title"]}	[]	2023-09-06 02:41:11.076	2023-09-06 02:41:11.076	\N	\N	\N
48	plugin::content-manager.explorer.update	api::form-request.form-request	{"fields": ["inputs.key", "inputs.value", "inputs.files", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.is_true", "inputs.option.title", "inputs.option.description", "inputs.option.media", "inputs.option.additional_media", "inputs.date_value", "inputs.datetime_value", "inputs.dates.date_value", "inputs.dates.datetime_value", "inputs.dates.time_value", "files", "form"]}	[]	2023-09-06 02:41:11.081	2023-09-06 02:41:11.081	\N	\N	\N
49	plugin::content-manager.explorer.update	api::layout.layout	{"fields": ["title", "uid", "sidebar", "variant", "topbar", "footer", "slide_overs", "modals", "navbar", "class_name", "pages"]}	[]	2023-09-06 02:41:11.086	2023-09-06 02:41:11.086	\N	\N	\N
50	plugin::content-manager.explorer.update	api::loader.loader	{"fields": ["variant", "media", "additional_media", "class_name", "anchor", "title", "subtitle", "description"]}	[]	2023-09-06 02:41:11.09	2023-09-06 02:41:11.09	\N	\N	\N
51	plugin::content-manager.explorer.update	api::metatag.metatag	{"fields": ["title", "description", "script", "gtm_key", "favicon", "pages", "is_default"]}	[]	2023-09-06 02:41:11.095	2023-09-06 02:41:11.095	\N	\N	\N
52	plugin::content-manager.explorer.update	api::modal.modal	{"fields": ["uid", "page_blocks", "dialog_panel_class_name", "variant", "title", "layouts", "class_name"]}	[]	2023-09-06 02:41:11.1	2023-09-06 02:41:11.1	\N	\N	\N
103	plugin::upload.configure-view	\N	{}	[]	2023-09-06 02:41:11.363	2023-09-06 02:41:11.363	\N	\N	\N
104	plugin::upload.assets.create	\N	{}	[]	2023-09-06 02:41:11.368	2023-09-06 02:41:11.368	\N	\N	\N
53	plugin::content-manager.explorer.update	api::navbar.navbar	{"fields": ["title", "uid", "page_blocks", "variant", "class_name", "layouts", "position", "side"]}	[]	2023-09-06 02:41:11.104	2023-09-06 02:41:11.104	\N	\N	\N
54	plugin::content-manager.explorer.update	api::page.page	{"fields": ["title", "url", "layout", "page_blocks", "metatag"]}	[]	2023-09-06 02:41:11.11	2023-09-06 02:41:11.11	\N	\N	\N
55	plugin::content-manager.explorer.update	api::review.review	{"fields": ["name", "title", "description", "subtitle", "rating", "media", "additional_media"]}	[]	2023-09-06 02:41:11.115	2023-09-06 02:41:11.115	\N	\N	\N
56	plugin::content-manager.explorer.update	api::robot.robot	{"fields": ["robots"]}	[]	2023-09-06 02:41:11.119	2023-09-06 02:41:11.119	\N	\N	\N
57	plugin::content-manager.explorer.update	api::sidebar.sidebar	{"fields": ["variant", "title", "uid", "page_blocks", "class_name", "layouts", "side"]}	[]	2023-09-06 02:41:11.124	2023-09-06 02:41:11.124	\N	\N	\N
58	plugin::content-manager.explorer.update	api::slide-over.slide-over	{"fields": ["variant", "title", "uid", "class_name", "page_blocks", "layouts"]}	[]	2023-09-06 02:41:11.13	2023-09-06 02:41:11.13	\N	\N	\N
59	plugin::content-manager.explorer.update	api::slider.slider	{"fields": ["variant", "slides.title", "slides.description", "slides.subtitle", "slides.media", "slides.buttons.url", "slides.buttons.media", "slides.buttons.description", "slides.buttons.variant", "slides.buttons.additional_media", "slides.buttons.title", "slides.buttons.additional_attributes", "slides.buttons.class_name", "slides.buttons.flyout", "slides.additional_media", "show_backdrop", "show_full_screen", "show_previews", "class_name", "aspect_ratio_class_name", "title", "uid"]}	[]	2023-09-06 02:41:11.134	2023-09-06 02:41:11.134	\N	\N	\N
60	plugin::content-manager.explorer.update	api::telegram.telegram	{"fields": ["name"]}	[]	2023-09-06 02:41:11.139	2023-09-06 02:41:11.139	\N	\N	\N
61	plugin::content-manager.explorer.update	api::theme.theme	{"fields": ["theme", "fonts.media", "fonts.weight", "fonts.style", "fonts.variant"]}	[]	2023-09-06 02:41:11.144	2023-09-06 02:41:11.144	\N	\N	\N
62	plugin::content-manager.explorer.update	api::tier.tier	{"fields": ["title", "description", "price", "currency", "type", "period", "features.media", "features.description", "features.additional_media", "features.title", "features.subtitle", "old_price", "buttons.url", "buttons.media", "buttons.description", "buttons.variant", "buttons.additional_media", "buttons.title", "buttons.additional_attributes", "buttons.class_name", "buttons.flyout"]}	[]	2023-09-06 02:41:11.148	2023-09-06 02:41:11.148	\N	\N	\N
63	plugin::content-manager.explorer.update	api::topbar.topbar	{"fields": ["title", "uid", "variant", "page_blocks", "layouts", "class_name", "position", "side"]}	[]	2023-09-06 02:41:11.154	2023-09-06 02:41:11.154	\N	\N	\N
64	plugin::content-manager.explorer.delete	api::configuration.configuration	{}	[]	2023-09-06 02:41:11.159	2023-09-06 02:41:11.159	\N	\N	\N
69	plugin::content-manager.explorer.delete	api::form-request.form-request	{}	[]	2023-09-06 02:41:11.182	2023-09-06 02:41:11.182	\N	\N	\N
71	plugin::content-manager.explorer.delete	api::loader.loader	{}	[]	2023-09-06 02:41:11.193	2023-09-06 02:41:11.193	\N	\N	\N
76	plugin::content-manager.explorer.delete	api::review.review	{}	[]	2023-09-06 02:41:11.221	2023-09-06 02:41:11.221	\N	\N	\N
77	plugin::content-manager.explorer.delete	api::robot.robot	{}	[]	2023-09-06 02:41:11.226	2023-09-06 02:41:11.226	\N	\N	\N
81	plugin::content-manager.explorer.delete	api::telegram.telegram	{}	[]	2023-09-06 02:41:11.251	2023-09-06 02:41:11.251	\N	\N	\N
82	plugin::content-manager.explorer.delete	api::theme.theme	{}	[]	2023-09-06 02:41:11.256	2023-09-06 02:41:11.256	\N	\N	\N
90	plugin::content-manager.explorer.publish	api::loader.loader	{}	[]	2023-09-06 02:41:11.297	2023-09-06 02:41:11.297	\N	\N	\N
95	plugin::content-manager.explorer.publish	api::review.review	{}	[]	2023-09-06 02:41:11.323	2023-09-06 02:41:11.323	\N	\N	\N
99	plugin::content-manager.explorer.publish	api::theme.theme	{}	[]	2023-09-06 02:41:11.344	2023-09-06 02:41:11.344	\N	\N	\N
102	plugin::upload.read	\N	{}	[]	2023-09-06 02:41:11.358	2023-09-06 02:41:11.358	\N	\N	\N
105	plugin::upload.assets.update	\N	{}	[]	2023-09-06 02:41:11.373	2023-09-06 02:41:11.373	\N	\N	\N
106	plugin::upload.assets.download	\N	{}	[]	2023-09-06 02:41:11.379	2023-09-06 02:41:11.379	\N	\N	\N
107	plugin::upload.assets.copy-link	\N	{}	[]	2023-09-06 02:41:11.384	2023-09-06 02:41:11.384	\N	\N	\N
108	plugin::content-manager.explorer.create	api::configuration.configuration	{"fields": ["configs.provider", "configs.config"]}	["admin::is-creator"]	2023-09-06 02:41:11.391	2023-09-06 02:41:11.391	\N	\N	\N
109	plugin::content-manager.explorer.create	api::currency.currency	{"fields": ["title", "unicode", "is_default", "tiers"]}	["admin::is-creator"]	2023-09-06 02:41:11.4	2023-09-06 02:41:11.4	\N	\N	\N
110	plugin::content-manager.explorer.create	api::flyout.flyout	{"fields": ["variant", "page_blocks", "title", "uid", "class_name"]}	["admin::is-creator"]	2023-09-06 02:41:11.41	2023-09-06 02:41:11.41	\N	\N	\N
111	plugin::content-manager.explorer.create	api::footer.footer	{"fields": ["title", "uid", "layouts", "page_blocks", "variant", "class_name"]}	["admin::is-creator"]	2023-09-06 02:41:11.414	2023-09-06 02:41:11.414	\N	\N	\N
112	plugin::content-manager.explorer.create	api::form.form	{"fields": ["inputs.placeholder", "inputs.variant", "inputs.is_required", "inputs.value", "inputs.name", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.label", "inputs.class_name", "inputs.type", "inputs.multiple", "inputs.min", "inputs.max", "inputs.step", "inputs.media", "inputs.additional_media", "inputs.extra_media", "class_name", "additional_attributes", "variant", "button.url", "button.media", "button.description", "button.variant", "button.additional_media", "button.title", "button.additional_attributes", "button.class_name", "button.flyout", "form_requests", "uid", "side_effects.type", "side_effects.recievers.identifier", "side_effects.recievers.admin", "side_effects.recievers.user", "side_effects.provider", "title"]}	["admin::is-creator"]	2023-09-06 02:41:11.419	2023-09-06 02:41:11.419	\N	\N	\N
113	plugin::content-manager.explorer.create	api::form-request.form-request	{"fields": ["inputs.key", "inputs.value", "inputs.files", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.is_true", "inputs.option.title", "inputs.option.description", "inputs.option.media", "inputs.option.additional_media", "inputs.date_value", "inputs.datetime_value", "inputs.dates.date_value", "inputs.dates.datetime_value", "inputs.dates.time_value", "files", "form"]}	["admin::is-creator"]	2023-09-06 02:41:11.424	2023-09-06 02:41:11.424	\N	\N	\N
114	plugin::content-manager.explorer.create	api::layout.layout	{"fields": ["title", "uid", "sidebar", "variant", "topbar", "footer", "slide_overs", "modals", "navbar", "class_name", "pages"]}	["admin::is-creator"]	2023-09-06 02:41:11.429	2023-09-06 02:41:11.429	\N	\N	\N
115	plugin::content-manager.explorer.create	api::loader.loader	{"fields": ["variant", "media", "additional_media", "class_name", "anchor", "title", "subtitle", "description"]}	["admin::is-creator"]	2023-09-06 02:41:11.434	2023-09-06 02:41:11.434	\N	\N	\N
116	plugin::content-manager.explorer.create	api::metatag.metatag	{"fields": ["title", "description", "script", "gtm_key", "favicon", "pages", "is_default"]}	["admin::is-creator"]	2023-09-06 02:41:11.439	2023-09-06 02:41:11.439	\N	\N	\N
117	plugin::content-manager.explorer.create	api::modal.modal	{"fields": ["uid", "page_blocks", "dialog_panel_class_name", "variant", "title", "layouts", "class_name"]}	["admin::is-creator"]	2023-09-06 02:41:11.444	2023-09-06 02:41:11.444	\N	\N	\N
118	plugin::content-manager.explorer.create	api::navbar.navbar	{"fields": ["title", "uid", "page_blocks", "variant", "class_name", "layouts", "position", "side"]}	["admin::is-creator"]	2023-09-06 02:41:11.448	2023-09-06 02:41:11.448	\N	\N	\N
119	plugin::content-manager.explorer.create	api::page.page	{"fields": ["title", "url", "layout", "page_blocks", "metatag"]}	["admin::is-creator"]	2023-09-06 02:41:11.453	2023-09-06 02:41:11.453	\N	\N	\N
120	plugin::content-manager.explorer.create	api::review.review	{"fields": ["name", "title", "description", "subtitle", "rating", "media", "additional_media"]}	["admin::is-creator"]	2023-09-06 02:41:11.458	2023-09-06 02:41:11.458	\N	\N	\N
121	plugin::content-manager.explorer.create	api::robot.robot	{"fields": ["robots"]}	["admin::is-creator"]	2023-09-06 02:41:11.463	2023-09-06 02:41:11.463	\N	\N	\N
122	plugin::content-manager.explorer.create	api::sidebar.sidebar	{"fields": ["variant", "title", "uid", "page_blocks", "class_name", "layouts", "side"]}	["admin::is-creator"]	2023-09-06 02:41:11.468	2023-09-06 02:41:11.468	\N	\N	\N
123	plugin::content-manager.explorer.create	api::slide-over.slide-over	{"fields": ["variant", "title", "uid", "class_name", "page_blocks", "layouts"]}	["admin::is-creator"]	2023-09-06 02:41:11.473	2023-09-06 02:41:11.473	\N	\N	\N
124	plugin::content-manager.explorer.create	api::slider.slider	{"fields": ["variant", "slides.title", "slides.description", "slides.subtitle", "slides.media", "slides.buttons.url", "slides.buttons.media", "slides.buttons.description", "slides.buttons.variant", "slides.buttons.additional_media", "slides.buttons.title", "slides.buttons.additional_attributes", "slides.buttons.class_name", "slides.buttons.flyout", "slides.additional_media", "show_backdrop", "show_full_screen", "show_previews", "class_name", "aspect_ratio_class_name", "title", "uid"]}	["admin::is-creator"]	2023-09-06 02:41:11.478	2023-09-06 02:41:11.478	\N	\N	\N
125	plugin::content-manager.explorer.create	api::telegram.telegram	{"fields": ["name"]}	["admin::is-creator"]	2023-09-06 02:41:11.483	2023-09-06 02:41:11.483	\N	\N	\N
126	plugin::content-manager.explorer.create	api::theme.theme	{"fields": ["theme", "fonts.media", "fonts.weight", "fonts.style", "fonts.variant"]}	["admin::is-creator"]	2023-09-06 02:41:11.489	2023-09-06 02:41:11.489	\N	\N	\N
127	plugin::content-manager.explorer.create	api::tier.tier	{"fields": ["title", "description", "price", "currency", "type", "period", "features.media", "features.description", "features.additional_media", "features.title", "features.subtitle", "old_price", "buttons.url", "buttons.media", "buttons.description", "buttons.variant", "buttons.additional_media", "buttons.title", "buttons.additional_attributes", "buttons.class_name", "buttons.flyout"]}	["admin::is-creator"]	2023-09-06 02:41:11.494	2023-09-06 02:41:11.494	\N	\N	\N
128	plugin::content-manager.explorer.create	api::topbar.topbar	{"fields": ["title", "uid", "variant", "page_blocks", "layouts", "class_name", "position", "side"]}	["admin::is-creator"]	2023-09-06 02:41:11.498	2023-09-06 02:41:11.498	\N	\N	\N
129	plugin::content-manager.explorer.read	api::configuration.configuration	{"fields": ["configs.provider", "configs.config"]}	["admin::is-creator"]	2023-09-06 02:41:11.503	2023-09-06 02:41:11.503	\N	\N	\N
130	plugin::content-manager.explorer.read	api::currency.currency	{"fields": ["title", "unicode", "is_default", "tiers"]}	["admin::is-creator"]	2023-09-06 02:41:11.509	2023-09-06 02:41:11.509	\N	\N	\N
131	plugin::content-manager.explorer.read	api::flyout.flyout	{"fields": ["variant", "page_blocks", "title", "uid", "class_name"]}	["admin::is-creator"]	2023-09-06 02:41:11.513	2023-09-06 02:41:11.513	\N	\N	\N
132	plugin::content-manager.explorer.read	api::footer.footer	{"fields": ["title", "uid", "layouts", "page_blocks", "variant", "class_name"]}	["admin::is-creator"]	2023-09-06 02:41:11.518	2023-09-06 02:41:11.518	\N	\N	\N
192	plugin::upload.read	\N	{}	["admin::is-creator"]	2023-09-06 02:41:11.844	2023-09-06 02:41:11.844	\N	\N	\N
133	plugin::content-manager.explorer.read	api::form.form	{"fields": ["inputs.placeholder", "inputs.variant", "inputs.is_required", "inputs.value", "inputs.name", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.label", "inputs.class_name", "inputs.type", "inputs.multiple", "inputs.min", "inputs.max", "inputs.step", "inputs.media", "inputs.additional_media", "inputs.extra_media", "class_name", "additional_attributes", "variant", "button.url", "button.media", "button.description", "button.variant", "button.additional_media", "button.title", "button.additional_attributes", "button.class_name", "button.flyout", "form_requests", "uid", "side_effects.type", "side_effects.recievers.identifier", "side_effects.recievers.admin", "side_effects.recievers.user", "side_effects.provider", "title"]}	["admin::is-creator"]	2023-09-06 02:41:11.523	2023-09-06 02:41:11.523	\N	\N	\N
134	plugin::content-manager.explorer.read	api::form-request.form-request	{"fields": ["inputs.key", "inputs.value", "inputs.files", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.is_true", "inputs.option.title", "inputs.option.description", "inputs.option.media", "inputs.option.additional_media", "inputs.date_value", "inputs.datetime_value", "inputs.dates.date_value", "inputs.dates.datetime_value", "inputs.dates.time_value", "files", "form"]}	["admin::is-creator"]	2023-09-06 02:41:11.529	2023-09-06 02:41:11.529	\N	\N	\N
135	plugin::content-manager.explorer.read	api::layout.layout	{"fields": ["title", "uid", "sidebar", "variant", "topbar", "footer", "slide_overs", "modals", "navbar", "class_name", "pages"]}	["admin::is-creator"]	2023-09-06 02:41:11.533	2023-09-06 02:41:11.533	\N	\N	\N
136	plugin::content-manager.explorer.read	api::loader.loader	{"fields": ["variant", "media", "additional_media", "class_name", "anchor", "title", "subtitle", "description"]}	["admin::is-creator"]	2023-09-06 02:41:11.538	2023-09-06 02:41:11.538	\N	\N	\N
137	plugin::content-manager.explorer.read	api::metatag.metatag	{"fields": ["title", "description", "script", "gtm_key", "favicon", "pages", "is_default"]}	["admin::is-creator"]	2023-09-06 02:41:11.543	2023-09-06 02:41:11.543	\N	\N	\N
138	plugin::content-manager.explorer.read	api::modal.modal	{"fields": ["uid", "page_blocks", "dialog_panel_class_name", "variant", "title", "layouts", "class_name"]}	["admin::is-creator"]	2023-09-06 02:41:11.549	2023-09-06 02:41:11.549	\N	\N	\N
139	plugin::content-manager.explorer.read	api::navbar.navbar	{"fields": ["title", "uid", "page_blocks", "variant", "class_name", "layouts", "position", "side"]}	["admin::is-creator"]	2023-09-06 02:41:11.555	2023-09-06 02:41:11.555	\N	\N	\N
140	plugin::content-manager.explorer.read	api::page.page	{"fields": ["title", "url", "layout", "page_blocks", "metatag"]}	["admin::is-creator"]	2023-09-06 02:41:11.56	2023-09-06 02:41:11.56	\N	\N	\N
141	plugin::content-manager.explorer.read	api::review.review	{"fields": ["name", "title", "description", "subtitle", "rating", "media", "additional_media"]}	["admin::is-creator"]	2023-09-06 02:41:11.566	2023-09-06 02:41:11.566	\N	\N	\N
142	plugin::content-manager.explorer.read	api::robot.robot	{"fields": ["robots"]}	["admin::is-creator"]	2023-09-06 02:41:11.571	2023-09-06 02:41:11.571	\N	\N	\N
143	plugin::content-manager.explorer.read	api::sidebar.sidebar	{"fields": ["variant", "title", "uid", "page_blocks", "class_name", "layouts", "side"]}	["admin::is-creator"]	2023-09-06 02:41:11.576	2023-09-06 02:41:11.576	\N	\N	\N
144	plugin::content-manager.explorer.read	api::slide-over.slide-over	{"fields": ["variant", "title", "uid", "class_name", "page_blocks", "layouts"]}	["admin::is-creator"]	2023-09-06 02:41:11.581	2023-09-06 02:41:11.581	\N	\N	\N
145	plugin::content-manager.explorer.read	api::slider.slider	{"fields": ["variant", "slides.title", "slides.description", "slides.subtitle", "slides.media", "slides.buttons.url", "slides.buttons.media", "slides.buttons.description", "slides.buttons.variant", "slides.buttons.additional_media", "slides.buttons.title", "slides.buttons.additional_attributes", "slides.buttons.class_name", "slides.buttons.flyout", "slides.additional_media", "show_backdrop", "show_full_screen", "show_previews", "class_name", "aspect_ratio_class_name", "title", "uid"]}	["admin::is-creator"]	2023-09-06 02:41:11.586	2023-09-06 02:41:11.586	\N	\N	\N
146	plugin::content-manager.explorer.read	api::telegram.telegram	{"fields": ["name"]}	["admin::is-creator"]	2023-09-06 02:41:11.595	2023-09-06 02:41:11.595	\N	\N	\N
147	plugin::content-manager.explorer.read	api::theme.theme	{"fields": ["theme", "fonts.media", "fonts.weight", "fonts.style", "fonts.variant"]}	["admin::is-creator"]	2023-09-06 02:41:11.6	2023-09-06 02:41:11.6	\N	\N	\N
148	plugin::content-manager.explorer.read	api::tier.tier	{"fields": ["title", "description", "price", "currency", "type", "period", "features.media", "features.description", "features.additional_media", "features.title", "features.subtitle", "old_price", "buttons.url", "buttons.media", "buttons.description", "buttons.variant", "buttons.additional_media", "buttons.title", "buttons.additional_attributes", "buttons.class_name", "buttons.flyout"]}	["admin::is-creator"]	2023-09-06 02:41:11.605	2023-09-06 02:41:11.605	\N	\N	\N
149	plugin::content-manager.explorer.read	api::topbar.topbar	{"fields": ["title", "uid", "variant", "page_blocks", "layouts", "class_name", "position", "side"]}	["admin::is-creator"]	2023-09-06 02:41:11.61	2023-09-06 02:41:11.61	\N	\N	\N
150	plugin::content-manager.explorer.update	api::configuration.configuration	{"fields": ["configs.provider", "configs.config"]}	["admin::is-creator"]	2023-09-06 02:41:11.614	2023-09-06 02:41:11.614	\N	\N	\N
151	plugin::content-manager.explorer.update	api::currency.currency	{"fields": ["title", "unicode", "is_default", "tiers"]}	["admin::is-creator"]	2023-09-06 02:41:11.619	2023-09-06 02:41:11.619	\N	\N	\N
152	plugin::content-manager.explorer.update	api::flyout.flyout	{"fields": ["variant", "page_blocks", "title", "uid", "class_name"]}	["admin::is-creator"]	2023-09-06 02:41:11.624	2023-09-06 02:41:11.624	\N	\N	\N
153	plugin::content-manager.explorer.update	api::footer.footer	{"fields": ["title", "uid", "layouts", "page_blocks", "variant", "class_name"]}	["admin::is-creator"]	2023-09-06 02:41:11.63	2023-09-06 02:41:11.63	\N	\N	\N
154	plugin::content-manager.explorer.update	api::form.form	{"fields": ["inputs.placeholder", "inputs.variant", "inputs.is_required", "inputs.value", "inputs.name", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.label", "inputs.class_name", "inputs.type", "inputs.multiple", "inputs.min", "inputs.max", "inputs.step", "inputs.media", "inputs.additional_media", "inputs.extra_media", "class_name", "additional_attributes", "variant", "button.url", "button.media", "button.description", "button.variant", "button.additional_media", "button.title", "button.additional_attributes", "button.class_name", "button.flyout", "form_requests", "uid", "side_effects.type", "side_effects.recievers.identifier", "side_effects.recievers.admin", "side_effects.recievers.user", "side_effects.provider", "title"]}	["admin::is-creator"]	2023-09-06 02:41:11.638	2023-09-06 02:41:11.638	\N	\N	\N
193	plugin::upload.configure-view	\N	{}	[]	2023-09-06 02:41:11.849	2023-09-06 02:41:11.849	\N	\N	\N
194	plugin::upload.assets.create	\N	{}	[]	2023-09-06 02:41:11.854	2023-09-06 02:41:11.854	\N	\N	\N
195	plugin::upload.assets.update	\N	{}	["admin::is-creator"]	2023-09-06 02:41:11.859	2023-09-06 02:41:11.859	\N	\N	\N
155	plugin::content-manager.explorer.update	api::form-request.form-request	{"fields": ["inputs.key", "inputs.value", "inputs.files", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.is_true", "inputs.option.title", "inputs.option.description", "inputs.option.media", "inputs.option.additional_media", "inputs.date_value", "inputs.datetime_value", "inputs.dates.date_value", "inputs.dates.datetime_value", "inputs.dates.time_value", "files", "form"]}	["admin::is-creator"]	2023-09-06 02:41:11.645	2023-09-06 02:41:11.645	\N	\N	\N
156	plugin::content-manager.explorer.update	api::layout.layout	{"fields": ["title", "uid", "sidebar", "variant", "topbar", "footer", "slide_overs", "modals", "navbar", "class_name", "pages"]}	["admin::is-creator"]	2023-09-06 02:41:11.651	2023-09-06 02:41:11.651	\N	\N	\N
157	plugin::content-manager.explorer.update	api::loader.loader	{"fields": ["variant", "media", "additional_media", "class_name", "anchor", "title", "subtitle", "description"]}	["admin::is-creator"]	2023-09-06 02:41:11.656	2023-09-06 02:41:11.656	\N	\N	\N
158	plugin::content-manager.explorer.update	api::metatag.metatag	{"fields": ["title", "description", "script", "gtm_key", "favicon", "pages", "is_default"]}	["admin::is-creator"]	2023-09-06 02:41:11.661	2023-09-06 02:41:11.661	\N	\N	\N
159	plugin::content-manager.explorer.update	api::modal.modal	{"fields": ["uid", "page_blocks", "dialog_panel_class_name", "variant", "title", "layouts", "class_name"]}	["admin::is-creator"]	2023-09-06 02:41:11.67	2023-09-06 02:41:11.67	\N	\N	\N
160	plugin::content-manager.explorer.update	api::navbar.navbar	{"fields": ["title", "uid", "page_blocks", "variant", "class_name", "layouts", "position", "side"]}	["admin::is-creator"]	2023-09-06 02:41:11.676	2023-09-06 02:41:11.676	\N	\N	\N
161	plugin::content-manager.explorer.update	api::page.page	{"fields": ["title", "url", "layout", "page_blocks", "metatag"]}	["admin::is-creator"]	2023-09-06 02:41:11.681	2023-09-06 02:41:11.681	\N	\N	\N
162	plugin::content-manager.explorer.update	api::review.review	{"fields": ["name", "title", "description", "subtitle", "rating", "media", "additional_media"]}	["admin::is-creator"]	2023-09-06 02:41:11.686	2023-09-06 02:41:11.686	\N	\N	\N
163	plugin::content-manager.explorer.update	api::robot.robot	{"fields": ["robots"]}	["admin::is-creator"]	2023-09-06 02:41:11.69	2023-09-06 02:41:11.69	\N	\N	\N
164	plugin::content-manager.explorer.update	api::sidebar.sidebar	{"fields": ["variant", "title", "uid", "page_blocks", "class_name", "layouts", "side"]}	["admin::is-creator"]	2023-09-06 02:41:11.695	2023-09-06 02:41:11.695	\N	\N	\N
165	plugin::content-manager.explorer.update	api::slide-over.slide-over	{"fields": ["variant", "title", "uid", "class_name", "page_blocks", "layouts"]}	["admin::is-creator"]	2023-09-06 02:41:11.7	2023-09-06 02:41:11.7	\N	\N	\N
166	plugin::content-manager.explorer.update	api::slider.slider	{"fields": ["variant", "slides.title", "slides.description", "slides.subtitle", "slides.media", "slides.buttons.url", "slides.buttons.media", "slides.buttons.description", "slides.buttons.variant", "slides.buttons.additional_media", "slides.buttons.title", "slides.buttons.additional_attributes", "slides.buttons.class_name", "slides.buttons.flyout", "slides.additional_media", "show_backdrop", "show_full_screen", "show_previews", "class_name", "aspect_ratio_class_name", "title", "uid"]}	["admin::is-creator"]	2023-09-06 02:41:11.705	2023-09-06 02:41:11.705	\N	\N	\N
167	plugin::content-manager.explorer.update	api::telegram.telegram	{"fields": ["name"]}	["admin::is-creator"]	2023-09-06 02:41:11.71	2023-09-06 02:41:11.71	\N	\N	\N
168	plugin::content-manager.explorer.update	api::theme.theme	{"fields": ["theme", "fonts.media", "fonts.weight", "fonts.style", "fonts.variant"]}	["admin::is-creator"]	2023-09-06 02:41:11.715	2023-09-06 02:41:11.715	\N	\N	\N
169	plugin::content-manager.explorer.update	api::tier.tier	{"fields": ["title", "description", "price", "currency", "type", "period", "features.media", "features.description", "features.additional_media", "features.title", "features.subtitle", "old_price", "buttons.url", "buttons.media", "buttons.description", "buttons.variant", "buttons.additional_media", "buttons.title", "buttons.additional_attributes", "buttons.class_name", "buttons.flyout"]}	["admin::is-creator"]	2023-09-06 02:41:11.72	2023-09-06 02:41:11.72	\N	\N	\N
170	plugin::content-manager.explorer.update	api::topbar.topbar	{"fields": ["title", "uid", "variant", "page_blocks", "layouts", "class_name", "position", "side"]}	["admin::is-creator"]	2023-09-06 02:41:11.727	2023-09-06 02:41:11.727	\N	\N	\N
171	plugin::content-manager.explorer.delete	api::configuration.configuration	{}	["admin::is-creator"]	2023-09-06 02:41:11.732	2023-09-06 02:41:11.732	\N	\N	\N
176	plugin::content-manager.explorer.delete	api::form-request.form-request	{}	["admin::is-creator"]	2023-09-06 02:41:11.758	2023-09-06 02:41:11.758	\N	\N	\N
178	plugin::content-manager.explorer.delete	api::loader.loader	{}	["admin::is-creator"]	2023-09-06 02:41:11.768	2023-09-06 02:41:11.768	\N	\N	\N
183	plugin::content-manager.explorer.delete	api::review.review	{}	["admin::is-creator"]	2023-09-06 02:41:11.799	2023-09-06 02:41:11.799	\N	\N	\N
184	plugin::content-manager.explorer.delete	api::robot.robot	{}	["admin::is-creator"]	2023-09-06 02:41:11.804	2023-09-06 02:41:11.804	\N	\N	\N
188	plugin::content-manager.explorer.delete	api::telegram.telegram	{}	["admin::is-creator"]	2023-09-06 02:41:11.824	2023-09-06 02:41:11.824	\N	\N	\N
189	plugin::content-manager.explorer.delete	api::theme.theme	{}	["admin::is-creator"]	2023-09-06 02:41:11.829	2023-09-06 02:41:11.829	\N	\N	\N
196	plugin::upload.assets.download	\N	{}	[]	2023-09-06 02:41:11.864	2023-09-06 02:41:11.864	\N	\N	\N
197	plugin::upload.assets.copy-link	\N	{}	[]	2023-09-06 02:41:11.869	2023-09-06 02:41:11.869	\N	\N	\N
499	admin::roles.delete	\N	{}	[]	2023-10-31 02:01:36.589	2023-10-31 02:01:36.589	\N	\N	{}
500	admin::api-tokens.access	\N	{}	[]	2023-10-31 02:01:36.596	2023-10-31 02:01:36.596	\N	\N	{}
501	admin::api-tokens.create	\N	{}	[]	2023-10-31 02:01:36.602	2023-10-31 02:01:36.602	\N	\N	{}
502	admin::api-tokens.read	\N	{}	[]	2023-10-31 02:01:36.607	2023-10-31 02:01:36.607	\N	\N	{}
503	admin::api-tokens.update	\N	{}	[]	2023-10-31 02:01:36.613	2023-10-31 02:01:36.613	\N	\N	{}
504	admin::api-tokens.regenerate	\N	{}	[]	2023-10-31 02:01:36.618	2023-10-31 02:01:36.618	\N	\N	{}
505	admin::api-tokens.delete	\N	{}	[]	2023-10-31 02:01:36.628	2023-10-31 02:01:36.628	\N	\N	{}
506	admin::project-settings.update	\N	{}	[]	2023-10-31 02:01:36.634	2023-10-31 02:01:36.634	\N	\N	{}
507	admin::project-settings.read	\N	{}	[]	2023-10-31 02:01:36.64	2023-10-31 02:01:36.64	\N	\N	{}
508	admin::transfer.tokens.access	\N	{}	[]	2023-10-31 02:01:36.647	2023-10-31 02:01:36.647	\N	\N	{}
509	admin::transfer.tokens.create	\N	{}	[]	2023-10-31 02:01:36.653	2023-10-31 02:01:36.653	\N	\N	{}
510	admin::transfer.tokens.read	\N	{}	[]	2023-10-31 02:01:36.66	2023-10-31 02:01:36.66	\N	\N	{}
511	admin::transfer.tokens.update	\N	{}	[]	2023-10-31 02:01:36.665	2023-10-31 02:01:36.665	\N	\N	{}
512	admin::transfer.tokens.regenerate	\N	{}	[]	2023-10-31 02:01:36.67	2023-10-31 02:01:36.67	\N	\N	{}
513	admin::transfer.tokens.delete	\N	{}	[]	2023-10-31 02:01:36.675	2023-10-31 02:01:36.675	\N	\N	{}
356	plugin::content-manager.explorer.create	plugin::users-permissions.user	{"fields": ["username", "email", "provider", "password", "resetPasswordToken", "confirmationToken", "confirmed", "blocked", "role"]}	[]	2023-10-31 02:01:35.738	2023-10-31 02:01:35.738	\N	\N	{}
357	plugin::content-manager.explorer.create	api::configuration.configuration	{"fields": ["configs.provider", "configs.config"]}	[]	2023-10-31 02:01:35.754	2023-10-31 02:01:35.754	\N	\N	{}
358	plugin::content-manager.explorer.create	api::currency.currency	{"fields": ["title", "unicode", "is_default", "tiers"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.76	2023-10-31 02:01:35.76	\N	\N	{}
359	plugin::content-manager.explorer.create	api::flyout.flyout	{"fields": ["variant", "page_blocks", "title", "uid", "class_name"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.765	2023-10-31 02:01:35.765	\N	\N	{}
360	plugin::content-manager.explorer.create	api::footer.footer	{"fields": ["title", "uid", "layouts", "page_blocks", "variant", "class_name"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.774	2023-10-31 02:01:35.774	\N	\N	{}
361	plugin::content-manager.explorer.create	api::form.form	{"fields": ["inputs.placeholder", "inputs.variant", "inputs.is_required", "inputs.value", "inputs.name", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.label", "inputs.class_name", "inputs.type", "inputs.multiple", "inputs.min", "inputs.max", "inputs.step", "inputs.media", "inputs.additional_media", "inputs.extra_media", "class_name", "additional_attributes", "variant", "button.url", "button.media", "button.description", "button.variant", "button.additional_media", "button.title", "button.additional_attributes", "button.class_name", "button.flyout", "form_requests", "uid", "side_effects.type", "side_effects.recievers.identifier", "side_effects.recievers.admin", "side_effects.recievers.user", "side_effects.provider", "title"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.778	2023-10-31 02:01:35.778	\N	\N	{}
362	plugin::content-manager.explorer.create	api::form-request.form-request	{"fields": ["inputs.key", "inputs.value", "inputs.files", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.is_true", "inputs.option.title", "inputs.option.description", "inputs.option.media", "inputs.option.additional_media", "inputs.date_value", "inputs.datetime_value", "inputs.dates.date_value", "inputs.dates.datetime_value", "inputs.dates.time_value", "files", "form"]}	[]	2023-10-31 02:01:35.785	2023-10-31 02:01:35.785	\N	\N	{}
363	plugin::content-manager.explorer.create	api::layout.layout	{"fields": ["title", "uid", "sidebar", "variant", "topbar", "footer", "slide_overs", "modals", "navbar", "class_name", "pages"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.791	2023-10-31 02:01:35.791	\N	\N	{}
364	plugin::content-manager.explorer.create	api::loader.loader	{"fields": ["variant", "media", "additional_media", "class_name", "anchor", "title", "subtitle", "description"]}	[]	2023-10-31 02:01:35.797	2023-10-31 02:01:35.797	\N	\N	{}
365	plugin::content-manager.explorer.create	api::metatag.metatag	{"fields": ["title", "description", "script", "gtm_key", "favicon", "pages", "is_default"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.802	2023-10-31 02:01:35.802	\N	\N	{}
366	plugin::content-manager.explorer.create	api::modal.modal	{"fields": ["uid", "page_blocks", "dialog_panel_class_name", "variant", "title", "layouts", "class_name"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.808	2023-10-31 02:01:35.808	\N	\N	{}
367	plugin::content-manager.explorer.create	api::navbar.navbar	{"fields": ["title", "uid", "page_blocks", "variant", "class_name", "layouts", "position", "side"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.815	2023-10-31 02:01:35.815	\N	\N	{}
368	plugin::content-manager.explorer.create	api::page.page	{"fields": ["title", "url", "layout", "page_blocks", "metatag"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.82	2023-10-31 02:01:35.82	\N	\N	{}
369	plugin::content-manager.explorer.create	api::review.review	{"fields": ["name", "title", "description", "subtitle", "rating", "media", "additional_media"]}	[]	2023-10-31 02:01:35.826	2023-10-31 02:01:35.826	\N	\N	{}
370	plugin::content-manager.explorer.create	api::robot.robot	{"fields": ["robots"]}	[]	2023-10-31 02:01:35.831	2023-10-31 02:01:35.831	\N	\N	{}
371	plugin::content-manager.explorer.create	api::sidebar.sidebar	{"fields": ["variant", "title", "uid", "page_blocks", "class_name", "layouts", "side"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.837	2023-10-31 02:01:35.837	\N	\N	{}
372	plugin::content-manager.explorer.create	api::slide-over.slide-over	{"fields": ["variant", "title", "uid", "class_name", "page_blocks", "layouts"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.844	2023-10-31 02:01:35.844	\N	\N	{}
373	plugin::content-manager.explorer.create	api::slider.slider	{"fields": ["variant", "slides.title", "slides.description", "slides.subtitle", "slides.media", "slides.buttons.url", "slides.buttons.media", "slides.buttons.description", "slides.buttons.variant", "slides.buttons.additional_media", "slides.buttons.title", "slides.buttons.additional_attributes", "slides.buttons.class_name", "slides.buttons.flyout", "slides.additional_media", "show_backdrop", "show_full_screen", "show_previews", "class_name", "aspect_ratio_class_name", "title", "uid"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.849	2023-10-31 02:01:35.849	\N	\N	{}
374	plugin::content-manager.explorer.create	api::telegram.telegram	{"fields": ["name"]}	[]	2023-10-31 02:01:35.855	2023-10-31 02:01:35.855	\N	\N	{}
375	plugin::content-manager.explorer.create	api::theme.theme	{"fields": ["theme", "fonts.media", "fonts.weight", "fonts.style", "fonts.variant"]}	[]	2023-10-31 02:01:35.861	2023-10-31 02:01:35.861	\N	\N	{}
376	plugin::content-manager.explorer.create	api::tier.tier	{"fields": ["title", "description", "price", "currency", "type", "period", "features.media", "features.description", "features.additional_media", "features.title", "features.subtitle", "old_price", "buttons.url", "buttons.media", "buttons.description", "buttons.variant", "buttons.additional_media", "buttons.title", "buttons.additional_attributes", "buttons.class_name", "buttons.flyout"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.866	2023-10-31 02:01:35.866	\N	\N	{}
377	plugin::content-manager.explorer.create	api::topbar.topbar	{"fields": ["title", "uid", "variant", "page_blocks", "layouts", "class_name", "position", "side"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.872	2023-10-31 02:01:35.872	\N	\N	{}
378	plugin::content-manager.explorer.read	plugin::users-permissions.user	{"fields": ["username", "email", "provider", "password", "resetPasswordToken", "confirmationToken", "confirmed", "blocked", "role"]}	[]	2023-10-31 02:01:35.878	2023-10-31 02:01:35.878	\N	\N	{}
379	plugin::content-manager.explorer.read	api::configuration.configuration	{"fields": ["configs.provider", "configs.config"]}	[]	2023-10-31 02:01:35.884	2023-10-31 02:01:35.884	\N	\N	{}
380	plugin::content-manager.explorer.read	api::currency.currency	{"fields": ["title", "unicode", "is_default", "tiers"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.89	2023-10-31 02:01:35.89	\N	\N	{}
381	plugin::content-manager.explorer.read	api::flyout.flyout	{"fields": ["variant", "page_blocks", "title", "uid", "class_name"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.896	2023-10-31 02:01:35.896	\N	\N	{}
382	plugin::content-manager.explorer.read	api::footer.footer	{"fields": ["title", "uid", "layouts", "page_blocks", "variant", "class_name"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.902	2023-10-31 02:01:35.902	\N	\N	{}
383	plugin::content-manager.explorer.read	api::form.form	{"fields": ["inputs.placeholder", "inputs.variant", "inputs.is_required", "inputs.value", "inputs.name", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.label", "inputs.class_name", "inputs.type", "inputs.multiple", "inputs.min", "inputs.max", "inputs.step", "inputs.media", "inputs.additional_media", "inputs.extra_media", "class_name", "additional_attributes", "variant", "button.url", "button.media", "button.description", "button.variant", "button.additional_media", "button.title", "button.additional_attributes", "button.class_name", "button.flyout", "form_requests", "uid", "side_effects.type", "side_effects.recievers.identifier", "side_effects.recievers.admin", "side_effects.recievers.user", "side_effects.provider", "title"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.908	2023-10-31 02:01:35.908	\N	\N	{}
384	plugin::content-manager.explorer.read	api::form-request.form-request	{"fields": ["inputs.key", "inputs.value", "inputs.files", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.is_true", "inputs.option.title", "inputs.option.description", "inputs.option.media", "inputs.option.additional_media", "inputs.date_value", "inputs.datetime_value", "inputs.dates.date_value", "inputs.dates.datetime_value", "inputs.dates.time_value", "files", "form"]}	[]	2023-10-31 02:01:35.914	2023-10-31 02:01:35.914	\N	\N	{}
385	plugin::content-manager.explorer.read	api::layout.layout	{"fields": ["title", "uid", "sidebar", "variant", "topbar", "footer", "slide_overs", "modals", "navbar", "class_name", "pages"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.919	2023-10-31 02:01:35.919	\N	\N	{}
386	plugin::content-manager.explorer.read	api::loader.loader	{"fields": ["variant", "media", "additional_media", "class_name", "anchor", "title", "subtitle", "description"]}	[]	2023-10-31 02:01:35.925	2023-10-31 02:01:35.925	\N	\N	{}
387	plugin::content-manager.explorer.read	api::metatag.metatag	{"fields": ["title", "description", "script", "gtm_key", "favicon", "pages", "is_default"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.931	2023-10-31 02:01:35.931	\N	\N	{}
388	plugin::content-manager.explorer.read	api::modal.modal	{"fields": ["uid", "page_blocks", "dialog_panel_class_name", "variant", "title", "layouts", "class_name"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.936	2023-10-31 02:01:35.936	\N	\N	{}
389	plugin::content-manager.explorer.read	api::navbar.navbar	{"fields": ["title", "uid", "page_blocks", "variant", "class_name", "layouts", "position", "side"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.942	2023-10-31 02:01:35.942	\N	\N	{}
390	plugin::content-manager.explorer.read	api::page.page	{"fields": ["title", "url", "layout", "page_blocks", "metatag"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.946	2023-10-31 02:01:35.946	\N	\N	{}
391	plugin::content-manager.explorer.read	api::review.review	{"fields": ["name", "title", "description", "subtitle", "rating", "media", "additional_media"]}	[]	2023-10-31 02:01:35.952	2023-10-31 02:01:35.952	\N	\N	{}
392	plugin::content-manager.explorer.read	api::robot.robot	{"fields": ["robots"]}	[]	2023-10-31 02:01:35.96	2023-10-31 02:01:35.96	\N	\N	{}
393	plugin::content-manager.explorer.read	api::sidebar.sidebar	{"fields": ["variant", "title", "uid", "page_blocks", "class_name", "layouts", "side"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.966	2023-10-31 02:01:35.966	\N	\N	{}
394	plugin::content-manager.explorer.read	api::slide-over.slide-over	{"fields": ["variant", "title", "uid", "class_name", "page_blocks", "layouts"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.971	2023-10-31 02:01:35.971	\N	\N	{}
395	plugin::content-manager.explorer.read	api::slider.slider	{"fields": ["variant", "slides.title", "slides.description", "slides.subtitle", "slides.media", "slides.buttons.url", "slides.buttons.media", "slides.buttons.description", "slides.buttons.variant", "slides.buttons.additional_media", "slides.buttons.title", "slides.buttons.additional_attributes", "slides.buttons.class_name", "slides.buttons.flyout", "slides.additional_media", "show_backdrop", "show_full_screen", "show_previews", "class_name", "aspect_ratio_class_name", "title", "uid"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:35.976	2023-10-31 02:01:35.976	\N	\N	{}
396	plugin::content-manager.explorer.read	api::telegram.telegram	{"fields": ["name"]}	[]	2023-10-31 02:01:35.982	2023-10-31 02:01:35.982	\N	\N	{}
397	plugin::content-manager.explorer.read	api::theme.theme	{"fields": ["theme", "fonts.media", "fonts.weight", "fonts.style", "fonts.variant"]}	[]	2023-10-31 02:01:35.996	2023-10-31 02:01:35.996	\N	\N	{}
398	plugin::content-manager.explorer.read	api::tier.tier	{"fields": ["title", "description", "price", "currency", "type", "period", "features.media", "features.description", "features.additional_media", "features.title", "features.subtitle", "old_price", "buttons.url", "buttons.media", "buttons.description", "buttons.variant", "buttons.additional_media", "buttons.title", "buttons.additional_attributes", "buttons.class_name", "buttons.flyout"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.003	2023-10-31 02:01:36.003	\N	\N	{}
399	plugin::content-manager.explorer.read	api::topbar.topbar	{"fields": ["title", "uid", "variant", "page_blocks", "layouts", "class_name", "position", "side"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.01	2023-10-31 02:01:36.01	\N	\N	{}
400	plugin::content-manager.explorer.update	plugin::users-permissions.user	{"fields": ["username", "email", "provider", "password", "resetPasswordToken", "confirmationToken", "confirmed", "blocked", "role"]}	[]	2023-10-31 02:01:36.015	2023-10-31 02:01:36.015	\N	\N	{}
401	plugin::content-manager.explorer.update	api::configuration.configuration	{"fields": ["configs.provider", "configs.config"]}	[]	2023-10-31 02:01:36.021	2023-10-31 02:01:36.021	\N	\N	{}
402	plugin::content-manager.explorer.update	api::currency.currency	{"fields": ["title", "unicode", "is_default", "tiers"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.025	2023-10-31 02:01:36.025	\N	\N	{}
403	plugin::content-manager.explorer.update	api::flyout.flyout	{"fields": ["variant", "page_blocks", "title", "uid", "class_name"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.03	2023-10-31 02:01:36.03	\N	\N	{}
404	plugin::content-manager.explorer.update	api::footer.footer	{"fields": ["title", "uid", "layouts", "page_blocks", "variant", "class_name"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.035	2023-10-31 02:01:36.035	\N	\N	{}
434	plugin::content-manager.explorer.delete	api::page.page	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.223	2023-10-31 02:01:36.223	\N	\N	{}
435	plugin::content-manager.explorer.delete	api::review.review	{}	[]	2023-10-31 02:01:36.228	2023-10-31 02:01:36.228	\N	\N	{}
405	plugin::content-manager.explorer.update	api::form.form	{"fields": ["inputs.placeholder", "inputs.variant", "inputs.is_required", "inputs.value", "inputs.name", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.label", "inputs.class_name", "inputs.type", "inputs.multiple", "inputs.min", "inputs.max", "inputs.step", "inputs.media", "inputs.additional_media", "inputs.extra_media", "class_name", "additional_attributes", "variant", "button.url", "button.media", "button.description", "button.variant", "button.additional_media", "button.title", "button.additional_attributes", "button.class_name", "button.flyout", "form_requests", "uid", "side_effects.type", "side_effects.recievers.identifier", "side_effects.recievers.admin", "side_effects.recievers.user", "side_effects.provider", "title"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.04	2023-10-31 02:01:36.04	\N	\N	{}
406	plugin::content-manager.explorer.update	api::form-request.form-request	{"fields": ["inputs.key", "inputs.value", "inputs.files", "inputs.options.title", "inputs.options.description", "inputs.options.media", "inputs.options.additional_media", "inputs.is_true", "inputs.option.title", "inputs.option.description", "inputs.option.media", "inputs.option.additional_media", "inputs.date_value", "inputs.datetime_value", "inputs.dates.date_value", "inputs.dates.datetime_value", "inputs.dates.time_value", "files", "form"]}	[]	2023-10-31 02:01:36.046	2023-10-31 02:01:36.046	\N	\N	{}
407	plugin::content-manager.explorer.update	api::layout.layout	{"fields": ["title", "uid", "sidebar", "variant", "topbar", "footer", "slide_overs", "modals", "navbar", "class_name", "pages"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.051	2023-10-31 02:01:36.051	\N	\N	{}
408	plugin::content-manager.explorer.update	api::loader.loader	{"fields": ["variant", "media", "additional_media", "class_name", "anchor", "title", "subtitle", "description"]}	[]	2023-10-31 02:01:36.057	2023-10-31 02:01:36.057	\N	\N	{}
409	plugin::content-manager.explorer.update	api::metatag.metatag	{"fields": ["title", "description", "script", "gtm_key", "favicon", "pages", "is_default"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.065	2023-10-31 02:01:36.065	\N	\N	{}
410	plugin::content-manager.explorer.update	api::modal.modal	{"fields": ["uid", "page_blocks", "dialog_panel_class_name", "variant", "title", "layouts", "class_name"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.07	2023-10-31 02:01:36.07	\N	\N	{}
411	plugin::content-manager.explorer.update	api::navbar.navbar	{"fields": ["title", "uid", "page_blocks", "variant", "class_name", "layouts", "position", "side"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.075	2023-10-31 02:01:36.075	\N	\N	{}
412	plugin::content-manager.explorer.update	api::page.page	{"fields": ["title", "url", "layout", "page_blocks", "metatag"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.084	2023-10-31 02:01:36.084	\N	\N	{}
413	plugin::content-manager.explorer.update	api::review.review	{"fields": ["name", "title", "description", "subtitle", "rating", "media", "additional_media"]}	[]	2023-10-31 02:01:36.09	2023-10-31 02:01:36.09	\N	\N	{}
414	plugin::content-manager.explorer.update	api::robot.robot	{"fields": ["robots"]}	[]	2023-10-31 02:01:36.097	2023-10-31 02:01:36.097	\N	\N	{}
415	plugin::content-manager.explorer.update	api::sidebar.sidebar	{"fields": ["variant", "title", "uid", "page_blocks", "class_name", "layouts", "side"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.105	2023-10-31 02:01:36.105	\N	\N	{}
416	plugin::content-manager.explorer.update	api::slide-over.slide-over	{"fields": ["variant", "title", "uid", "class_name", "page_blocks", "layouts"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.112	2023-10-31 02:01:36.112	\N	\N	{}
417	plugin::content-manager.explorer.update	api::slider.slider	{"fields": ["variant", "slides.title", "slides.description", "slides.subtitle", "slides.media", "slides.buttons.url", "slides.buttons.media", "slides.buttons.description", "slides.buttons.variant", "slides.buttons.additional_media", "slides.buttons.title", "slides.buttons.additional_attributes", "slides.buttons.class_name", "slides.buttons.flyout", "slides.additional_media", "show_backdrop", "show_full_screen", "show_previews", "class_name", "aspect_ratio_class_name", "title", "uid"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.118	2023-10-31 02:01:36.118	\N	\N	{}
418	plugin::content-manager.explorer.update	api::telegram.telegram	{"fields": ["name"]}	[]	2023-10-31 02:01:36.124	2023-10-31 02:01:36.124	\N	\N	{}
419	plugin::content-manager.explorer.update	api::theme.theme	{"fields": ["theme", "fonts.media", "fonts.weight", "fonts.style", "fonts.variant"]}	[]	2023-10-31 02:01:36.131	2023-10-31 02:01:36.131	\N	\N	{}
420	plugin::content-manager.explorer.update	api::tier.tier	{"fields": ["title", "description", "price", "currency", "type", "period", "features.media", "features.description", "features.additional_media", "features.title", "features.subtitle", "old_price", "buttons.url", "buttons.media", "buttons.description", "buttons.variant", "buttons.additional_media", "buttons.title", "buttons.additional_attributes", "buttons.class_name", "buttons.flyout"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.137	2023-10-31 02:01:36.137	\N	\N	{}
421	plugin::content-manager.explorer.update	api::topbar.topbar	{"fields": ["title", "uid", "variant", "page_blocks", "layouts", "class_name", "position", "side"], "locales": ["en", "es"]}	[]	2023-10-31 02:01:36.144	2023-10-31 02:01:36.144	\N	\N	{}
422	plugin::content-manager.explorer.delete	plugin::users-permissions.user	{}	[]	2023-10-31 02:01:36.15	2023-10-31 02:01:36.15	\N	\N	{}
423	plugin::content-manager.explorer.delete	api::configuration.configuration	{}	[]	2023-10-31 02:01:36.158	2023-10-31 02:01:36.158	\N	\N	{}
424	plugin::content-manager.explorer.delete	api::currency.currency	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.164	2023-10-31 02:01:36.164	\N	\N	{}
425	plugin::content-manager.explorer.delete	api::flyout.flyout	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.169	2023-10-31 02:01:36.169	\N	\N	{}
426	plugin::content-manager.explorer.delete	api::footer.footer	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.176	2023-10-31 02:01:36.176	\N	\N	{}
427	plugin::content-manager.explorer.delete	api::form.form	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.181	2023-10-31 02:01:36.181	\N	\N	{}
428	plugin::content-manager.explorer.delete	api::form-request.form-request	{}	[]	2023-10-31 02:01:36.187	2023-10-31 02:01:36.187	\N	\N	{}
429	plugin::content-manager.explorer.delete	api::layout.layout	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.193	2023-10-31 02:01:36.193	\N	\N	{}
430	plugin::content-manager.explorer.delete	api::loader.loader	{}	[]	2023-10-31 02:01:36.198	2023-10-31 02:01:36.198	\N	\N	{}
431	plugin::content-manager.explorer.delete	api::metatag.metatag	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.203	2023-10-31 02:01:36.203	\N	\N	{}
432	plugin::content-manager.explorer.delete	api::modal.modal	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.21	2023-10-31 02:01:36.21	\N	\N	{}
433	plugin::content-manager.explorer.delete	api::navbar.navbar	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.218	2023-10-31 02:01:36.218	\N	\N	{}
498	admin::roles.update	\N	{}	[]	2023-10-31 02:01:36.583	2023-10-31 02:01:36.583	\N	\N	{}
436	plugin::content-manager.explorer.delete	api::robot.robot	{}	[]	2023-10-31 02:01:36.233	2023-10-31 02:01:36.233	\N	\N	{}
437	plugin::content-manager.explorer.delete	api::sidebar.sidebar	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.239	2023-10-31 02:01:36.239	\N	\N	{}
438	plugin::content-manager.explorer.delete	api::slide-over.slide-over	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.245	2023-10-31 02:01:36.245	\N	\N	{}
439	plugin::content-manager.explorer.delete	api::slider.slider	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.25	2023-10-31 02:01:36.25	\N	\N	{}
440	plugin::content-manager.explorer.delete	api::telegram.telegram	{}	[]	2023-10-31 02:01:36.256	2023-10-31 02:01:36.256	\N	\N	{}
441	plugin::content-manager.explorer.delete	api::theme.theme	{}	[]	2023-10-31 02:01:36.261	2023-10-31 02:01:36.261	\N	\N	{}
442	plugin::content-manager.explorer.delete	api::tier.tier	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.266	2023-10-31 02:01:36.266	\N	\N	{}
443	plugin::content-manager.explorer.delete	api::topbar.topbar	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.27	2023-10-31 02:01:36.27	\N	\N	{}
444	plugin::content-manager.explorer.publish	api::currency.currency	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.275	2023-10-31 02:01:36.275	\N	\N	{}
445	plugin::content-manager.explorer.publish	api::flyout.flyout	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.28	2023-10-31 02:01:36.28	\N	\N	{}
446	plugin::content-manager.explorer.publish	api::footer.footer	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.285	2023-10-31 02:01:36.285	\N	\N	{}
447	plugin::content-manager.explorer.publish	api::form.form	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.29	2023-10-31 02:01:36.29	\N	\N	{}
448	plugin::content-manager.explorer.publish	api::layout.layout	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.296	2023-10-31 02:01:36.296	\N	\N	{}
449	plugin::content-manager.explorer.publish	api::loader.loader	{}	[]	2023-10-31 02:01:36.301	2023-10-31 02:01:36.301	\N	\N	{}
450	plugin::content-manager.explorer.publish	api::metatag.metatag	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.307	2023-10-31 02:01:36.307	\N	\N	{}
451	plugin::content-manager.explorer.publish	api::modal.modal	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.313	2023-10-31 02:01:36.313	\N	\N	{}
452	plugin::content-manager.explorer.publish	api::navbar.navbar	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.32	2023-10-31 02:01:36.32	\N	\N	{}
453	plugin::content-manager.explorer.publish	api::page.page	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.326	2023-10-31 02:01:36.326	\N	\N	{}
454	plugin::content-manager.explorer.publish	api::review.review	{}	[]	2023-10-31 02:01:36.331	2023-10-31 02:01:36.331	\N	\N	{}
455	plugin::content-manager.explorer.publish	api::sidebar.sidebar	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.336	2023-10-31 02:01:36.336	\N	\N	{}
456	plugin::content-manager.explorer.publish	api::slide-over.slide-over	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.341	2023-10-31 02:01:36.341	\N	\N	{}
457	plugin::content-manager.explorer.publish	api::slider.slider	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.347	2023-10-31 02:01:36.347	\N	\N	{}
458	plugin::content-manager.explorer.publish	api::theme.theme	{}	[]	2023-10-31 02:01:36.353	2023-10-31 02:01:36.353	\N	\N	{}
459	plugin::content-manager.explorer.publish	api::tier.tier	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.358	2023-10-31 02:01:36.358	\N	\N	{}
460	plugin::content-manager.explorer.publish	api::topbar.topbar	{"locales": ["en", "es"]}	[]	2023-10-31 02:01:36.363	2023-10-31 02:01:36.363	\N	\N	{}
461	plugin::content-manager.single-types.configure-view	\N	{}	[]	2023-10-31 02:01:36.368	2023-10-31 02:01:36.368	\N	\N	{}
462	plugin::content-manager.collection-types.configure-view	\N	{}	[]	2023-10-31 02:01:36.373	2023-10-31 02:01:36.373	\N	\N	{}
463	plugin::content-manager.components.configure-layout	\N	{}	[]	2023-10-31 02:01:36.378	2023-10-31 02:01:36.378	\N	\N	{}
464	plugin::content-type-builder.read	\N	{}	[]	2023-10-31 02:01:36.384	2023-10-31 02:01:36.384	\N	\N	{}
465	plugin::email.settings.read	\N	{}	[]	2023-10-31 02:01:36.39	2023-10-31 02:01:36.39	\N	\N	{}
466	plugin::upload.read	\N	{}	[]	2023-10-31 02:01:36.395	2023-10-31 02:01:36.395	\N	\N	{}
467	plugin::upload.assets.create	\N	{}	[]	2023-10-31 02:01:36.402	2023-10-31 02:01:36.402	\N	\N	{}
468	plugin::upload.assets.update	\N	{}	[]	2023-10-31 02:01:36.41	2023-10-31 02:01:36.41	\N	\N	{}
469	plugin::upload.assets.download	\N	{}	[]	2023-10-31 02:01:36.416	2023-10-31 02:01:36.416	\N	\N	{}
470	plugin::upload.assets.copy-link	\N	{}	[]	2023-10-31 02:01:36.421	2023-10-31 02:01:36.421	\N	\N	{}
471	plugin::upload.configure-view	\N	{}	[]	2023-10-31 02:01:36.427	2023-10-31 02:01:36.427	\N	\N	{}
472	plugin::upload.settings.read	\N	{}	[]	2023-10-31 02:01:36.432	2023-10-31 02:01:36.432	\N	\N	{}
473	plugin::i18n.locale.create	\N	{}	[]	2023-10-31 02:01:36.438	2023-10-31 02:01:36.438	\N	\N	{}
474	plugin::i18n.locale.read	\N	{}	[]	2023-10-31 02:01:36.443	2023-10-31 02:01:36.443	\N	\N	{}
475	plugin::i18n.locale.update	\N	{}	[]	2023-10-31 02:01:36.449	2023-10-31 02:01:36.449	\N	\N	{}
476	plugin::i18n.locale.delete	\N	{}	[]	2023-10-31 02:01:36.454	2023-10-31 02:01:36.454	\N	\N	{}
477	plugin::users-permissions.roles.create	\N	{}	[]	2023-10-31 02:01:36.462	2023-10-31 02:01:36.462	\N	\N	{}
478	plugin::users-permissions.roles.read	\N	{}	[]	2023-10-31 02:01:36.468	2023-10-31 02:01:36.468	\N	\N	{}
479	plugin::users-permissions.roles.update	\N	{}	[]	2023-10-31 02:01:36.473	2023-10-31 02:01:36.473	\N	\N	{}
480	plugin::users-permissions.roles.delete	\N	{}	[]	2023-10-31 02:01:36.48	2023-10-31 02:01:36.48	\N	\N	{}
481	plugin::users-permissions.providers.read	\N	{}	[]	2023-10-31 02:01:36.486	2023-10-31 02:01:36.486	\N	\N	{}
482	plugin::users-permissions.providers.update	\N	{}	[]	2023-10-31 02:01:36.493	2023-10-31 02:01:36.493	\N	\N	{}
483	plugin::users-permissions.email-templates.read	\N	{}	[]	2023-10-31 02:01:36.498	2023-10-31 02:01:36.498	\N	\N	{}
484	plugin::users-permissions.email-templates.update	\N	{}	[]	2023-10-31 02:01:36.503	2023-10-31 02:01:36.503	\N	\N	{}
485	plugin::users-permissions.advanced-settings.read	\N	{}	[]	2023-10-31 02:01:36.509	2023-10-31 02:01:36.509	\N	\N	{}
486	plugin::users-permissions.advanced-settings.update	\N	{}	[]	2023-10-31 02:01:36.514	2023-10-31 02:01:36.514	\N	\N	{}
487	admin::marketplace.read	\N	{}	[]	2023-10-31 02:01:36.52	2023-10-31 02:01:36.52	\N	\N	{}
488	admin::webhooks.create	\N	{}	[]	2023-10-31 02:01:36.526	2023-10-31 02:01:36.526	\N	\N	{}
489	admin::webhooks.read	\N	{}	[]	2023-10-31 02:01:36.532	2023-10-31 02:01:36.532	\N	\N	{}
490	admin::webhooks.update	\N	{}	[]	2023-10-31 02:01:36.54	2023-10-31 02:01:36.54	\N	\N	{}
491	admin::webhooks.delete	\N	{}	[]	2023-10-31 02:01:36.545	2023-10-31 02:01:36.545	\N	\N	{}
492	admin::users.create	\N	{}	[]	2023-10-31 02:01:36.55	2023-10-31 02:01:36.55	\N	\N	{}
493	admin::users.read	\N	{}	[]	2023-10-31 02:01:36.555	2023-10-31 02:01:36.555	\N	\N	{}
494	admin::users.update	\N	{}	[]	2023-10-31 02:01:36.56	2023-10-31 02:01:36.56	\N	\N	{}
495	admin::users.delete	\N	{}	[]	2023-10-31 02:01:36.566	2023-10-31 02:01:36.566	\N	\N	{}
496	admin::roles.create	\N	{}	[]	2023-10-31 02:01:36.571	2023-10-31 02:01:36.571	\N	\N	{}
497	admin::roles.read	\N	{}	[]	2023-10-31 02:01:36.577	2023-10-31 02:01:36.577	\N	\N	{}
\.


--
-- Data for Name: admin_permissions_role_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admin_permissions_role_links (id, permission_id, role_id, permission_order) FROM stdin;
1	1	2	1
2	2	2	2
3	3	2	3
4	4	2	4
5	5	2	5
6	6	2	6
7	7	2	7
8	8	2	8
9	9	2	9
10	10	2	10
11	11	2	11
12	12	2	12
13	13	2	13
14	14	2	14
15	15	2	15
16	16	2	16
17	17	2	17
18	18	2	18
19	19	2	19
20	20	2	20
21	21	2	21
22	22	2	22
23	23	2	23
24	24	2	24
25	25	2	25
26	26	2	26
27	27	2	27
28	28	2	28
29	29	2	29
30	30	2	30
31	31	2	31
32	32	2	32
33	33	2	33
34	34	2	34
35	35	2	35
36	36	2	36
37	37	2	37
38	38	2	38
39	39	2	39
40	40	2	40
41	41	2	41
42	42	2	42
43	43	2	43
44	44	2	44
45	45	2	45
46	46	2	46
47	47	2	47
48	48	2	48
49	49	2	49
50	50	2	50
51	51	2	51
52	52	2	52
53	53	2	53
54	54	2	54
55	55	2	55
56	56	2	56
57	57	2	57
58	58	2	58
59	59	2	59
60	60	2	60
61	61	2	61
62	62	2	62
63	63	2	63
64	64	2	64
69	69	2	69
71	71	2	71
76	76	2	76
77	77	2	77
81	81	2	81
82	82	2	82
90	90	2	90
95	95	2	95
99	99	2	99
102	102	2	102
103	103	2	103
104	104	2	104
105	105	2	105
106	106	2	106
107	107	2	107
108	108	3	1
109	109	3	2
110	110	3	3
111	111	3	4
112	112	3	5
113	113	3	6
114	114	3	7
115	115	3	8
116	116	3	9
117	117	3	10
118	118	3	11
119	119	3	12
120	120	3	13
121	121	3	14
122	122	3	15
123	123	3	16
124	124	3	17
125	125	3	18
126	126	3	19
127	127	3	20
128	128	3	21
129	129	3	22
130	130	3	23
131	131	3	24
132	132	3	25
133	133	3	26
134	134	3	27
135	135	3	28
136	136	3	29
137	137	3	30
138	138	3	31
139	139	3	32
140	140	3	33
141	141	3	34
142	142	3	35
143	143	3	36
144	144	3	37
145	145	3	38
146	146	3	39
147	147	3	40
148	148	3	41
149	149	3	42
150	150	3	43
151	151	3	44
152	152	3	45
153	153	3	46
154	154	3	47
155	155	3	48
156	156	3	49
157	157	3	50
158	158	3	51
159	159	3	52
160	160	3	53
161	161	3	54
162	162	3	55
163	163	3	56
164	164	3	57
165	165	3	58
166	166	3	59
167	167	3	60
168	168	3	61
169	169	3	62
170	170	3	63
171	171	3	64
176	176	3	69
178	178	3	71
183	183	3	76
184	184	3	77
188	188	3	81
189	189	3	82
192	192	3	85
193	193	3	86
194	194	3	87
195	195	3	88
196	196	3	89
197	197	3	90
426	356	1	1
427	357	1	2
428	358	1	3
429	359	1	4
430	360	1	5
431	361	1	6
432	362	1	7
433	363	1	8
434	364	1	9
435	365	1	10
436	366	1	11
437	367	1	12
438	368	1	13
439	369	1	14
440	370	1	15
441	371	1	16
442	372	1	17
443	373	1	18
444	374	1	19
445	375	1	20
446	376	1	21
447	377	1	22
448	378	1	23
449	379	1	24
450	380	1	25
451	381	1	26
452	382	1	27
453	383	1	28
454	384	1	29
455	385	1	30
456	386	1	31
457	387	1	32
458	388	1	33
459	389	1	34
460	390	1	35
461	391	1	36
462	392	1	37
463	393	1	38
464	394	1	39
465	395	1	40
466	396	1	41
467	397	1	42
468	398	1	43
469	399	1	44
470	400	1	45
471	401	1	46
472	402	1	47
473	403	1	48
474	404	1	49
475	405	1	50
476	406	1	51
477	407	1	52
478	408	1	53
479	409	1	54
480	410	1	55
481	411	1	56
482	412	1	57
483	413	1	58
484	414	1	59
485	415	1	60
486	416	1	61
487	417	1	62
488	418	1	63
489	419	1	64
490	420	1	65
491	421	1	66
492	422	1	67
493	423	1	68
494	424	1	69
495	425	1	70
496	426	1	71
497	427	1	72
498	428	1	73
499	429	1	74
500	430	1	75
501	431	1	76
502	432	1	77
503	433	1	78
504	434	1	79
505	435	1	80
506	436	1	81
507	437	1	82
508	438	1	83
509	439	1	84
510	440	1	85
511	441	1	86
512	442	1	87
513	443	1	88
514	444	1	89
515	445	1	90
516	446	1	91
517	447	1	92
518	448	1	93
519	449	1	94
520	450	1	95
521	451	1	96
522	452	1	97
523	453	1	98
524	454	1	99
525	455	1	100
526	456	1	101
527	457	1	102
528	458	1	103
529	459	1	104
530	460	1	105
531	461	1	106
532	462	1	107
533	463	1	108
534	464	1	109
535	465	1	110
536	466	1	111
537	467	1	112
538	468	1	113
539	469	1	114
540	470	1	115
541	471	1	116
542	472	1	117
543	473	1	118
544	474	1	119
545	475	1	120
546	476	1	121
547	477	1	122
548	478	1	123
549	479	1	124
550	480	1	125
551	481	1	126
552	482	1	127
553	483	1	128
554	484	1	129
555	485	1	130
556	486	1	131
557	487	1	132
558	488	1	133
559	489	1	134
560	490	1	135
561	491	1	136
562	492	1	137
563	493	1	138
564	494	1	139
565	495	1	140
566	496	1	141
567	497	1	142
568	498	1	143
569	499	1	144
570	500	1	145
571	501	1	146
572	502	1	147
573	503	1	148
574	504	1	149
575	505	1	150
576	506	1	151
577	507	1	152
578	508	1	153
579	509	1	154
580	510	1	155
581	511	1	156
582	512	1	157
583	513	1	158
\.


--
-- Data for Name: admin_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admin_roles (id, name, code, description, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	Super Admin	strapi-super-admin	Super Admins can access and manage all features and settings.	2023-09-06 02:41:10.777	2023-09-06 02:41:10.777	\N	\N
2	Editor	strapi-editor	Editors can manage and publish contents including those of other users.	2023-09-06 02:41:10.793	2023-09-06 02:41:10.793	\N	\N
3	Author	strapi-author	Authors can manage the content they have created.	2023-09-06 02:41:10.797	2023-09-06 02:41:10.797	\N	\N
\.


--
-- Data for Name: admin_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admin_users (id, firstname, lastname, username, email, password, reset_password_token, registration_token, is_active, blocked, prefered_language, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	rogwild	design	\N	rogwild.design@gmail.com	$2a$10$HewtSGchWjhZTCUtI/7TX.lGKxijBdZUDGeag46I5zyfgXEKjQ.OG	\N	\N	t	f	\N	2023-09-06 03:20:39.071	2023-09-06 03:20:39.071	\N	\N
\.


--
-- Data for Name: admin_users_roles_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.admin_users_roles_links (id, user_id, role_id, role_order, user_order) FROM stdin;
1	1	1	1	1
\.


--
-- Data for Name: components_elements_buttons; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_buttons (id, url, description, variant, title, additional_attributes, class_name) FROM stdin;
1	/en	\N	text	EN (English)	\N	\N
8	/terms-and-conditions	\N	text	Terms and Conditions	\N	\N
9	https://github.com/singlepagestartup/sps-lite	\N	text	GitHub	\N	\N
7	/page-with-sidebar-layout	\N	text	Page With Sidebar	\N	\N
10	https://doc.singlepagestartup.com/	\N	text	Documentation	\N	\N
11	/terms-and-conditions	\N	text	Terms and Conditions	\N	\N
12	https://github.com/singlepagestartup/sps-lite	\N	text	\N	\N	\N
13	\N	\N	primary	Send Request	\N	\N
15	\N	\N	text	Flyout	\N	\N
14	/	\N	text	Main	\N	\N
16	/page-with-sidebar-layout	\N	text	Sidebar	\N	\N
18	?opened_slide_over=this-is-slide-over	\N	text	Slide Over	\N	\N
17	?opened_modal=this-is-modal	\N	text	Modal	\N	\N
19	https://github.com/singlepagestartup/sps-lite	\N	secondary	GitHub	\N	\N
20	\N	\N	locale	\N	\N	\N
23	/	\N	text	Main	\N	\N
24	https://github.com/singlepagestartup/sps-lite	\N	primary	Get started	\N	\N
25	/	\N	primary	Main page	\N	\N
21	https://github.com/singlepagestartup/sps-lite	\N	primary	Start For Free	\N	\N
22	https://github.com/singlepagestartup/sps-lite	\N	primary	Open GitHub	\N	\N
\.


--
-- Data for Name: components_elements_buttons_arrays; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_buttons_arrays (id, title, class_name, variant, description, url, additional_attributes) FROM stdin;
1	Pages	\N	column-with-title	\N	\N	\N
2	Links	\N	column-with-title	\N	\N	\N
3	\N	\N	row	\N	\N	\N
4	\N	\N	row	\N	\N	\N
\.


--
-- Data for Name: components_elements_buttons_arrays_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_buttons_arrays_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
1	1	7	elements.button	buttons	1
2	2	9	elements.button	buttons	1
3	1	8	elements.button	buttons	2
4	2	10	elements.button	buttons	2
5	3	11	elements.button	buttons	1
6	4	12	elements.button	buttons	1
\.


--
-- Data for Name: components_elements_buttons_flyout_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_buttons_flyout_links (id, button_id, flyout_id) FROM stdin;
1	15	2
2	20	1
\.


--
-- Data for Name: components_elements_date_values; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_date_values (id, date_value, datetime_value, time_value) FROM stdin;
22	\N	\N	\N
23	\N	\N	\N
24	\N	\N	\N
25	\N	\N	\N
26	\N	\N	\N
27	\N	\N	\N
28	2023-09-25	\N	\N
29	2023-09-25	\N	\N
30	\N	\N	\N
31	2023-09-25	\N	\N
32	2023-10-19	\N	\N
33	2023-09-25	\N	\N
34	2023-09-25	\N	\N
35	\N	\N	\N
36	2023-09-25	\N	\N
\.


--
-- Data for Name: components_elements_faqs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_faqs (id, description, title) FROM stdin;
\.


--
-- Data for Name: components_elements_features; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_features (id, description, title, subtitle) FROM stdin;
33	\N	Конструктор PageBlock'ов	\N
34	\N	Настроенный фронтенд	\N
35	\N	Базовые модели для одностраничного сайта	\N
36	\N	Конструктор PageBlock'ов, аутентификация,  личный кабинет пользователя, интеграции и многое другое	\N
37	\N	Настроенный фронтенд с библиотекой компонентов	\N
38	\N	Все модели для построения стартапа любой сложности	\N
39	\N	Доступ к репозиторию с исходниками	\N
40	\N	Доступ к комьюнити	\N
21	Leverage our pre-built navigation elements, forms, photo galleries, text blocks, CTA elements, and more to create a visually appealing and engaging user experience with minimal effort.	Ready-to-Use UI Components	\N
27	Utilize our ready-to-use product catalog, product pages, shopping cart, delivery options, and order history to jumpstart your e-commerce project.	Comprehensive E-Commerce Features	\N
28	Establish your personal brand by enabling our integrated blogging functionality, perfect for sharing news and insights with your audience.	Built-In Blogging Capabilities	\N
29	Tailor your project to your needs using the Strapi admin panel, extend its capabilities with plugins, or create your own custom features.	Flexible Customization and Extensibility	\N
23	Your startup's international expansion is a breeze with our boilerplate's built-in multilingual support. Just select the languages you want to support, and you're good to go.	Global-Ready	\N
30	Easily migrate or seed data by completing your project locally, running a data dump, and migrating it to your server, or by describing your data as JSON and adding it to the data seeding process.	Hassle-Free Data Migration and Seeding	\N
25	Save 20 to 100 hours of development time with our ready-to-use, best-practice authentication and authorization system. Focus on your core features and let us handle the rest.	Streamlined Authentication & Authorization	\N
24	Quickly add essential features to your MVP with built-in support for popular services such as authentication, payment gateways, and analytics tools. Less hassle, more productivity.	Seamless Third-Party Service Integration	\N
26	Generate documents based on user data or completed forms with ease using our built-in document generation functionality. Just incorporate it into your business logic and you're set.	Effortless Document Generation	\N
22	Enhance user profiles with our pre-built avatar functionality. Simply add the PageBlock to the profile page and let your users personalize their accounts with custom avatars.	Easy Avatar Integration	\N
32	Our boilerplate is designed to be easily customizable, allowing you to add, modify, or remove features as needed. This flexibility ensures that you can tailor your MVP to meet the specific requirements of your target customers and adapt it as you learn from their feedback.	Modular and Scalable	\N
31	With pre-configured deployment tools and processes, our boilerplate enables you to quickly deploy your MVP to your preferred hosting platform. This helps you reduce the time-to-market and start gathering valuable customer feedback sooner.	Rapid Deployment (CI/CD)	\N
\.


--
-- Data for Name: components_elements_fonts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_fonts (id, weight, style, variant) FROM stdin;
3	light	normal	default
2	medium	normal	default
5	bold	normal	default
4	regular	normal	default
1	semi_bold	normal	default
\.


--
-- Data for Name: components_elements_input_options; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_input_options (id, title, description) FROM stdin;
5	Lite	\N
6	Pro	\N
7	Yes	\N
8	No	\N
11	Yes	\N
12	Pro	\N
13	No	\N
14	Pro	\N
15	No	\N
16	Pro	\N
17	No	\N
18	Yes	\N
19	No	\N
20	Pro	\N
21	No	\N
22	Pro	\N
24	No	\N
23	Pro	\N
\.


--
-- Data for Name: components_elements_inputs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_inputs (id, placeholder, variant, is_required, value, name, label, class_name, type, multiple, min, max, step) FROM stdin;
10	Type your name	text	t	\N	name	Name	col-span-2	\N	\N	\N	\N	\N
11	Type your email	text	t	\N	email	Email	col-span-2	\N	\N	\N	\N	\N
12	Monthly visitors	range	f	\N	visitors	Monthly visitors	col-span-4	\N	\N	\N	10000	100
13	Type your question	text	f	\N	querstion	Question	col-span-4	textarea	\N	\N	\N	\N
14	Select release date	date	f	\N	release	Release	col-span-4	date_inline	\N	\N	\N	\N
15	Upload design file	file	f	\N	design	Design	\N	\N	\N	\N	\N	\N
16	\N	switch	t	\N	policy	I agree with Terms and Conditions	col-span-4	\N	\N	\N	\N	\N
17	Choose target tier	listbox	f	\N	tier	Tier	col-span-4	\N	t	\N	\N	\N
18	Select hosting type	radio-group	f	\N	self_hosted	Self Hosted	col-span-4	\N	\N	\N	\N	\N
\.


--
-- Data for Name: components_elements_inputs_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_inputs_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
5	17	5	elements.input-option	options	1
6	17	6	elements.input-option	options	2
7	18	7	elements.input-option	options	1
8	18	8	elements.input-option	options	2
\.


--
-- Data for Name: components_elements_logotypes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_logotypes (id, title, url) FROM stdin;
1	\N	/
2	\N	/
\.


--
-- Data for Name: components_elements_recievers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_recievers (id, identifier) FROM stdin;
2	rogwild.design@gmail.com
\.


--
-- Data for Name: components_elements_recievers_admin_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_recievers_admin_links (id, reciever_id, user_id) FROM stdin;
\.


--
-- Data for Name: components_elements_recievers_user_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_recievers_user_links (id, reciever_id, user_id) FROM stdin;
\.


--
-- Data for Name: components_elements_request_inputs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_request_inputs (id, key, value, is_true, date_value, datetime_value) FROM stdin;
217	tier	\N	\N	\N	\N
219	visitors	0	\N	\N	\N
10	name	dfsdf	\N	\N	\N
11	email	asdfsdf@csd.sdc	\N	\N	\N
12	tier	\N	\N	\N	\N
13	visitors	0	\N	\N	\N
16	policy	\N	t	\N	\N
14	design	\N	\N	\N	\N
15	querstion		\N	\N	\N
17	self_hosted	\N	\N	\N	\N
18	name	sadf	\N	\N	\N
20	self_hosted	\N	\N	\N	\N
21	tier	\N	\N	\N	\N
19	email	asdf	\N	\N	\N
22	visitors	0	\N	\N	\N
23	querstion		\N	\N	\N
24	design	\N	\N	\N	\N
25	policy	\N	t	\N	\N
215	name	Tester	\N	\N	\N
220	querstion		\N	\N	\N
212	querstion		\N	\N	\N
216	email	tester@example.com	\N	\N	\N
221	design	\N	\N	\N	\N
223	release	\N	\N	\N	\N
209	tier	\N	\N	\N	\N
218	self_hosted	\N	\N	\N	\N
222	policy	\N	t	\N	\N
208	self_hosted	\N	\N	\N	\N
224	email	tester@example.com	\N	\N	\N
228	visitors	0	\N	\N	\N
233	name	Tester	\N	\N	\N
207	email	tester@example.com	\N	\N	\N
235	tier	\N	\N	\N	\N
237	visitors	0	\N	\N	\N
240	policy	\N	t	\N	\N
246	visitors	0	\N	\N	\N
225	name	Tester	\N	\N	\N
227	self_hosted	\N	\N	\N	\N
230	design	\N	\N	\N	\N
214	release	\N	\N	\N	\N
226	tier	\N	\N	\N	\N
229	querstion		\N	\N	\N
210	design	\N	\N	\N	\N
231	policy	\N	t	\N	\N
213	policy	\N	t	\N	\N
206	name	Tester	\N	\N	\N
232	release	\N	\N	\N	\N
238	querstion		\N	\N	\N
244	tier	\N	\N	\N	\N
234	email	tester@example.com	\N	\N	\N
236	self_hosted	\N	\N	\N	\N
239	design	\N	\N	\N	\N
245	self_hosted	\N	\N	\N	\N
241	release	\N	\N	\N	\N
250	release	\N	\N	\N	\N
242	name	Tester	\N	\N	\N
243	email	tester@example.com	\N	\N	\N
247	querstion		\N	\N	\N
248	design	\N	\N	\N	\N
249	policy	\N	t	\N	\N
251	name	фыва	\N	\N	\N
253	tier	\N	\N	\N	\N
254	self_hosted	\N	\N	\N	\N
258	design	\N	\N	\N	\N
252	email	фывафыва	\N	\N	\N
256	querstion		\N	\N	\N
257	policy	\N	t	\N	\N
255	visitors	0	\N	\N	\N
259	release	\N	\N	\N	\N
260	name	Tester	\N	\N	\N
263	querstion	Big question description	\N	\N	\N
261	email	tester@example.com	\N	\N	\N
265	policy	\N	t	\N	\N
262	visitors	0	\N	\N	\N
264	design	\N	\N	\N	\N
266	tier	\N	\N	\N	\N
267	release	\N	\N	\N	\N
268	self_hosted	\N	\N	\N	\N
269	name	Tester	\N	\N	\N
270	querstion	Big question description	\N	\N	\N
273	design	\N	\N	\N	\N
277	release	\N	\N	\N	\N
271	email	tester@example.com	\N	\N	\N
274	policy	\N	t	\N	\N
272	visitors	0	\N	\N	\N
275	tier	\N	\N	\N	\N
278	name	Tester	\N	\N	\N
288	design	\N	\N	\N	\N
276	self_hosted	\N	\N	\N	\N
283	querstion		\N	\N	\N
290	email	tester@example.com	\N	\N	\N
279	email	tester@example.com	\N	\N	\N
289	name	Tester	\N	\N	\N
280	tier	\N	\N	\N	\N
291	visitors	0	\N	\N	\N
281	visitors	0	\N	\N	\N
282	self_hosted	\N	\N	\N	\N
287	querstion	Big question description	\N	\N	\N
295	release	\N	\N	\N	\N
296	name	sdf	\N	\N	\N
298	tier	\N	\N	\N	\N
300	querstion		\N	\N	\N
302	policy	\N	t	\N	\N
304	self_hosted	\N	\N	\N	\N
305	name	Tester	\N	\N	\N
307	visitors	0	\N	\N	\N
310	policy	\N	t	\N	\N
284	design	\N	\N	\N	\N
286	release	\N	\N	\N	\N
294	tier	\N	\N	\N	\N
285	policy	\N	t	\N	\N
292	policy	\N	t	\N	\N
293	self_hosted	\N	\N	\N	\N
297	email	sdf	\N	\N	\N
299	visitors	4900	\N	\N	\N
301	design	\N	\N	\N	\N
303	release	\N	\N	\N	\N
306	email	tester@example.com	\N	\N	\N
309	design	\N	\N	\N	\N
313	release	\N	\N	\N	\N
308	querstion	Big question description	\N	\N	\N
311	self_hosted	\N	\N	\N	\N
317	visitors	0	\N	\N	\N
322	release	\N	\N	\N	\N
324	name	Tester	\N	\N	\N
325	tier	\N	\N	\N	\N
328	querstion		\N	\N	\N
331	release	\N	\N	\N	\N
312	tier	\N	\N	\N	\N
314	email	tester@example.com	\N	\N	\N
316	querstion	Big question description	\N	\N	\N
318	design	\N	\N	\N	\N
321	self_hosted	\N	\N	\N	\N
315	name	Tester	\N	\N	\N
319	policy	\N	t	\N	\N
320	tier	\N	\N	\N	\N
327	visitors	0	\N	\N	\N
330	policy	\N	t	\N	\N
323	email	tester@example.com	\N	\N	\N
326	self_hosted	\N	\N	\N	\N
329	design	\N	\N	\N	\N
332	name	Tester	\N	\N	\N
335	querstion	Big question description	\N	\N	\N
337	policy	\N	t	\N	\N
333	email	tester@example.com	\N	\N	\N
336	design	\N	\N	\N	\N
334	visitors	0	\N	\N	\N
339	release	\N	\N	\N	\N
340	tier	\N	\N	\N	\N
338	self_hosted	\N	\N	\N	\N
211	visitors	0	\N	\N	\N
\.


--
-- Data for Name: components_elements_request_inputs_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_request_inputs_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
4	17	11	elements.input-option	option	\N
32	267	28	elements.date-value	dates	1
34	277	29	elements.date-value	dates	1
35	275	14	elements.input-option	options	1
36	276	15	elements.input-option	option	\N
37	286	30	elements.date-value	dates	1
38	294	16	elements.input-option	options	1
39	293	17	elements.input-option	option	\N
40	295	31	elements.date-value	dates	1
41	304	18	elements.input-option	option	\N
42	303	32	elements.date-value	dates	1
43	313	33	elements.date-value	dates	1
44	312	20	elements.input-option	options	1
47	321	21	elements.input-option	option	\N
45	311	19	elements.input-option	option	\N
48	322	34	elements.date-value	dates	1
49	331	35	elements.date-value	dates	1
46	320	22	elements.input-option	options	1
50	339	36	elements.date-value	dates	1
51	340	23	elements.input-option	options	1
52	338	24	elements.input-option	option	\N
25	214	22	elements.date-value	dates	1
26	223	23	elements.date-value	dates	1
27	232	24	elements.date-value	dates	1
28	241	25	elements.date-value	dates	1
29	250	26	elements.date-value	dates	1
30	259	27	elements.date-value	dates	1
33	268	13	elements.input-option	option	\N
31	266	12	elements.input-option	options	1
\.


--
-- Data for Name: components_elements_slides; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_slides (id, title, description, subtitle) FROM stdin;
4	Empower Your MVP with Best Practices	Our boilerplate comes with essential features like authentication, multilingual support, and integrations with popular third-party services. With minimum viable product (MVP) readiness in mind, we help you save time, effort, and resources as you bring your startup idea to life.	Launch faster with our ready-to-use components
5	Built for Agile Development	Our lean startup developer boilerplate is designed for agile development, allowing you to adapt and evolve your project rapidly. Stay ahead in the ever-changing startup landscape with built-in feedback mechanisms, seamless collaboration, and continuous improvement capabilities.	Foster innovation with a flexible and iterative approach
6	Jumpstart Your Startup Journey	Our pre-built boilerplate offers a comprehensive set of features and tools to accelerate your startup's development process. Say goodbye to repetitive tasks and focus on your core business logic with our customizable, efficient, and scalable solution.	Get ahead with our lean startup developer boilerplate
\.


--
-- Data for Name: components_elements_slides_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_elements_slides_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
2	6	24	elements.button	buttons	1
\.


--
-- Data for Name: components_functions_configs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_functions_configs (id, provider, config) FROM stdin;
\.


--
-- Data for Name: components_functions_form_side_effects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_functions_form_side_effects (id, type, provider) FROM stdin;
2	send-to-recievers	email
\.


--
-- Data for Name: components_functions_form_side_effects_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_functions_form_side_effects_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
2	2	2	elements.reciever	recievers	1
\.


--
-- Data for Name: components_page_blocks_alert_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_alert_blocks (id, title, subtitle, description, class_name, anchor, variant) FROM stdin;
\.


--
-- Data for Name: components_page_blocks_alert_blocks_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_alert_blocks_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
\.


--
-- Data for Name: components_page_blocks_contact_section_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_contact_section_blocks (id, title, subtitle, description, anchor, class_name, variant) FROM stdin;
2	We’re ready to help	\N	Fill in all the fields below and our manager will contact you.	\N	\N	centered
\.


--
-- Data for Name: components_page_blocks_contact_section_blocks_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_contact_section_blocks_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
\.


--
-- Data for Name: components_page_blocks_contact_section_blocks_form_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_contact_section_blocks_form_links (id, contact_section_block_id, form_id) FROM stdin;
2	2	1
\.


--
-- Data for Name: components_page_blocks_cta_section_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_cta_section_blocks (id, variant, anchor, class_name, title, description, subtitle) FROM stdin;
2	dark-with-image	\N	\N	Minimum Viable Product is Ready	Reduce the time and effort required to build and launch an initial product, helping you validate your ideas and gather customer feedback more quickly. This will allow you to iterate and improve upon your product, increasing your chances of success in the competitive startup landscape.	\N
\.


--
-- Data for Name: components_page_blocks_cta_section_blocks_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_cta_section_blocks_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
2	2	22	elements.button	buttons	1
\.


--
-- Data for Name: components_page_blocks_faqs_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_faqs_blocks (id, title, description, variant, class_name, anchor, subtitle) FROM stdin;
1	This Is Slide Over	With Page Blocks	two-columns-with-centered-introduction	\N	\N	\N
\.


--
-- Data for Name: components_page_blocks_faqs_blocks_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_faqs_blocks_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
\.


--
-- Data for Name: components_page_blocks_features_section_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_features_section_blocks (id, title, description, subtitle, variant, anchor, class_name) FROM stdin;
2	Don't repeat yourself	SignlePageStartup is designed to help you efficiently create a MVP that you can launch quickly to gather customer feedback and validate your ideas. Here's what you can expect from the MVP-ready feature.	\N	with-icon	\N	\N
\.


--
-- Data for Name: components_page_blocks_features_section_blocks_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_features_section_blocks_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
13	2	21	elements.feature	features	1
14	2	23	elements.feature	features	2
15	2	25	elements.feature	features	3
16	2	22	elements.feature	features	4
17	2	24	elements.feature	features	5
18	2	26	elements.feature	features	6
19	2	27	elements.feature	features	7
20	2	28	elements.feature	features	8
21	2	29	elements.feature	features	9
22	2	30	elements.feature	features	10
23	2	31	elements.feature	features	11
24	2	32	elements.feature	features	12
\.


--
-- Data for Name: components_page_blocks_footer_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_footer_blocks (id, copyrights, description, variant, class_name) FROM stdin;
1	2023 Single Page Startup	The fastest way to develop your startup	four-columns-with-company-mission	\N
\.


--
-- Data for Name: components_page_blocks_footer_blocks_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_footer_blocks_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
1	1	1	elements.logotype	logotype	\N
2	1	1	elements.buttons-array	buttons_arrays	1
3	1	2	elements.buttons-array	buttons_arrays	2
4	1	3	elements.buttons-array	additional_buttons_arrays	1
5	1	4	elements.buttons-array	extra_buttons_arrays	1
\.


--
-- Data for Name: components_page_blocks_header_section_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_header_section_blocks (id, title, description, variant, subtitle, anchor, class_name) FROM stdin;
\.


--
-- Data for Name: components_page_blocks_hero_section_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_hero_section_blocks (id, title, description, variant, anchor, class_name) FROM stdin;
1	Flyout	With Page Blocks	simple-centered	\N	\N
4	This Is Modal	With Page Blocks	simple-centered	\N	\N
6	Terms and Conditions	\N	simple-centered	\N	\N
7	Sidebar	With Page Blocks	simple-centered	\N	pt-16
8	Currency page	\N	simple-centered	\N	\N
9	Oh, no! Something went wrong...	\N	simple-centered	\N	\N
5	Jumpstart Your Lean Startup with Developer-Friendly Boilerplate	Spend less time on setup and more time building your innovative product with our ready-to-use, feature-packed boilerplate designed for lean startup developers.	simple-centered	\N	pt-16
\.


--
-- Data for Name: components_page_blocks_hero_section_blocks_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_hero_section_blocks_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
2	5	21	elements.button	buttons	1
\.


--
-- Data for Name: components_page_blocks_incentives_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_incentives_blocks (id, title, description, anchor, class_name, variant, subtitle) FROM stdin;
\.


--
-- Data for Name: components_page_blocks_incentives_blocks_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_incentives_blocks_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
\.


--
-- Data for Name: components_page_blocks_logotypes_cloud_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_logotypes_cloud_blocks (id, variant, title, description, anchor, class_name, subtitle) FROM stdin;
\.


--
-- Data for Name: components_page_blocks_logotypes_cloud_blocks_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_logotypes_cloud_blocks_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
\.


--
-- Data for Name: components_page_blocks_navbar_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_navbar_blocks (id, variant, description, class_name) FROM stdin;
1	simple-links-on-left	\N	\N
\.


--
-- Data for Name: components_page_blocks_navbar_blocks_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_navbar_blocks_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
1	1	2	elements.logotype	logotype	\N
2	1	14	elements.button	buttons	1
3	1	16	elements.button	buttons	2
4	1	15	elements.button	buttons	3
5	1	17	elements.button	buttons	4
6	1	18	elements.button	buttons	5
7	1	19	elements.button	additional_buttons	1
8	1	20	elements.button	additional_buttons	2
\.


--
-- Data for Name: components_page_blocks_not_found_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_not_found_blocks (id, variant, title, description, class_name, anchor, subtitle) FROM stdin;
2	simple	404	\N	\N	\N	Not found
\.


--
-- Data for Name: components_page_blocks_not_found_blocks_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_not_found_blocks_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
2	2	23	elements.button	buttons	1
\.


--
-- Data for Name: components_page_blocks_pricing_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_pricing_blocks (id, variant, title, subtitle, description, class_name, anchor) FROM stdin;
\.


--
-- Data for Name: components_page_blocks_pricing_blocks_tiers_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_pricing_blocks_tiers_links (id, pricing_block_id, tier_id, tier_order) FROM stdin;
\.


--
-- Data for Name: components_page_blocks_reviews_list_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_reviews_list_blocks (id, variant, show_all, anchor, class_name, title, subtitle, description) FROM stdin;
2	simple-with-avatars	t	\N	\N	Happy customers reviews	\N	\N
\.


--
-- Data for Name: components_page_blocks_reviews_list_blocks_reviews_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_reviews_list_blocks_reviews_links (id, reviews_list_block_id, review_id, review_order) FROM stdin;
\.


--
-- Data for Name: components_page_blocks_reviews_table_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_reviews_table_blocks (id, variant, anchor, class_name) FROM stdin;
\.


--
-- Data for Name: components_page_blocks_slider_blocks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_slider_blocks (id, variant, anchor, class_name, title, description, subtitle) FROM stdin;
2	simple	\N	pt-16	\N	\N	\N
\.


--
-- Data for Name: components_page_blocks_slider_blocks_slider_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.components_page_blocks_slider_blocks_slider_links (id, slider_block_id, slider_id) FROM stdin;
2	2	1
\.


--
-- Data for Name: configurations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.configurations (id, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: configurations_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.configurations_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
\.


--
-- Data for Name: currencies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.currencies (id, title, unicode, is_default, created_at, updated_at, published_at, created_by_id, updated_by_id, locale) FROM stdin;
1	USD	$	t	2023-09-06 02:41:14.586	2023-10-04 23:06:31.589	2023-03-29 23:09:52.898	\N	\N	en
2	USD	$$	\N	2023-10-04 23:06:31.538	2023-10-04 23:06:32.305	2023-10-04 23:06:32.295	1	1	es
\.


--
-- Data for Name: currencies_localizations_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.currencies_localizations_links (id, currency_id, inv_currency_id, currency_order) FROM stdin;
1	2	1	1
2	1	2	1
\.


--
-- Data for Name: email_templates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.email_templates (id, template_reference_id, design, name, subject, body_html, body_text, enabled, tags, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: files; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.files (id, name, alternative_text, caption, width, height, formats, hash, ext, mime, size, url, preview_url, provider, provider_metadata, folder_path, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
76	n1ghtcoder_Reproduction_Dream_caused_by_the_flight_of_a_bee_aro.png	\N	\N	1024	1024	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_n1ghtcoder_Reproduction_Dream_caused_by_the_flight_of_a_bee_aro_96325b3681.png", "hash": "large_n1ghtcoder_Reproduction_Dream_caused_by_the_flight_of_a_bee_aro_96325b3681", "mime": "image/png", "name": "large_n1ghtcoder_Reproduction_Dream_caused_by_the_flight_of_a_bee_aro.png", "path": null, "size": 2294.26, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_n1ghtcoder_Reproduction_Dream_caused_by_the_flight_of_a_bee_aro_96325b3681.png", "hash": "small_n1ghtcoder_Reproduction_Dream_caused_by_the_flight_of_a_bee_aro_96325b3681", "mime": "image/png", "name": "small_n1ghtcoder_Reproduction_Dream_caused_by_the_flight_of_a_bee_aro.png", "path": null, "size": 608.46, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_n1ghtcoder_Reproduction_Dream_caused_by_the_flight_of_a_bee_aro_96325b3681.png", "hash": "medium_n1ghtcoder_Reproduction_Dream_caused_by_the_flight_of_a_bee_aro_96325b3681", "mime": "image/png", "name": "medium_n1ghtcoder_Reproduction_Dream_caused_by_the_flight_of_a_bee_aro.png", "path": null, "size": 1347.16, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_n1ghtcoder_Reproduction_Dream_caused_by_the_flight_of_a_bee_aro_96325b3681.png", "hash": "thumbnail_n1ghtcoder_Reproduction_Dream_caused_by_the_flight_of_a_bee_aro_96325b3681", "mime": "image/png", "name": "thumbnail_n1ghtcoder_Reproduction_Dream_caused_by_the_flight_of_a_bee_aro.png", "path": null, "size": 65.91, "width": 156, "height": 156}}	n1ghtcoder_Reproduction_Dream_caused_by_the_flight_of_a_bee_aro_96325b3681	.png	image/png	587.68	https://721511.selcdn.ru/sps-lite-rogwild/n1ghtcoder_Reproduction_Dream_caused_by_the_flight_of_a_bee_aro_96325b3681.png	\N	aws-s3	\N	/1	2023-09-17 01:27:08.974	2023-09-17 01:27:08.974	\N	\N
34	sps-full dark.svg	\N	\N	4725	729	\N	sps_full_dark_b3d428b45a	.svg	image/svg+xml	16.90	https://721511.selcdn.ru/sps-lite-rogwild/sps_full_dark_b3d428b45a.svg	\N	aws-s3	\N	/	2023-09-06 02:45:18.23	2023-09-06 02:45:18.23	\N	\N
35	github.svg	\N	\N	100	100	\N	github_9d90ff7fb0	.svg	image/svg+xml	1.37	https://721511.selcdn.ru/sps-lite-rogwild/github_9d90ff7fb0.svg	\N	aws-s3	\N	/	2023-09-06 02:45:20.107	2023-09-06 02:45:20.107	\N	\N
36	users group.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_users_group_b9cbd6624f.png", "hash": "large_users_group_b9cbd6624f", "mime": "image/png", "name": "large_users group.png", "path": null, "size": 991.04, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_users_group_b9cbd6624f.png", "hash": "small_users_group_b9cbd6624f", "mime": "image/png", "name": "small_users group.png", "path": null, "size": 280.56, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_users_group_b9cbd6624f.png", "hash": "medium_users_group_b9cbd6624f", "mime": "image/png", "name": "medium_users group.png", "path": null, "size": 596.56, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_users_group_b9cbd6624f.png", "hash": "thumbnail_users_group_b9cbd6624f", "mime": "image/png", "name": "thumbnail_users group.png", "path": null, "size": 34.11, "width": 156, "height": 156}}	users_group_b9cbd6624f	.png	image/png	386.31	https://721511.selcdn.ru/sps-lite-rogwild/users_group_b9cbd6624f.png	\N	aws-s3	\N	/	2023-09-06 02:45:27.346	2023-09-06 02:45:27.346	\N	\N
37	cloud storage.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_cloud_storage_5e95dc9447.png", "hash": "large_cloud_storage_5e95dc9447", "mime": "image/png", "name": "large_cloud storage.png", "path": null, "size": 953.19, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_cloud_storage_5e95dc9447.png", "hash": "small_cloud_storage_5e95dc9447", "mime": "image/png", "name": "small_cloud storage.png", "path": null, "size": 232.63, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_cloud_storage_5e95dc9447.png", "hash": "medium_cloud_storage_5e95dc9447", "mime": "image/png", "name": "medium_cloud storage.png", "path": null, "size": 532.91, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_cloud_storage_5e95dc9447.png", "hash": "thumbnail_cloud_storage_5e95dc9447", "mime": "image/png", "name": "thumbnail_cloud storage.png", "path": null, "size": 26.52, "width": 156, "height": 156}}	cloud_storage_5e95dc9447	.png	image/png	650.73	https://721511.selcdn.ru/sps-lite-rogwild/cloud_storage_5e95dc9447.png	\N	aws-s3	\N	/	2023-09-06 02:45:34.818	2023-09-06 02:45:34.818	\N	\N
38	eight ways.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_eight_ways_2a7e4c46c7.png", "hash": "large_eight_ways_2a7e4c46c7", "mime": "image/png", "name": "large_eight ways.png", "path": null, "size": 827.14, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_eight_ways_2a7e4c46c7.png", "hash": "small_eight_ways_2a7e4c46c7", "mime": "image/png", "name": "small_eight ways.png", "path": null, "size": 214.02, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_eight_ways_2a7e4c46c7.png", "hash": "medium_eight_ways_2a7e4c46c7", "mime": "image/png", "name": "medium_eight ways.png", "path": null, "size": 473.32, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_eight_ways_2a7e4c46c7.png", "hash": "thumbnail_eight_ways_2a7e4c46c7", "mime": "image/png", "name": "thumbnail_eight ways.png", "path": null, "size": 26.78, "width": 156, "height": 156}}	eight_ways_2a7e4c46c7	.png	image/png	532.76	https://721511.selcdn.ru/sps-lite-rogwild/eight_ways_2a7e4c46c7.png	\N	aws-s3	\N	/	2023-09-06 02:45:42.435	2023-09-06 02:45:42.435	\N	\N
39	chevron-down.svg	\N	\N	24	24	\N	chevron_down_e20836b704	.svg	image/svg+xml	0.23	https://721511.selcdn.ru/sps-lite-rogwild/chevron_down_e20836b704.svg	\N	aws-s3	\N	/	2023-09-06 02:45:44.205	2023-09-06 02:45:44.205	\N	\N
40	chevron-up.svg	\N	\N	24	24	\N	chevron_up_d927a59d37	.svg	image/svg+xml	0.23	https://721511.selcdn.ru/sps-lite-rogwild/chevron_up_d927a59d37.svg	\N	aws-s3	\N	/	2023-09-06 02:45:45.871	2023-09-06 02:45:45.871	\N	\N
41	three block.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_three_block_e22e781f2c.png", "hash": "large_three_block_e22e781f2c", "mime": "image/png", "name": "large_three block.png", "path": null, "size": 1062.72, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_three_block_e22e781f2c.png", "hash": "small_three_block_e22e781f2c", "mime": "image/png", "name": "small_three block.png", "path": null, "size": 290.24, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_three_block_e22e781f2c.png", "hash": "medium_three_block_e22e781f2c", "mime": "image/png", "name": "medium_three block.png", "path": null, "size": 629.91, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_three_block_e22e781f2c.png", "hash": "thumbnail_three_block_e22e781f2c", "mime": "image/png", "name": "thumbnail_three block.png", "path": null, "size": 33.46, "width": 156, "height": 156}}	three_block_e22e781f2c	.png	image/png	414.59	https://721511.selcdn.ru/sps-lite-rogwild/three_block_e22e781f2c.png	\N	aws-s3	\N	/	2023-09-06 02:45:56.686	2023-09-06 02:45:56.686	\N	\N
42	eight ways.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_eight_ways_9682b453b4.png", "hash": "large_eight_ways_9682b453b4", "mime": "image/png", "name": "large_eight ways.png", "path": null, "size": 827.14, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_eight_ways_9682b453b4.png", "hash": "small_eight_ways_9682b453b4", "mime": "image/png", "name": "small_eight ways.png", "path": null, "size": 214.02, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_eight_ways_9682b453b4.png", "hash": "medium_eight_ways_9682b453b4", "mime": "image/png", "name": "medium_eight ways.png", "path": null, "size": 473.32, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_eight_ways_9682b453b4.png", "hash": "thumbnail_eight_ways_9682b453b4", "mime": "image/png", "name": "thumbnail_eight ways.png", "path": null, "size": 26.78, "width": 156, "height": 156}}	eight_ways_9682b453b4	.png	image/png	532.76	https://721511.selcdn.ru/sps-lite-rogwild/eight_ways_9682b453b4.png	\N	aws-s3	\N	/	2023-09-06 02:46:03.056	2023-09-06 02:46:03.056	\N	\N
43	catalog.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_catalog_e4b8eba775.png", "hash": "large_catalog_e4b8eba775", "mime": "image/png", "name": "large_catalog.png", "path": null, "size": 1478.85, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_catalog_e4b8eba775.png", "hash": "small_catalog_e4b8eba775", "mime": "image/png", "name": "small_catalog.png", "path": null, "size": 353.62, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_catalog_e4b8eba775.png", "hash": "medium_catalog_e4b8eba775", "mime": "image/png", "name": "medium_catalog.png", "path": null, "size": 821.38, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_catalog_e4b8eba775.png", "hash": "thumbnail_catalog_e4b8eba775", "mime": "image/png", "name": "thumbnail_catalog.png", "path": null, "size": 36.45, "width": 156, "height": 156}}	catalog_e4b8eba775	.png	image/png	1004.88	https://721511.selcdn.ru/sps-lite-rogwild/catalog_e4b8eba775.png	\N	aws-s3	\N	/	2023-09-06 02:46:11.943	2023-09-06 02:46:11.943	\N	\N
44	calendar.svg	\N	\N	24	24	\N	calendar_9d16cab0ad	.svg	image/svg+xml	1.14	https://721511.selcdn.ru/sps-lite-rogwild/calendar_9d16cab0ad.svg	\N	aws-s3	\N	/	2023-09-06 02:46:13.698	2023-09-06 02:46:13.698	\N	\N
45	cloud.svg	\N	\N	24	24	\N	cloud_9749eb6339	.svg	image/svg+xml	1.03	https://721511.selcdn.ru/sps-lite-rogwild/cloud_9749eb6339.svg	\N	aws-s3	\N	/	2023-09-06 02:46:15.437	2023-09-06 02:46:15.437	\N	\N
46	trash.svg	\N	\N	24	24	\N	trash_6ca4c7d958	.svg	image/svg+xml	0.92	https://721511.selcdn.ru/sps-lite-rogwild/trash_6ca4c7d958.svg	\N	aws-s3	\N	/	2023-09-06 02:46:17.181	2023-09-06 02:46:17.181	\N	\N
47	favicon.svg	\N	\N	485	485	\N	favicon_187a4d2115	.svg	image/svg+xml	2.61	https://721511.selcdn.ru/sps-lite-rogwild/favicon_187a4d2115.svg	\N	aws-s3	\N	/	2023-09-06 02:46:19.446	2023-09-06 02:46:19.446	\N	\N
48	sps-full dark.svg	\N	\N	4725	729	\N	sps_full_dark_f43187ab4b	.svg	image/svg+xml	16.90	https://721511.selcdn.ru/sps-lite-rogwild/sps_full_dark_f43187ab4b.svg	\N	aws-s3	\N	/	2023-09-06 02:46:21.955	2023-09-06 02:46:21.955	\N	\N
49	preview.jpg	\N	\N	1790	863	{"large": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_preview_7ed4071519.jpg", "hash": "large_preview_7ed4071519", "mime": "image/jpeg", "name": "large_preview.jpg", "path": null, "size": 38.28, "width": 1000, "height": 482}, "small": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_preview_7ed4071519.jpg", "hash": "small_preview_7ed4071519", "mime": "image/jpeg", "name": "small_preview.jpg", "path": null, "size": 12.73, "width": 500, "height": 241}, "medium": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_preview_7ed4071519.jpg", "hash": "medium_preview_7ed4071519", "mime": "image/jpeg", "name": "medium_preview.jpg", "path": null, "size": 24.99, "width": 750, "height": 362}, "thumbnail": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_preview_7ed4071519.jpg", "hash": "thumbnail_preview_7ed4071519", "mime": "image/jpeg", "name": "thumbnail_preview.jpg", "path": null, "size": 4.4, "width": 245, "height": 118}}	preview_7ed4071519	.jpg	image/jpeg	86.93	https://721511.selcdn.ru/sps-lite-rogwild/preview_7ed4071519.jpg	\N	aws-s3	\N	/	2023-09-06 02:46:25.166	2023-09-06 02:46:25.166	\N	\N
50	28.png	\N	\N	5708	3981	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_28_cde3071f3b.png", "hash": "large_28_cde3071f3b", "mime": "image/png", "name": "large_28.png", "path": null, "size": 668.2, "width": 1000, "height": 697}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_28_cde3071f3b.png", "hash": "small_28_cde3071f3b", "mime": "image/png", "name": "small_28.png", "path": null, "size": 184.23, "width": 500, "height": 349}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_28_cde3071f3b.png", "hash": "medium_28_cde3071f3b", "mime": "image/png", "name": "medium_28.png", "path": null, "size": 388.34, "width": 750, "height": 523}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_28_cde3071f3b.png", "hash": "thumbnail_28_cde3071f3b", "mime": "image/png", "name": "thumbnail_28.png", "path": null, "size": 46.87, "width": 224, "height": 156}}	28_cde3071f3b	.png	image/png	3057.77	https://721511.selcdn.ru/sps-lite-rogwild/28_cde3071f3b.png	\N	aws-s3	\N	/	2023-09-06 02:46:38.783	2023-09-06 02:46:38.783	\N	\N
51	augmented reality_ar.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_augmented_reality_ar_ccba41e781.png", "hash": "large_augmented_reality_ar_ccba41e781", "mime": "image/png", "name": "large_augmented reality_ar.png", "path": null, "size": 984.37, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_augmented_reality_ar_ccba41e781.png", "hash": "small_augmented_reality_ar_ccba41e781", "mime": "image/png", "name": "small_augmented reality_ar.png", "path": null, "size": 268.47, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_augmented_reality_ar_ccba41e781.png", "hash": "medium_augmented_reality_ar_ccba41e781", "mime": "image/png", "name": "medium_augmented reality_ar.png", "path": null, "size": 580.28, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_augmented_reality_ar_ccba41e781.png", "hash": "thumbnail_augmented_reality_ar_ccba41e781", "mime": "image/png", "name": "thumbnail_augmented reality_ar.png", "path": null, "size": 30.71, "width": 156, "height": 156}}	augmented_reality_ar_ccba41e781	.png	image/png	287.08	https://721511.selcdn.ru/sps-lite-rogwild/augmented_reality_ar_ccba41e781.png	\N	aws-s3	\N	/	2023-09-06 02:46:45.251	2023-09-06 02:46:45.251	\N	\N
52	earth.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_earth_81929d0dc5.png", "hash": "large_earth_81929d0dc5", "mime": "image/png", "name": "large_earth.png", "path": null, "size": 961.73, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_earth_81929d0dc5.png", "hash": "small_earth_81929d0dc5", "mime": "image/png", "name": "small_earth.png", "path": null, "size": 247.59, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_earth_81929d0dc5.png", "hash": "medium_earth_81929d0dc5", "mime": "image/png", "name": "medium_earth.png", "path": null, "size": 546.16, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_earth_81929d0dc5.png", "hash": "thumbnail_earth_81929d0dc5", "mime": "image/png", "name": "thumbnail_earth.png", "path": null, "size": 31.72, "width": 156, "height": 156}}	earth_81929d0dc5	.png	image/png	623.89	https://721511.selcdn.ru/sps-lite-rogwild/earth_81929d0dc5.png	\N	aws-s3	\N	/	2023-09-06 02:46:52.935	2023-09-06 02:46:52.935	\N	\N
53	security lock.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_security_lock_31eb3bbc35.png", "hash": "large_security_lock_31eb3bbc35", "mime": "image/png", "name": "large_security lock.png", "path": null, "size": 920.25, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_security_lock_31eb3bbc35.png", "hash": "small_security_lock_31eb3bbc35", "mime": "image/png", "name": "small_security lock.png", "path": null, "size": 249.49, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_security_lock_31eb3bbc35.png", "hash": "medium_security_lock_31eb3bbc35", "mime": "image/png", "name": "medium_security lock.png", "path": null, "size": 543.73, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_security_lock_31eb3bbc35.png", "hash": "thumbnail_security_lock_31eb3bbc35", "mime": "image/png", "name": "thumbnail_security lock.png", "path": null, "size": 28.56, "width": 156, "height": 156}}	security_lock_31eb3bbc35	.png	image/png	332.18	https://721511.selcdn.ru/sps-lite-rogwild/security_lock_31eb3bbc35.png	\N	aws-s3	\N	/	2023-09-06 02:47:00.923	2023-09-06 02:47:00.923	\N	\N
54	users group.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_users_group_dcb4e4e226.png", "hash": "large_users_group_dcb4e4e226", "mime": "image/png", "name": "large_users group.png", "path": null, "size": 991.04, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_users_group_dcb4e4e226.png", "hash": "small_users_group_dcb4e4e226", "mime": "image/png", "name": "small_users group.png", "path": null, "size": 280.56, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_users_group_dcb4e4e226.png", "hash": "medium_users_group_dcb4e4e226", "mime": "image/png", "name": "medium_users group.png", "path": null, "size": 596.56, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_users_group_dcb4e4e226.png", "hash": "thumbnail_users_group_dcb4e4e226", "mime": "image/png", "name": "thumbnail_users group.png", "path": null, "size": 34.11, "width": 156, "height": 156}}	users_group_dcb4e4e226	.png	image/png	386.31	https://721511.selcdn.ru/sps-lite-rogwild/users_group_dcb4e4e226.png	\N	aws-s3	\N	/	2023-09-06 02:47:07.412	2023-09-06 02:47:07.412	\N	\N
55	api socket.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_api_socket_8f05825010.png", "hash": "large_api_socket_8f05825010", "mime": "image/png", "name": "large_api socket.png", "path": null, "size": 698.45, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_api_socket_8f05825010.png", "hash": "small_api_socket_8f05825010", "mime": "image/png", "name": "small_api socket.png", "path": null, "size": 182.12, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_api_socket_8f05825010.png", "hash": "medium_api_socket_8f05825010", "mime": "image/png", "name": "medium_api socket.png", "path": null, "size": 401.6, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_api_socket_8f05825010.png", "hash": "thumbnail_api_socket_8f05825010", "mime": "image/png", "name": "thumbnail_api socket.png", "path": null, "size": 22.04, "width": 156, "height": 156}}	api_socket_8f05825010	.png	image/png	448.56	https://721511.selcdn.ru/sps-lite-rogwild/api_socket_8f05825010.png	\N	aws-s3	\N	/	2023-09-06 02:47:14.356	2023-09-06 02:47:14.356	\N	\N
56	file pdf.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_file_pdf_7c1df26c7d.png", "hash": "large_file_pdf_7c1df26c7d", "mime": "image/png", "name": "large_file pdf.png", "path": null, "size": 715.34, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_file_pdf_7c1df26c7d.png", "hash": "small_file_pdf_7c1df26c7d", "mime": "image/png", "name": "small_file pdf.png", "path": null, "size": 197.93, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_file_pdf_7c1df26c7d.png", "hash": "medium_file_pdf_7c1df26c7d", "mime": "image/png", "name": "medium_file pdf.png", "path": null, "size": 433.38, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_file_pdf_7c1df26c7d.png", "hash": "thumbnail_file_pdf_7c1df26c7d", "mime": "image/png", "name": "thumbnail_file pdf.png", "path": null, "size": 22.3, "width": 156, "height": 156}}	file_pdf_7c1df26c7d	.png	image/png	224.30	https://721511.selcdn.ru/sps-lite-rogwild/file_pdf_7c1df26c7d.png	\N	aws-s3	\N	/	2023-09-06 02:47:20.513	2023-09-06 02:47:20.513	\N	\N
57	empty cart.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_empty_cart_5d07c3698f.png", "hash": "large_empty_cart_5d07c3698f", "mime": "image/png", "name": "large_empty cart.png", "path": null, "size": 797.45, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_empty_cart_5d07c3698f.png", "hash": "small_empty_cart_5d07c3698f", "mime": "image/png", "name": "small_empty cart.png", "path": null, "size": 203.59, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_empty_cart_5d07c3698f.png", "hash": "medium_empty_cart_5d07c3698f", "mime": "image/png", "name": "medium_empty cart.png", "path": null, "size": 452.07, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_empty_cart_5d07c3698f.png", "hash": "thumbnail_empty_cart_5d07c3698f", "mime": "image/png", "name": "thumbnail_empty cart.png", "path": null, "size": 25.66, "width": 156, "height": 156}}	empty_cart_5d07c3698f	.png	image/png	503.04	https://721511.selcdn.ru/sps-lite-rogwild/empty_cart_5d07c3698f.png	\N	aws-s3	\N	/	2023-09-06 02:47:27.091	2023-09-06 02:47:27.091	\N	\N
58	sign doc.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_sign_doc_65268fba60.png", "hash": "large_sign_doc_65268fba60", "mime": "image/png", "name": "large_sign doc.png", "path": null, "size": 843.55, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_sign_doc_65268fba60.png", "hash": "small_sign_doc_65268fba60", "mime": "image/png", "name": "small_sign doc.png", "path": null, "size": 207.48, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_sign_doc_65268fba60.png", "hash": "medium_sign_doc_65268fba60", "mime": "image/png", "name": "medium_sign doc.png", "path": null, "size": 473.06, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_sign_doc_65268fba60.png", "hash": "thumbnail_sign_doc_65268fba60", "mime": "image/png", "name": "thumbnail_sign doc.png", "path": null, "size": 24.02, "width": 156, "height": 156}}	sign_doc_65268fba60	.png	image/png	593.59	https://721511.selcdn.ru/sps-lite-rogwild/sign_doc_65268fba60.png	\N	aws-s3	\N	/	2023-09-06 02:47:34.131	2023-09-06 02:47:34.131	\N	\N
59	catalog.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_catalog_ba6e72ac21.png", "hash": "large_catalog_ba6e72ac21", "mime": "image/png", "name": "large_catalog.png", "path": null, "size": 1478.85, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_catalog_ba6e72ac21.png", "hash": "small_catalog_ba6e72ac21", "mime": "image/png", "name": "small_catalog.png", "path": null, "size": 353.62, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_catalog_ba6e72ac21.png", "hash": "medium_catalog_ba6e72ac21", "mime": "image/png", "name": "medium_catalog.png", "path": null, "size": 821.38, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_catalog_ba6e72ac21.png", "hash": "thumbnail_catalog_ba6e72ac21", "mime": "image/png", "name": "thumbnail_catalog.png", "path": null, "size": 36.45, "width": 156, "height": 156}}	catalog_ba6e72ac21	.png	image/png	1004.88	https://721511.selcdn.ru/sps-lite-rogwild/catalog_ba6e72ac21.png	\N	aws-s3	\N	/	2023-09-06 02:47:47.232	2023-09-06 02:47:47.232	\N	\N
60	eight ways.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_eight_ways_c67153cfb4.png", "hash": "large_eight_ways_c67153cfb4", "mime": "image/png", "name": "large_eight ways.png", "path": null, "size": 827.14, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_eight_ways_c67153cfb4.png", "hash": "small_eight_ways_c67153cfb4", "mime": "image/png", "name": "small_eight ways.png", "path": null, "size": 214.02, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_eight_ways_c67153cfb4.png", "hash": "medium_eight_ways_c67153cfb4", "mime": "image/png", "name": "medium_eight ways.png", "path": null, "size": 473.32, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_eight_ways_c67153cfb4.png", "hash": "thumbnail_eight_ways_c67153cfb4", "mime": "image/png", "name": "thumbnail_eight ways.png", "path": null, "size": 26.78, "width": 156, "height": 156}}	eight_ways_c67153cfb4	.png	image/png	532.76	https://721511.selcdn.ru/sps-lite-rogwild/eight_ways_c67153cfb4.png	\N	aws-s3	\N	/	2023-09-06 02:47:53.825	2023-09-06 02:47:53.825	\N	\N
61	cloud storage.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_cloud_storage_1cca21ad8a.png", "hash": "large_cloud_storage_1cca21ad8a", "mime": "image/png", "name": "large_cloud storage.png", "path": null, "size": 953.19, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_cloud_storage_1cca21ad8a.png", "hash": "small_cloud_storage_1cca21ad8a", "mime": "image/png", "name": "small_cloud storage.png", "path": null, "size": 232.63, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_cloud_storage_1cca21ad8a.png", "hash": "medium_cloud_storage_1cca21ad8a", "mime": "image/png", "name": "medium_cloud storage.png", "path": null, "size": 532.91, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_cloud_storage_1cca21ad8a.png", "hash": "thumbnail_cloud_storage_1cca21ad8a", "mime": "image/png", "name": "thumbnail_cloud storage.png", "path": null, "size": 26.52, "width": 156, "height": 156}}	cloud_storage_1cca21ad8a	.png	image/png	650.73	https://721511.selcdn.ru/sps-lite-rogwild/cloud_storage_1cca21ad8a.png	\N	aws-s3	\N	/	2023-09-06 02:48:05.522	2023-09-06 02:48:05.522	\N	\N
62	three block.png	\N	\N	1920	1920	{"large": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_three_block_56e1092ffb.png", "hash": "large_three_block_56e1092ffb", "mime": "image/png", "name": "large_three block.png", "path": null, "size": 1062.72, "width": 1000, "height": 1000}, "small": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_three_block_56e1092ffb.png", "hash": "small_three_block_56e1092ffb", "mime": "image/png", "name": "small_three block.png", "path": null, "size": 290.24, "width": 500, "height": 500}, "medium": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_three_block_56e1092ffb.png", "hash": "medium_three_block_56e1092ffb", "mime": "image/png", "name": "medium_three block.png", "path": null, "size": 629.91, "width": 750, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_three_block_56e1092ffb.png", "hash": "thumbnail_three_block_56e1092ffb", "mime": "image/png", "name": "thumbnail_three block.png", "path": null, "size": 33.46, "width": 156, "height": 156}}	three_block_56e1092ffb	.png	image/png	414.59	https://721511.selcdn.ru/sps-lite-rogwild/three_block_56e1092ffb.png	\N	aws-s3	\N	/	2023-09-06 02:48:13.661	2023-09-06 02:48:13.661	\N	\N
63	pexels-tima-miroshnichenko-5198239.jpg	\N	\N	6000	4000	{"large": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_pexels_tima_miroshnichenko_5198239_8baba7d140.jpg", "hash": "large_pexels_tima_miroshnichenko_5198239_8baba7d140", "mime": "image/jpeg", "name": "large_pexels-tima-miroshnichenko-5198239.jpg", "path": null, "size": 81.84, "width": 1000, "height": 667}, "small": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_pexels_tima_miroshnichenko_5198239_8baba7d140.jpg", "hash": "small_pexels_tima_miroshnichenko_5198239_8baba7d140", "mime": "image/jpeg", "name": "small_pexels-tima-miroshnichenko-5198239.jpg", "path": null, "size": 29.45, "width": 500, "height": 333}, "medium": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_pexels_tima_miroshnichenko_5198239_8baba7d140.jpg", "hash": "medium_pexels_tima_miroshnichenko_5198239_8baba7d140", "mime": "image/jpeg", "name": "medium_pexels-tima-miroshnichenko-5198239.jpg", "path": null, "size": 53.16, "width": 750, "height": 500}, "thumbnail": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_pexels_tima_miroshnichenko_5198239_8baba7d140.jpg", "hash": "thumbnail_pexels_tima_miroshnichenko_5198239_8baba7d140", "mime": "image/jpeg", "name": "thumbnail_pexels-tima-miroshnichenko-5198239.jpg", "path": null, "size": 9.57, "width": 234, "height": 156}}	pexels_tima_miroshnichenko_5198239_8baba7d140	.jpg	image/jpeg	4287.67	https://721511.selcdn.ru/sps-lite-rogwild/pexels_tima_miroshnichenko_5198239_8baba7d140.jpg	\N	aws-s3	\N	/	2023-09-06 02:48:27.942	2023-09-06 02:48:27.942	\N	\N
64	pexels-edmond-dantès-4347368.jpg	\N	\N	5462	8192	{"large": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_pexels_edmond_dantes_4347368_2da912bb1c.jpg", "hash": "large_pexels_edmond_dantes_4347368_2da912bb1c", "mime": "image/jpeg", "name": "large_pexels-edmond-dantès-4347368.jpg", "path": null, "size": 70, "width": 667, "height": 1000}, "small": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_pexels_edmond_dantes_4347368_2da912bb1c.jpg", "hash": "small_pexels_edmond_dantes_4347368_2da912bb1c", "mime": "image/jpeg", "name": "small_pexels-edmond-dantès-4347368.jpg", "path": null, "size": 22.79, "width": 333, "height": 500}, "medium": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_pexels_edmond_dantes_4347368_2da912bb1c.jpg", "hash": "medium_pexels_edmond_dantes_4347368_2da912bb1c", "mime": "image/jpeg", "name": "medium_pexels-edmond-dantès-4347368.jpg", "path": null, "size": 42.95, "width": 500, "height": 750}, "thumbnail": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_pexels_edmond_dantes_4347368_2da912bb1c.jpg", "hash": "thumbnail_pexels_edmond_dantes_4347368_2da912bb1c", "mime": "image/jpeg", "name": "thumbnail_pexels-edmond-dantès-4347368.jpg", "path": null, "size": 3.93, "width": 104, "height": 156}}	pexels_edmond_dantes_4347368_2da912bb1c	.jpg	image/jpeg	6751.80	https://721511.selcdn.ru/sps-lite-rogwild/pexels_edmond_dantes_4347368_2da912bb1c.jpg	\N	aws-s3	\N	/	2023-09-06 02:48:48.738	2023-09-06 02:48:48.738	\N	\N
65	pexels-karolina-grabowska-4467687 (1).jpg	\N	\N	4480	6720	{"large": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_pexels_karolina_grabowska_4467687_1_0ebc79553c.jpg", "hash": "large_pexels_karolina_grabowska_4467687_1_0ebc79553c", "mime": "image/jpeg", "name": "large_pexels-karolina-grabowska-4467687 (1).jpg", "path": null, "size": 38.57, "width": 667, "height": 1000}, "small": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_pexels_karolina_grabowska_4467687_1_0ebc79553c.jpg", "hash": "small_pexels_karolina_grabowska_4467687_1_0ebc79553c", "mime": "image/jpeg", "name": "small_pexels-karolina-grabowska-4467687 (1).jpg", "path": null, "size": 14.22, "width": 333, "height": 500}, "medium": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_pexels_karolina_grabowska_4467687_1_0ebc79553c.jpg", "hash": "medium_pexels_karolina_grabowska_4467687_1_0ebc79553c", "mime": "image/jpeg", "name": "medium_pexels-karolina-grabowska-4467687 (1).jpg", "path": null, "size": 25.51, "width": 500, "height": 750}, "thumbnail": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_pexels_karolina_grabowska_4467687_1_0ebc79553c.jpg", "hash": "thumbnail_pexels_karolina_grabowska_4467687_1_0ebc79553c", "mime": "image/jpeg", "name": "thumbnail_pexels-karolina-grabowska-4467687 (1).jpg", "path": null, "size": 2.95, "width": 104, "height": 156}}	pexels_karolina_grabowska_4467687_1_0ebc79553c	.jpg	image/jpeg	1177.43	https://721511.selcdn.ru/sps-lite-rogwild/pexels_karolina_grabowska_4467687_1_0ebc79553c.jpg	\N	aws-s3	\N	/	2023-09-06 02:48:56.228	2023-09-06 02:48:56.228	\N	\N
66	pexels-andrea-piacquadio-3756679.jpg	\N	\N	5299	3533	{"large": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_pexels_andrea_piacquadio_3756679_c76d2e9dbf.jpg", "hash": "large_pexels_andrea_piacquadio_3756679_c76d2e9dbf", "mime": "image/jpeg", "name": "large_pexels-andrea-piacquadio-3756679.jpg", "path": null, "size": 60.11, "width": 1000, "height": 667}, "small": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_pexels_andrea_piacquadio_3756679_c76d2e9dbf.jpg", "hash": "small_pexels_andrea_piacquadio_3756679_c76d2e9dbf", "mime": "image/jpeg", "name": "small_pexels-andrea-piacquadio-3756679.jpg", "path": null, "size": 21.98, "width": 500, "height": 333}, "medium": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_pexels_andrea_piacquadio_3756679_c76d2e9dbf.jpg", "hash": "medium_pexels_andrea_piacquadio_3756679_c76d2e9dbf", "mime": "image/jpeg", "name": "medium_pexels-andrea-piacquadio-3756679.jpg", "path": null, "size": 39.95, "width": 750, "height": 500}, "thumbnail": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_pexels_andrea_piacquadio_3756679_c76d2e9dbf.jpg", "hash": "thumbnail_pexels_andrea_piacquadio_3756679_c76d2e9dbf", "mime": "image/jpeg", "name": "thumbnail_pexels-andrea-piacquadio-3756679.jpg", "path": null, "size": 7.5, "width": 234, "height": 156}}	pexels_andrea_piacquadio_3756679_c76d2e9dbf	.jpg	image/jpeg	811.66	https://721511.selcdn.ru/sps-lite-rogwild/pexels_andrea_piacquadio_3756679_c76d2e9dbf.jpg	\N	aws-s3	\N	/	2023-09-06 02:49:07.686	2023-09-06 02:49:07.686	\N	\N
67	pexels-karolina-grabowska-5882683.jpg	\N	\N	1280	853	{"large": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_pexels_karolina_grabowska_5882683_f5290eb822.jpg", "hash": "large_pexels_karolina_grabowska_5882683_f5290eb822", "mime": "image/jpeg", "name": "large_pexels-karolina-grabowska-5882683.jpg", "path": null, "size": 72.41, "width": 1000, "height": 666}, "small": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_pexels_karolina_grabowska_5882683_f5290eb822.jpg", "hash": "small_pexels_karolina_grabowska_5882683_f5290eb822", "mime": "image/jpeg", "name": "small_pexels-karolina-grabowska-5882683.jpg", "path": null, "size": 25.51, "width": 500, "height": 333}, "medium": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_pexels_karolina_grabowska_5882683_f5290eb822.jpg", "hash": "medium_pexels_karolina_grabowska_5882683_f5290eb822", "mime": "image/jpeg", "name": "medium_pexels-karolina-grabowska-5882683.jpg", "path": null, "size": 46.24, "width": 750, "height": 500}, "thumbnail": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_pexels_karolina_grabowska_5882683_f5290eb822.jpg", "hash": "thumbnail_pexels_karolina_grabowska_5882683_f5290eb822", "mime": "image/jpeg", "name": "thumbnail_pexels-karolina-grabowska-5882683.jpg", "path": null, "size": 8.01, "width": 234, "height": 156}}	pexels_karolina_grabowska_5882683_f5290eb822	.jpg	image/jpeg	109.43	https://721511.selcdn.ru/sps-lite-rogwild/pexels_karolina_grabowska_5882683_f5290eb822.jpg	\N	aws-s3	\N	/	2023-09-06 02:49:11.363	2023-09-06 02:49:11.363	\N	\N
68	pexels-karolina-grabowska-5882683.jpg	\N	\N	1280	853	{"large": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_pexels_karolina_grabowska_5882683_5857ef53ee.jpg", "hash": "large_pexels_karolina_grabowska_5882683_5857ef53ee", "mime": "image/jpeg", "name": "large_pexels-karolina-grabowska-5882683.jpg", "path": null, "size": 72.41, "width": 1000, "height": 666}, "small": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_pexels_karolina_grabowska_5882683_5857ef53ee.jpg", "hash": "small_pexels_karolina_grabowska_5882683_5857ef53ee", "mime": "image/jpeg", "name": "small_pexels-karolina-grabowska-5882683.jpg", "path": null, "size": 25.51, "width": 500, "height": 333}, "medium": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_pexels_karolina_grabowska_5882683_5857ef53ee.jpg", "hash": "medium_pexels_karolina_grabowska_5882683_5857ef53ee", "mime": "image/jpeg", "name": "medium_pexels-karolina-grabowska-5882683.jpg", "path": null, "size": 46.24, "width": 750, "height": 500}, "thumbnail": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_pexels_karolina_grabowska_5882683_5857ef53ee.jpg", "hash": "thumbnail_pexels_karolina_grabowska_5882683_5857ef53ee", "mime": "image/jpeg", "name": "thumbnail_pexels-karolina-grabowska-5882683.jpg", "path": null, "size": 8.01, "width": 234, "height": 156}}	pexels_karolina_grabowska_5882683_5857ef53ee	.jpg	image/jpeg	109.43	https://721511.selcdn.ru/sps-lite-rogwild/pexels_karolina_grabowska_5882683_5857ef53ee.jpg	\N	aws-s3	\N	/	2023-09-06 02:49:14.983	2023-09-06 02:49:14.983	\N	\N
69	pexels-andrea-piacquadio-3756679.jpg	\N	\N	5299	3533	{"large": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_pexels_andrea_piacquadio_3756679_e75a1cd6e7.jpg", "hash": "large_pexels_andrea_piacquadio_3756679_e75a1cd6e7", "mime": "image/jpeg", "name": "large_pexels-andrea-piacquadio-3756679.jpg", "path": null, "size": 60.11, "width": 1000, "height": 667}, "small": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_pexels_andrea_piacquadio_3756679_e75a1cd6e7.jpg", "hash": "small_pexels_andrea_piacquadio_3756679_e75a1cd6e7", "mime": "image/jpeg", "name": "small_pexels-andrea-piacquadio-3756679.jpg", "path": null, "size": 21.98, "width": 500, "height": 333}, "medium": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_pexels_andrea_piacquadio_3756679_e75a1cd6e7.jpg", "hash": "medium_pexels_andrea_piacquadio_3756679_e75a1cd6e7", "mime": "image/jpeg", "name": "medium_pexels-andrea-piacquadio-3756679.jpg", "path": null, "size": 39.95, "width": 750, "height": 500}, "thumbnail": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_pexels_andrea_piacquadio_3756679_e75a1cd6e7.jpg", "hash": "thumbnail_pexels_andrea_piacquadio_3756679_e75a1cd6e7", "mime": "image/jpeg", "name": "thumbnail_pexels-andrea-piacquadio-3756679.jpg", "path": null, "size": 7.5, "width": 234, "height": 156}}	pexels_andrea_piacquadio_3756679_e75a1cd6e7	.jpg	image/jpeg	811.66	https://721511.selcdn.ru/sps-lite-rogwild/pexels_andrea_piacquadio_3756679_e75a1cd6e7.jpg	\N	aws-s3	\N	/	2023-09-06 02:49:21.263	2023-09-06 02:49:21.263	\N	\N
70	pexels-tima-miroshnichenko-5198239.jpg	\N	\N	6000	4000	{"large": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/large_pexels_tima_miroshnichenko_5198239_a2854c854c.jpg", "hash": "large_pexels_tima_miroshnichenko_5198239_a2854c854c", "mime": "image/jpeg", "name": "large_pexels-tima-miroshnichenko-5198239.jpg", "path": null, "size": 81.84, "width": 1000, "height": 667}, "small": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/small_pexels_tima_miroshnichenko_5198239_a2854c854c.jpg", "hash": "small_pexels_tima_miroshnichenko_5198239_a2854c854c", "mime": "image/jpeg", "name": "small_pexels-tima-miroshnichenko-5198239.jpg", "path": null, "size": 29.45, "width": 500, "height": 333}, "medium": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/medium_pexels_tima_miroshnichenko_5198239_a2854c854c.jpg", "hash": "medium_pexels_tima_miroshnichenko_5198239_a2854c854c", "mime": "image/jpeg", "name": "medium_pexels-tima-miroshnichenko-5198239.jpg", "path": null, "size": 53.16, "width": 750, "height": 500}, "thumbnail": {"ext": ".jpg", "url": "https://721511.selcdn.ru/sps-lite-rogwild/thumbnail_pexels_tima_miroshnichenko_5198239_a2854c854c.jpg", "hash": "thumbnail_pexels_tima_miroshnichenko_5198239_a2854c854c", "mime": "image/jpeg", "name": "thumbnail_pexels-tima-miroshnichenko-5198239.jpg", "path": null, "size": 9.57, "width": 234, "height": 156}}	pexels_tima_miroshnichenko_5198239_a2854c854c	.jpg	image/jpeg	4287.67	https://721511.selcdn.ru/sps-lite-rogwild/pexels_tima_miroshnichenko_5198239_a2854c854c.jpg	\N	aws-s3	\N	/	2023-09-06 02:49:51.673	2023-09-06 02:49:51.673	\N	\N
71	montserrat-medium.ttf	\N	\N	\N	\N	\N	montserrat_medium_933c64c18b	.ttf	font/ttf	198.10	https://721511.selcdn.ru/sps-lite-rogwild/montserrat_medium_933c64c18b.ttf	\N	aws-s3	\N	/	2023-09-06 02:49:56.886	2023-09-06 02:49:56.886	\N	\N
72	montserrat-light.ttf	\N	\N	\N	\N	\N	montserrat_light_afa1c52757	.ttf	font/ttf	198.07	https://721511.selcdn.ru/sps-lite-rogwild/montserrat_light_afa1c52757.ttf	\N	aws-s3	\N	/	2023-09-06 02:50:00.62	2023-09-06 02:50:00.62	\N	\N
73	montserrat-semibold.ttf	\N	\N	\N	\N	\N	montserrat_semibold_ebdac823da	.ttf	font/ttf	198.20	https://721511.selcdn.ru/sps-lite-rogwild/montserrat_semibold_ebdac823da.ttf	\N	aws-s3	\N	/	2023-09-06 02:50:04.368	2023-09-06 02:50:04.368	\N	\N
74	montserrat-regular.ttf	\N	\N	\N	\N	\N	montserrat_regular_6c40858d4f	.ttf	font/ttf	197.98	https://721511.selcdn.ru/sps-lite-rogwild/montserrat_regular_6c40858d4f.ttf	\N	aws-s3	\N	/	2023-09-06 02:50:08.665	2023-09-06 02:50:08.665	\N	\N
75	montserrat-bold.ttf	\N	\N	\N	\N	\N	montserrat_bold_42147cc0a5	.ttf	font/ttf	198.07	https://721511.selcdn.ru/sps-lite-rogwild/montserrat_bold_42147cc0a5.ttf	\N	aws-s3	\N	/	2023-09-06 02:50:12.501	2023-09-06 02:50:12.501	\N	\N
77	Снимок экрана 2023-05-19 в 01.14.30.png	\N	\N	836	902	{"small": {"ext": ".png", "url": "https://web3payroll-ansible.s3.eu-central-1.amazonaws.com/web3payroll-ansible/small_Snimok_ekrana_2023_05_19_v_01_14_30_f39e0e282e.png", "hash": "small_Snimok_ekrana_2023_05_19_v_01_14_30_f39e0e282e", "mime": "image/png", "name": "small_Снимок экрана 2023-05-19 в 01.14.30.png", "path": null, "size": 189.15, "width": 463, "height": 500}, "medium": {"ext": ".png", "url": "https://web3payroll-ansible.s3.eu-central-1.amazonaws.com/web3payroll-ansible/medium_Snimok_ekrana_2023_05_19_v_01_14_30_f39e0e282e.png", "hash": "medium_Snimok_ekrana_2023_05_19_v_01_14_30_f39e0e282e", "mime": "image/png", "name": "medium_Снимок экрана 2023-05-19 в 01.14.30.png", "path": null, "size": 407.08, "width": 695, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://web3payroll-ansible.s3.eu-central-1.amazonaws.com/web3payroll-ansible/thumbnail_Snimok_ekrana_2023_05_19_v_01_14_30_f39e0e282e.png", "hash": "thumbnail_Snimok_ekrana_2023_05_19_v_01_14_30_f39e0e282e", "mime": "image/png", "name": "thumbnail_Снимок экрана 2023-05-19 в 01.14.30.png", "path": null, "size": 24.97, "width": 145, "height": 156}}	Snimok_ekrana_2023_05_19_v_01_14_30_f39e0e282e	.png	image/png	116.41	https://web3payroll-ansible.s3.eu-central-1.amazonaws.com/web3payroll-ansible/Snimok_ekrana_2023_05_19_v_01_14_30_f39e0e282e.png	\N	aws-s3	\N	/	2023-09-29 23:30:05.773	2023-09-29 23:30:05.773	1	1
80	Снимок экрана 2023-05-19 в 01.14.30.png	\N	\N	836	902	{"small": {"ext": ".png", "url": "https://ansible-test-project.s3.eu-central-1.amazonaws.com/ansible-test-project/small_Snimok_ekrana_2023_05_19_v_01_14_30_dd14eaad2a.png", "hash": "small_Snimok_ekrana_2023_05_19_v_01_14_30_dd14eaad2a", "mime": "image/png", "name": "small_Снимок экрана 2023-05-19 в 01.14.30.png", "path": null, "size": 189.15, "width": 463, "height": 500}, "medium": {"ext": ".png", "url": "https://ansible-test-project.s3.eu-central-1.amazonaws.com/ansible-test-project/medium_Snimok_ekrana_2023_05_19_v_01_14_30_dd14eaad2a.png", "hash": "medium_Snimok_ekrana_2023_05_19_v_01_14_30_dd14eaad2a", "mime": "image/png", "name": "medium_Снимок экрана 2023-05-19 в 01.14.30.png", "path": null, "size": 407.08, "width": 695, "height": 750}, "thumbnail": {"ext": ".png", "url": "https://ansible-test-project.s3.eu-central-1.amazonaws.com/ansible-test-project/thumbnail_Snimok_ekrana_2023_05_19_v_01_14_30_dd14eaad2a.png", "hash": "thumbnail_Snimok_ekrana_2023_05_19_v_01_14_30_dd14eaad2a", "mime": "image/png", "name": "thumbnail_Снимок экрана 2023-05-19 в 01.14.30.png", "path": null, "size": 24.97, "width": 145, "height": 156}}	Snimok_ekrana_2023_05_19_v_01_14_30_dd14eaad2a	.png	image/png	116.41	https://ansible-test-project.s3.eu-central-1.amazonaws.com/ansible-test-project/Snimok_ekrana_2023_05_19_v_01_14_30_dd14eaad2a.png	\N	aws-s3	\N	/	2023-09-30 00:42:28.297	2023-09-30 00:42:28.297	1	1
81	favicon.svg	\N	\N	1000	1000	\N	favicon_09606dc319	.svg	image/svg+xml	0.36	https://spsliterogwild.s3.eu-central-1.amazonaws.com/spsliterogwild/favicon_09606dc319.svg	\N	aws-s3	\N	/	2023-10-05 19:14:58.718	2023-10-05 19:14:58.718	1	1
82	project1.jpg	\N	\N	1440	850	{"large": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/large_project1_cf7c6a7f77.jpg", "hash": "large_project1_cf7c6a7f77", "mime": "image/jpeg", "name": "large_project1.jpg", "path": null, "size": 56.37, "width": 1000, "height": 590}, "small": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/small_project1_cf7c6a7f77.jpg", "hash": "small_project1_cf7c6a7f77", "mime": "image/jpeg", "name": "small_project1.jpg", "path": null, "size": 17.58, "width": 500, "height": 295}, "medium": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/medium_project1_cf7c6a7f77.jpg", "hash": "medium_project1_cf7c6a7f77", "mime": "image/jpeg", "name": "medium_project1.jpg", "path": null, "size": 37.38, "width": 750, "height": 443}, "thumbnail": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/thumbnail_project1_cf7c6a7f77.jpg", "hash": "thumbnail_project1_cf7c6a7f77", "mime": "image/jpeg", "name": "thumbnail_project1.jpg", "path": null, "size": 5.05, "width": 245, "height": 144}}	project1_cf7c6a7f77	.jpg	image/jpeg	101.76	https://spsliterogwild.s3.amazonaws.com/spsliterogwild/project1_cf7c6a7f77.jpg	\N	aws-s3	\N	/1	2023-10-07 00:51:53.589	2023-10-07 00:51:53.589	\N	\N
83	project1.jpg	\N	\N	1440	850	{"large": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/large_project1_967cb7a91e.jpg", "hash": "large_project1_967cb7a91e", "mime": "image/jpeg", "name": "large_project1.jpg", "path": null, "size": 56.37, "width": 1000, "height": 590}, "small": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/small_project1_967cb7a91e.jpg", "hash": "small_project1_967cb7a91e", "mime": "image/jpeg", "name": "small_project1.jpg", "path": null, "size": 17.58, "width": 500, "height": 295}, "medium": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/medium_project1_967cb7a91e.jpg", "hash": "medium_project1_967cb7a91e", "mime": "image/jpeg", "name": "medium_project1.jpg", "path": null, "size": 37.38, "width": 750, "height": 443}, "thumbnail": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/thumbnail_project1_967cb7a91e.jpg", "hash": "thumbnail_project1_967cb7a91e", "mime": "image/jpeg", "name": "thumbnail_project1.jpg", "path": null, "size": 5.05, "width": 245, "height": 144}}	project1_967cb7a91e	.jpg	image/jpeg	101.76	https://spsliterogwild.s3.amazonaws.com/spsliterogwild/project1_967cb7a91e.jpg	\N	aws-s3	\N	/1	2023-10-07 00:54:05.306	2023-10-07 00:54:05.306	\N	\N
84	project1.jpg	\N	\N	1440	850	{"large": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/large_project1_d95b681525.jpg", "hash": "large_project1_d95b681525", "mime": "image/jpeg", "name": "large_project1.jpg", "path": null, "size": 56.37, "width": 1000, "height": 590}, "small": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/small_project1_d95b681525.jpg", "hash": "small_project1_d95b681525", "mime": "image/jpeg", "name": "small_project1.jpg", "path": null, "size": 17.58, "width": 500, "height": 295}, "medium": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/medium_project1_d95b681525.jpg", "hash": "medium_project1_d95b681525", "mime": "image/jpeg", "name": "medium_project1.jpg", "path": null, "size": 37.38, "width": 750, "height": 443}, "thumbnail": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/thumbnail_project1_d95b681525.jpg", "hash": "thumbnail_project1_d95b681525", "mime": "image/jpeg", "name": "thumbnail_project1.jpg", "path": null, "size": 5.05, "width": 245, "height": 144}}	project1_d95b681525	.jpg	image/jpeg	101.76	https://spsliterogwild.s3.amazonaws.com/spsliterogwild/project1_d95b681525.jpg	\N	aws-s3	\N	/1	2023-10-07 00:54:55.111	2023-10-07 00:54:55.111	\N	\N
85	project1.jpg	\N	\N	1440	850	{"large": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/large_project1_65a846bcdd.jpg", "hash": "large_project1_65a846bcdd", "mime": "image/jpeg", "name": "large_project1.jpg", "path": null, "size": 56.37, "width": 1000, "height": 590}, "small": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/small_project1_65a846bcdd.jpg", "hash": "small_project1_65a846bcdd", "mime": "image/jpeg", "name": "small_project1.jpg", "path": null, "size": 17.58, "width": 500, "height": 295}, "medium": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/medium_project1_65a846bcdd.jpg", "hash": "medium_project1_65a846bcdd", "mime": "image/jpeg", "name": "medium_project1.jpg", "path": null, "size": 37.38, "width": 750, "height": 443}, "thumbnail": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/thumbnail_project1_65a846bcdd.jpg", "hash": "thumbnail_project1_65a846bcdd", "mime": "image/jpeg", "name": "thumbnail_project1.jpg", "path": null, "size": 5.05, "width": 245, "height": 144}}	project1_65a846bcdd	.jpg	image/jpeg	101.76	https://spsliterogwild.s3.amazonaws.com/spsliterogwild/project1_65a846bcdd.jpg	\N	aws-s3	\N	/1	2023-10-07 00:56:20.334	2023-10-07 00:56:20.334	\N	\N
86	project1.jpg	\N	\N	1440	850	{"large": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/large_project1_8aa092038f.jpg", "hash": "large_project1_8aa092038f", "mime": "image/jpeg", "name": "large_project1.jpg", "path": null, "size": 56.37, "width": 1000, "height": 590}, "small": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/small_project1_8aa092038f.jpg", "hash": "small_project1_8aa092038f", "mime": "image/jpeg", "name": "small_project1.jpg", "path": null, "size": 17.58, "width": 500, "height": 295}, "medium": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/medium_project1_8aa092038f.jpg", "hash": "medium_project1_8aa092038f", "mime": "image/jpeg", "name": "medium_project1.jpg", "path": null, "size": 37.38, "width": 750, "height": 443}, "thumbnail": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/thumbnail_project1_8aa092038f.jpg", "hash": "thumbnail_project1_8aa092038f", "mime": "image/jpeg", "name": "thumbnail_project1.jpg", "path": null, "size": 5.05, "width": 245, "height": 144}}	project1_8aa092038f	.jpg	image/jpeg	101.76	https://spsliterogwild.s3.amazonaws.com/spsliterogwild/project1_8aa092038f.jpg	\N	aws-s3	\N	/1	2023-10-07 00:57:00.974	2023-10-07 00:57:00.974	\N	\N
87	project1.jpg	\N	\N	1440	850	{"large": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/large_project1_e350a2243b.jpg", "hash": "large_project1_e350a2243b", "mime": "image/jpeg", "name": "large_project1.jpg", "path": null, "size": 56.37, "width": 1000, "height": 590}, "small": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/small_project1_e350a2243b.jpg", "hash": "small_project1_e350a2243b", "mime": "image/jpeg", "name": "small_project1.jpg", "path": null, "size": 17.58, "width": 500, "height": 295}, "medium": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/medium_project1_e350a2243b.jpg", "hash": "medium_project1_e350a2243b", "mime": "image/jpeg", "name": "medium_project1.jpg", "path": null, "size": 37.38, "width": 750, "height": 443}, "thumbnail": {"ext": ".jpg", "url": "https://spsliterogwild.s3.amazonaws.com/spsliterogwild/thumbnail_project1_e350a2243b.jpg", "hash": "thumbnail_project1_e350a2243b", "mime": "image/jpeg", "name": "thumbnail_project1.jpg", "path": null, "size": 5.05, "width": 245, "height": 144}}	project1_e350a2243b	.jpg	image/jpeg	101.76	https://spsliterogwild.s3.amazonaws.com/spsliterogwild/project1_e350a2243b.jpg	\N	aws-s3	\N	/1	2023-10-07 00:58:26.705	2023-10-07 00:58:26.705	\N	\N
88	Montserrat-Bold.ttf	\N	\N	\N	\N	\N	Montserrat_Bold_8422f5c917	.ttf	font/ttf	198.07	https://spsliterogwild.s3.amazonaws.com/spsliterogwild/Montserrat_Bold_8422f5c917.ttf	\N	aws-s3	\N	/	2023-10-31 02:56:59.061	2023-10-31 02:56:59.061	1	1
\.


--
-- Data for Name: files_folder_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.files_folder_links (id, file_id, folder_id, file_order) FROM stdin;
1	76	1	1
2	82	1	2
3	83	1	3
4	84	1	4
5	85	1	5
6	86	1	6
7	87	1	7
\.


--
-- Data for Name: files_related_morphs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.files_related_morphs (id, file_id, related_id, related_type, field, "order") FROM stdin;
113	72	3	elements.font	media	1
114	74	4	elements.font	media	1
116	71	2	elements.font	media	1
115	88	5	elements.font	media	1
117	73	1	elements.font	media	1
34	34	1	elements.logotype	media	1
35	35	12	elements.button	media	1
36	37	5	elements.input-option	media	1
37	41	7	elements.input-option	media	1
39	36	10	elements.input	media	1
40	45	15	elements.input	media	1
38	42	8	elements.input-option	additional_media	1
42	46	15	elements.input	additional_media	1
41	43	14	elements.input	media	1
43	44	14	elements.input	additional_media	1
44	38	17	elements.input	media	1
45	39	17	elements.input	additional_media	1
46	40	17	elements.input	additional_media	2
47	47	1	api::metatag.metatag	favicon	1
48	48	2	elements.logotype	media	1
63	63	1	api::review.review	media	1
64	64	2	api::review.review	media	1
65	65	3	api::review.review	media	1
66	66	4	api::review.review	media	1
67	67	5	api::review.review	media	1
68	69	4	elements.slide	media	1
69	70	5	elements.slide	media	1
70	68	6	elements.slide	media	1
77	41	11	elements.input-option	media	1
78	82	264	elements.request-input	files	1
79	83	273	elements.request-input	files	1
80	84	288	elements.request-input	files	1
81	41	18	elements.input-option	media	1
82	85	309	elements.request-input	files	1
83	86	318	elements.request-input	files	1
84	87	336	elements.request-input	files	1
99	51	21	elements.feature	media	1
100	58	28	elements.feature	media	1
101	59	29	elements.feature	media	1
102	52	23	elements.feature	media	1
103	60	30	elements.feature	media	1
104	57	27	elements.feature	media	1
105	56	26	elements.feature	media	1
106	54	22	elements.feature	media	1
107	55	24	elements.feature	media	1
108	53	25	elements.feature	media	1
109	61	31	elements.feature	media	1
110	62	32	elements.feature	media	1
111	49	5	page-blocks.hero-section-block	media	1
112	50	2	page-blocks.cta-section-block	media	1
\.


--
-- Data for Name: flyouts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.flyouts (id, variant, title, uid, class_name, created_at, updated_at, published_at, created_by_id, updated_by_id, locale) FROM stdin;
1	simple	Locales Flyout	locales-flyout	\N	2023-09-06 02:41:14.624	2023-09-06 02:41:14.624	2023-05-11 23:28:36.473	\N	\N	en
2	simple	Hero Flyout	hero-flyout	\N	2023-09-06 02:41:14.653	2023-09-06 02:41:14.653	2023-05-12 01:03:51.955	\N	\N	en
\.


--
-- Data for Name: flyouts_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.flyouts_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
1	1	1	elements.button	page_blocks	1
2	2	1	page-blocks.hero-section-block	page_blocks	1
\.


--
-- Data for Name: flyouts_localizations_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.flyouts_localizations_links (id, flyout_id, inv_flyout_id, flyout_order) FROM stdin;
\.


--
-- Data for Name: footers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.footers (id, title, uid, variant, class_name, created_at, updated_at, published_at, created_by_id, updated_by_id, locale) FROM stdin;
1	Public Page Footer	public-page-footer	boxed	\N	2023-09-06 02:45:20.29	2023-09-06 02:45:20.29	2023-05-04 10:25:15.03	\N	\N	en
\.


--
-- Data for Name: footers_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.footers_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
1	1	1	page-blocks.footer-block	page_blocks	1
\.


--
-- Data for Name: footers_localizations_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.footers_localizations_links (id, footer_id, inv_footer_id, footer_order) FROM stdin;
\.


--
-- Data for Name: form_requests; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.form_requests (id, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
22	2023-10-05 03:59:55.496	2023-10-05 03:59:55.496	\N	\N
23	2023-10-05 04:01:33.501	2023-10-05 04:01:33.501	\N	\N
24	2023-10-05 16:04:32.055	2023-10-05 16:04:32.055	\N	\N
25	2023-10-05 16:11:55.735	2023-10-05 16:11:55.735	\N	\N
26	2023-10-05 16:12:24.901	2023-10-05 16:12:24.901	\N	\N
27	2023-10-05 19:18:33.534	2023-10-05 19:18:33.534	\N	\N
28	2023-10-07 00:51:30.605	2023-10-07 00:51:30.605	\N	\N
29	2023-10-07 00:53:41.996	2023-10-07 00:53:41.996	\N	\N
30	2023-10-07 00:54:31.376	2023-10-07 00:54:31.376	\N	\N
31	2023-10-07 00:54:32.235	2023-10-07 00:54:32.235	\N	\N
32	2023-10-07 00:55:19.215	2023-10-07 00:55:19.215	\N	\N
33	2023-10-07 00:55:57.283	2023-10-07 00:55:57.283	\N	\N
34	2023-10-07 00:56:38.019	2023-10-07 00:56:38.019	\N	\N
35	2023-10-07 00:57:30.806	2023-10-07 00:57:30.806	\N	\N
36	2023-10-07 00:58:03.816	2023-10-07 00:58:03.816	\N	\N
\.


--
-- Data for Name: form_requests_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.form_requests_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
199	23	215	elements.request-input	inputs	1
200	23	216	elements.request-input	inputs	2
201	23	217	elements.request-input	inputs	3
202	23	218	elements.request-input	inputs	4
203	23	219	elements.request-input	inputs	5
204	23	220	elements.request-input	inputs	6
205	23	223	elements.request-input	inputs	7
206	23	221	elements.request-input	inputs	8
207	23	222	elements.request-input	inputs	9
217	25	233	elements.request-input	inputs	1
218	25	234	elements.request-input	inputs	2
219	25	235	elements.request-input	inputs	3
220	25	236	elements.request-input	inputs	4
221	25	237	elements.request-input	inputs	5
222	25	238	elements.request-input	inputs	6
223	25	241	elements.request-input	inputs	7
224	25	239	elements.request-input	inputs	8
225	25	240	elements.request-input	inputs	9
226	26	242	elements.request-input	inputs	1
227	26	243	elements.request-input	inputs	2
228	26	244	elements.request-input	inputs	3
229	26	245	elements.request-input	inputs	4
230	26	246	elements.request-input	inputs	5
231	26	247	elements.request-input	inputs	6
232	26	250	elements.request-input	inputs	7
233	26	248	elements.request-input	inputs	8
234	26	249	elements.request-input	inputs	9
244	28	260	elements.request-input	inputs	1
245	28	261	elements.request-input	inputs	2
246	28	266	elements.request-input	inputs	3
247	28	268	elements.request-input	inputs	4
248	28	262	elements.request-input	inputs	5
249	28	263	elements.request-input	inputs	6
250	28	267	elements.request-input	inputs	7
251	28	264	elements.request-input	inputs	8
252	28	265	elements.request-input	inputs	9
262	30	278	elements.request-input	inputs	1
263	30	279	elements.request-input	inputs	2
264	30	280	elements.request-input	inputs	3
265	30	282	elements.request-input	inputs	4
266	30	281	elements.request-input	inputs	5
267	30	283	elements.request-input	inputs	6
268	30	286	elements.request-input	inputs	7
269	30	284	elements.request-input	inputs	8
270	30	285	elements.request-input	inputs	9
280	32	296	elements.request-input	inputs	1
281	32	297	elements.request-input	inputs	2
282	32	298	elements.request-input	inputs	3
283	32	304	elements.request-input	inputs	4
284	32	299	elements.request-input	inputs	5
285	32	300	elements.request-input	inputs	6
286	32	303	elements.request-input	inputs	7
287	32	301	elements.request-input	inputs	8
288	32	302	elements.request-input	inputs	9
316	36	332	elements.request-input	inputs	1
317	36	333	elements.request-input	inputs	2
318	36	340	elements.request-input	inputs	3
319	36	338	elements.request-input	inputs	4
320	36	334	elements.request-input	inputs	5
321	36	335	elements.request-input	inputs	6
322	36	339	elements.request-input	inputs	7
323	36	336	elements.request-input	inputs	8
324	36	337	elements.request-input	inputs	9
208	24	225	elements.request-input	inputs	1
209	24	224	elements.request-input	inputs	2
210	24	226	elements.request-input	inputs	3
211	24	227	elements.request-input	inputs	4
212	24	228	elements.request-input	inputs	5
213	24	229	elements.request-input	inputs	6
214	24	232	elements.request-input	inputs	7
215	24	230	elements.request-input	inputs	8
216	24	231	elements.request-input	inputs	9
235	27	251	elements.request-input	inputs	1
236	27	252	elements.request-input	inputs	2
237	27	253	elements.request-input	inputs	3
238	27	254	elements.request-input	inputs	4
239	27	255	elements.request-input	inputs	5
240	27	256	elements.request-input	inputs	6
241	27	259	elements.request-input	inputs	7
242	27	258	elements.request-input	inputs	8
243	27	257	elements.request-input	inputs	9
253	29	269	elements.request-input	inputs	1
254	29	271	elements.request-input	inputs	2
255	29	275	elements.request-input	inputs	3
256	29	276	elements.request-input	inputs	4
257	29	272	elements.request-input	inputs	5
258	29	270	elements.request-input	inputs	6
259	29	277	elements.request-input	inputs	7
260	29	273	elements.request-input	inputs	8
261	29	274	elements.request-input	inputs	9
271	31	289	elements.request-input	inputs	1
272	31	290	elements.request-input	inputs	2
273	31	294	elements.request-input	inputs	3
274	31	293	elements.request-input	inputs	4
275	31	291	elements.request-input	inputs	5
276	31	287	elements.request-input	inputs	6
277	31	295	elements.request-input	inputs	7
278	31	288	elements.request-input	inputs	8
279	31	292	elements.request-input	inputs	9
289	33	305	elements.request-input	inputs	1
290	33	306	elements.request-input	inputs	2
291	33	312	elements.request-input	inputs	3
292	33	311	elements.request-input	inputs	4
293	33	307	elements.request-input	inputs	5
294	33	308	elements.request-input	inputs	6
295	33	313	elements.request-input	inputs	7
296	33	309	elements.request-input	inputs	8
297	33	310	elements.request-input	inputs	9
298	34	315	elements.request-input	inputs	1
299	34	314	elements.request-input	inputs	2
300	34	320	elements.request-input	inputs	3
301	34	321	elements.request-input	inputs	4
302	34	317	elements.request-input	inputs	5
303	34	316	elements.request-input	inputs	6
304	34	322	elements.request-input	inputs	7
305	34	318	elements.request-input	inputs	8
306	34	319	elements.request-input	inputs	9
307	35	324	elements.request-input	inputs	1
308	35	323	elements.request-input	inputs	2
309	35	325	elements.request-input	inputs	3
310	35	326	elements.request-input	inputs	4
311	35	327	elements.request-input	inputs	5
312	35	328	elements.request-input	inputs	6
313	35	331	elements.request-input	inputs	7
314	35	329	elements.request-input	inputs	8
315	35	330	elements.request-input	inputs	9
190	22	206	elements.request-input	inputs	1
191	22	207	elements.request-input	inputs	2
192	22	209	elements.request-input	inputs	3
193	22	208	elements.request-input	inputs	4
194	22	211	elements.request-input	inputs	5
195	22	212	elements.request-input	inputs	6
196	22	214	elements.request-input	inputs	7
197	22	210	elements.request-input	inputs	8
198	22	213	elements.request-input	inputs	9
\.


--
-- Data for Name: form_requests_form_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.form_requests_form_links (id, form_request_id, form_id, form_request_order) FROM stdin;
21	22	1	1
22	23	1	2
23	24	1	3
24	25	1	4
25	26	1	5
26	27	1	6
27	28	1	7
28	29	1	8
29	30	1	9
30	31	1	10
31	32	1	11
32	33	1	12
33	34	1	13
34	35	1	14
35	36	1	15
\.


--
-- Data for Name: forms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.forms (id, class_name, additional_attributes, variant, uid, title, created_at, updated_at, published_at, created_by_id, updated_by_id, locale) FROM stdin;
1	\N	\N	simple	question	Есть вопросы по продукту?	2023-09-06 02:44:47.585	2023-09-06 02:46:17.565	2023-02-14 22:44:48.245	\N	\N	en
\.


--
-- Data for Name: forms_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.forms_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
12	1	10	elements.input	inputs	1
13	1	11	elements.input	inputs	2
14	1	17	elements.input	inputs	3
15	1	18	elements.input	inputs	4
16	1	12	elements.input	inputs	5
17	1	13	elements.input	inputs	6
18	1	14	elements.input	inputs	7
19	1	15	elements.input	inputs	8
20	1	16	elements.input	inputs	9
21	1	13	elements.button	button	10
22	1	2	functions.form-side-effect	side_effects	1
\.


--
-- Data for Name: forms_localizations_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.forms_localizations_links (id, form_id, inv_form_id, form_order) FROM stdin;
\.


--
-- Data for Name: i18n_locale; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.i18n_locale (id, name, code, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	English (en)	en	2023-09-06 02:41:10.652	2023-09-06 02:41:13.396	\N	\N
2	Spanish (es)	es	2023-10-04 22:41:36.541	2023-10-04 22:41:36.541	1	1
\.


--
-- Data for Name: layouts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.layouts (id, title, uid, variant, class_name, created_at, updated_at, published_at, created_by_id, updated_by_id, locale) FROM stdin;
1	Public Page Layout With Sidebar	public-page-layout	boxed	\N	2023-09-06 02:45:15.974	2023-09-06 02:46:17.611	2023-04-08 12:04:56.606	\N	\N	en
2	Public Page Layout	public-page-layout-1	wide	[&>.layout-container]:pt-16	2023-09-06 02:45:16.038	2023-09-06 02:46:17.674	2023-04-20 10:23:38.447	\N	\N	en
\.


--
-- Data for Name: layouts_footer_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.layouts_footer_links (id, layout_id, footer_id, layout_order) FROM stdin;
1	2	1	1
2	1	1	2
\.


--
-- Data for Name: layouts_localizations_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.layouts_localizations_links (id, layout_id, inv_layout_id, layout_order) FROM stdin;
\.


--
-- Data for Name: layouts_modals_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.layouts_modals_links (id, layout_id, modal_id, modal_order, layout_order) FROM stdin;
1	1	1	1	1
2	2	1	1	2
\.


--
-- Data for Name: layouts_navbar_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.layouts_navbar_links (id, layout_id, navbar_id, layout_order) FROM stdin;
1	1	1	1
2	2	1	2
\.


--
-- Data for Name: layouts_sidebar_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.layouts_sidebar_links (id, layout_id, sidebar_id, layout_order) FROM stdin;
1	1	1	1
\.


--
-- Data for Name: layouts_slide_overs_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.layouts_slide_overs_links (id, layout_id, slide_over_id, slide_over_order, layout_order) FROM stdin;
1	1	1	1	1
2	2	1	1	2
\.


--
-- Data for Name: layouts_topbar_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.layouts_topbar_links (id, layout_id, topbar_id, layout_order) FROM stdin;
\.


--
-- Data for Name: loaders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.loaders (id, variant, class_name, anchor, title, subtitle, description, created_at, updated_at, published_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: metatags; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.metatags (id, title, description, script, gtm_key, is_default, created_at, updated_at, published_at, created_by_id, updated_by_id, locale) FROM stdin;
1	Lite Single Page Startup	The fastest way to create startup	\N	\N	t	2023-09-06 02:46:19.524	2023-09-06 02:46:19.524	2023-04-08 13:09:23.027	\N	\N	en
\.


--
-- Data for Name: metatags_localizations_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.metatags_localizations_links (id, metatag_id, inv_metatag_id, metatag_order) FROM stdin;
\.


--
-- Data for Name: modals; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modals (id, uid, dialog_panel_class_name, variant, title, class_name, created_at, updated_at, published_at, created_by_id, updated_by_id, locale) FROM stdin;
1	this-is-modal	w-8/12	simple	This Is Modal	\N	2023-09-06 02:46:19.621	2023-09-06 02:46:19.621	2023-03-28 11:07:57.457	\N	\N	en
\.


--
-- Data for Name: modals_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modals_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
1	1	4	page-blocks.hero-section-block	page_blocks	1
\.


--
-- Data for Name: modals_localizations_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modals_localizations_links (id, modal_id, inv_modal_id, modal_order) FROM stdin;
\.


--
-- Data for Name: navbars; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.navbars (id, title, uid, variant, class_name, "position", side, created_at, updated_at, published_at, created_by_id, updated_by_id, locale) FROM stdin;
1	Public Page Navbar	public-page-navbar	boxed	\N	fixed	top	2023-09-06 02:46:22.153	2023-09-06 02:46:22.153	2023-04-08 12:04:22.148	\N	\N	en
\.


--
-- Data for Name: navbars_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.navbars_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
1	1	1	page-blocks.navbar-block	page_blocks	1
\.


--
-- Data for Name: navbars_localizations_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.navbars_localizations_links (id, navbar_id, inv_navbar_id, navbar_order) FROM stdin;
\.


--
-- Data for Name: pages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages (id, title, url, created_at, updated_at, published_at, created_by_id, updated_by_id, locale) FROM stdin;
2	Page With Sidebar Layout	/page-with-sidebar-layout	2023-09-06 02:45:15.84	2023-09-06 02:48:14.107	2023-04-08 20:00:14.519	\N	\N	en
3	Not found page	/404	2023-09-06 02:45:15.913	2023-09-06 02:48:14.157	2023-04-20 11:18:21.051	\N	\N	en
4	Terms and Conditions	/terms-and-conditions	2023-09-06 02:45:15.946	2023-09-06 02:48:14.189	2023-05-04 15:38:22.465	\N	\N	en
6	Currency Page	/currencies/[currency.id]	2023-10-04 22:42:13.267	2023-10-04 22:42:16.169	2023-10-04 22:42:16.159	1	1	es
5	Currencies	/currencies/[currency.id]	2023-10-04 22:33:05.095	2023-10-04 22:42:16.195	2023-10-04 22:34:11.605	1	1	en
7	Error page	/500	2023-10-27 22:53:04.727	2023-10-27 22:53:05.705	2023-10-27 22:53:05.693	1	1	en
1	Main page	/	2023-09-06 02:44:47.712	2023-10-28 10:36:10.862	2023-04-08 19:06:05.277	\N	1	en
\.


--
-- Data for Name: pages_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
14	2	2	page-blocks.slider-block	page_blocks	1
15	3	2	page-blocks.not-found-block	page_blocks	1
16	4	6	page-blocks.hero-section-block	page_blocks	1
17	5	8	page-blocks.hero-section-block	page_blocks	1
18	7	9	page-blocks.hero-section-block	page_blocks	1
25	1	5	page-blocks.hero-section-block	page_blocks	1
26	1	2	page-blocks.cta-section-block	page_blocks	2
27	1	2	page-blocks.features-section-block	page_blocks	3
28	1	2	page-blocks.reviews-list-block	page_blocks	4
29	1	2	page-blocks.contact-section-block	page_blocks	5
\.


--
-- Data for Name: pages_layout_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_layout_links (id, page_id, layout_id, page_order) FROM stdin;
1	2	1	1
2	1	2	1
3	4	2	2
4	3	2	3
13	5	2	4
14	7	2	5
\.


--
-- Data for Name: pages_localizations_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_localizations_links (id, page_id, inv_page_id, page_order) FROM stdin;
1	6	5	1
2	5	6	1
\.


--
-- Data for Name: pages_metatag_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pages_metatag_links (id, page_id, metatag_id, page_order) FROM stdin;
1	1	1	1
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reviews (id, name, title, description, subtitle, rating, created_at, updated_at, published_at, created_by_id, updated_by_id) FROM stdin;
1	Alex Martin	Time and Resource Saver	As a lead developer, I've seen firsthand the time and effort it takes to build a startup from scratch. The Single Page Startup has saved our team countless hours in development by providing us with ready-to-use components and features. It has been an invaluable resource, allowing us to focus on delivering value to our users.	FinX Solutions, Lead Developer	4	2023-09-06 02:43:17.594	2023-09-06 02:48:27.994	2023-03-12 11:33:21.047	\N	\N
2	Sarah Thompson	A Game-Changer for Our Startup	The Single Page Startup has been a game-changer for our company. It has dramatically reduced our development time and allowed us to focus on building the innovative solutions our customers need. The pre-built features and integrations have made it easy to get started and scale our product. We couldn't be happier with the results.	GreenTech Innovations, Co-Founder & CTO	5	2023-09-06 02:43:35.401	2023-09-06 02:48:48.783	2023-03-12 11:34:53.754	\N	\N
3	Emily Chen	Agile and Efficient Development	Our team has been able to move quickly and iteratively thanks to that boilerplate. The built-in feedback mechanisms have helped us ensure our product remains aligned with user needs, and the agile development environment has fostered a culture of innovation within our team. We highly recommend it to any startup looking to launch quickly and efficiently.	HealthBridge, Product Manager	4	2023-09-06 02:43:41.931	2023-09-06 02:48:56.269	2023-03-12 11:32:42.951	\N	\N
4	Olivia Smith	Outstanding Support and Flexibility	The Single Page Startup has not only provided us with a solid foundation for our product but also outstanding support and flexibility. The boilerplate's developers have been responsive to our needs, and the customization options have allowed us to tailor the solution to our specific requirements. It's been a pleasure working with such a reliable and adaptable solution.	TravelTrail, Head of Engineering	5	2023-09-06 02:43:49.151	2023-09-06 02:49:07.728	2023-03-12 11:33:57.476	\N	\N
5	Michael Johnson	Tailored to Startup Success	The Single Page Startup boilerplate has been instrumental in our startup's success. Its focus on MVP readiness and adaptability has allowed us to quickly test and validate our ideas, making it easy to pivot and refine our product offering. It has been a crucial part of our journey, and we couldn't imagine building our startup without it.	EduSphere, Founder & CEO	5	2023-09-06 02:43:52.658	2023-09-06 02:49:11.409	2023-03-12 11:34:27.387	\N	\N
\.


--
-- Data for Name: robots; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.robots (id, robots, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: sidebars; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sidebars (id, variant, title, uid, class_name, side, created_at, updated_at, published_at, created_by_id, updated_by_id, locale) FROM stdin;
1	one-quarter	Ads Sidebar	ads-sidebar-1	\N	right	2023-09-06 02:49:11.499	2023-09-06 02:49:11.499	2023-04-08 00:35:29.006	\N	\N	en
\.


--
-- Data for Name: sidebars_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sidebars_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
1	1	7	page-blocks.hero-section-block	page_blocks	1
\.


--
-- Data for Name: sidebars_localizations_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sidebars_localizations_links (id, sidebar_id, inv_sidebar_id, sidebar_order) FROM stdin;
\.


--
-- Data for Name: slide_overs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.slide_overs (id, variant, title, uid, class_name, created_at, updated_at, published_at, created_by_id, updated_by_id, locale) FROM stdin;
1	right-side-half-width	This Is Slide Over	this-is-slide-over	sps-lite-slide-over	2023-09-06 02:49:11.582	2023-09-06 02:49:11.582	2023-04-07 23:54:17.781	\N	\N	en
\.


--
-- Data for Name: slide_overs_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.slide_overs_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
1	1	1	page-blocks.faqs-block	page_blocks	1
\.


--
-- Data for Name: slide_overs_localizations_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.slide_overs_localizations_links (id, slide_over_id, inv_slide_over_id, slide_over_order) FROM stdin;
\.


--
-- Data for Name: sliders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sliders (id, variant, show_backdrop, show_full_screen, show_previews, class_name, aspect_ratio_class_name, title, uid, created_at, updated_at, published_at, created_by_id, updated_by_id, locale) FROM stdin;
1	fade-with-previews	t	t	t	\N	aspect-h-1 aspect-w-1 xl:aspect-w-15 xl:aspect-h-10	Features Slider	features-slider	2023-09-06 02:45:15.749	2023-09-06 02:49:51.882	2023-03-28 10:46:50.78	\N	\N	en
\.


--
-- Data for Name: sliders_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sliders_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
4	1	6	elements.slide	slides	1
5	1	4	elements.slide	slides	2
6	1	5	elements.slide	slides	3
\.


--
-- Data for Name: sliders_localizations_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sliders_localizations_links (id, slider_id, inv_slider_id, slider_order) FROM stdin;
\.


--
-- Data for Name: strapi_api_token_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strapi_api_token_permissions (id, action, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: strapi_api_token_permissions_token_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strapi_api_token_permissions_token_links (id, api_token_permission_id, api_token_id, api_token_permission_order) FROM stdin;
\.


--
-- Data for Name: strapi_api_tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strapi_api_tokens (id, name, description, type, access_key, last_used_at, expires_at, lifespan, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: strapi_core_store_settings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strapi_core_store_settings (id, key, value, type, environment, tag) FROM stdin;
107	plugin_upload_api-folder	{"id":1}	object	\N	\N
34	plugin_content_manager_configuration_content_types::admin::transfer-token-permission	{"uid":"admin::transfer-token-permission","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"action","defaultSortBy":"action","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"action":{"edit":{"label":"action","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"action","searchable":true,"sortable":true}},"token":{"edit":{"label":"token","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"token","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","action","token","createdAt"],"edit":[[{"name":"action","size":6},{"name":"token","size":6}]]}}	object	\N	\N
37	plugin_content_manager_configuration_content_types::admin::transfer-token	{"uid":"admin::transfer-token","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":true,"sortable":true}},"accessKey":{"edit":{"label":"accessKey","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"accessKey","searchable":true,"sortable":true}},"lastUsedAt":{"edit":{"label":"lastUsedAt","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"lastUsedAt","searchable":true,"sortable":true}},"permissions":{"edit":{"label":"permissions","description":"","placeholder":"","visible":true,"editable":true,"mainField":"action"},"list":{"label":"permissions","searchable":false,"sortable":false}},"expiresAt":{"edit":{"label":"expiresAt","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"expiresAt","searchable":true,"sortable":true}},"lifespan":{"edit":{"label":"lifespan","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"lifespan","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","description","accessKey"],"edit":[[{"name":"name","size":6},{"name":"description","size":6}],[{"name":"accessKey","size":6},{"name":"lastUsedAt","size":6}],[{"name":"permissions","size":6},{"name":"expiresAt","size":6}],[{"name":"lifespan","size":4}]]}}	object	\N	\N
43	plugin_content_manager_configuration_content_types::api::currency.currency	{"uid":"api::currency.currency","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"title","defaultSortBy":"title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"unicode":{"edit":{"label":"unicode","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"unicode","searchable":true,"sortable":true}},"is_default":{"edit":{"label":"is_default","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"is_default","searchable":true,"sortable":true}},"tiers":{"edit":{"label":"tiers","description":"","placeholder":"","visible":true,"editable":true,"mainField":"id"},"list":{"label":"tiers","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","title","unicode","is_default"],"edit":[[{"name":"title","size":6},{"name":"unicode","size":6}],[{"name":"is_default","size":4},{"name":"tiers","size":6}]]}}	object	\N	\N
57	plugin_content_manager_configuration_content_types::api::sidebar.sidebar	{"uid":"api::sidebar.sidebar","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"title","defaultSortBy":"title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"uid":{"edit":{"label":"uid","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"uid","searchable":true,"sortable":true}},"page_blocks":{"edit":{"label":"page_blocks","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"page_blocks","searchable":false,"sortable":false}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"layouts":{"edit":{"label":"layouts","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"layouts","searchable":false,"sortable":false}},"side":{"edit":{"label":"side","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"side","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","variant","title","uid"],"edit":[[{"name":"variant","size":6},{"name":"title","size":6}],[{"name":"uid","size":6}],[{"name":"page_blocks","size":12}],[{"name":"class_name","size":6},{"name":"layouts","size":6}],[{"name":"side","size":6}]]}}	object	\N	\N
45	plugin_content_manager_configuration_content_types::api::footer.footer	{"uid":"api::footer.footer","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"title","defaultSortBy":"title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"uid":{"edit":{"label":"uid","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"uid","searchable":true,"sortable":true}},"layouts":{"edit":{"label":"layouts","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"layouts","searchable":false,"sortable":false}},"page_blocks":{"edit":{"label":"page_blocks","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"page_blocks","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","title","uid","layouts"],"edit":[[{"name":"title","size":6},{"name":"uid","size":6}],[{"name":"layouts","size":6}],[{"name":"page_blocks","size":12}],[{"name":"variant","size":6},{"name":"class_name","size":6}]]}}	object	\N	\N
63	plugin_content_manager_configuration_content_types::api::topbar.topbar	{"uid":"api::topbar.topbar","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"title","defaultSortBy":"title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"uid":{"edit":{"label":"uid","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"uid","searchable":true,"sortable":true}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"page_blocks":{"edit":{"label":"page_blocks","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"page_blocks","searchable":false,"sortable":false}},"layouts":{"edit":{"label":"layouts","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"layouts","searchable":false,"sortable":false}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"position":{"edit":{"label":"position","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"position","searchable":true,"sortable":true}},"side":{"edit":{"label":"side","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"side","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","title","uid","variant"],"edit":[[{"name":"title","size":6},{"name":"uid","size":6}],[{"name":"variant","size":6}],[{"name":"page_blocks","size":12}],[{"name":"layouts","size":6},{"name":"class_name","size":6}],[{"name":"position","size":6},{"name":"side","size":6}]]}}	object	\N	\N
33	plugin_content_manager_configuration_content_types::plugin::upload.file	{"uid":"plugin::upload.file","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"alternativeText":{"edit":{"label":"alternativeText","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"alternativeText","searchable":true,"sortable":true}},"caption":{"edit":{"label":"caption","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"caption","searchable":true,"sortable":true}},"width":{"edit":{"label":"width","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"width","searchable":true,"sortable":true}},"height":{"edit":{"label":"height","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"height","searchable":true,"sortable":true}},"formats":{"edit":{"label":"formats","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"formats","searchable":false,"sortable":false}},"hash":{"edit":{"label":"hash","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"hash","searchable":true,"sortable":true}},"ext":{"edit":{"label":"ext","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"ext","searchable":true,"sortable":true}},"mime":{"edit":{"label":"mime","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"mime","searchable":true,"sortable":true}},"size":{"edit":{"label":"size","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"size","searchable":true,"sortable":true}},"url":{"edit":{"label":"url","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"url","searchable":true,"sortable":true}},"previewUrl":{"edit":{"label":"previewUrl","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"previewUrl","searchable":true,"sortable":true}},"provider":{"edit":{"label":"provider","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"provider","searchable":true,"sortable":true}},"provider_metadata":{"edit":{"label":"provider_metadata","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"provider_metadata","searchable":false,"sortable":false}},"folder":{"edit":{"label":"folder","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"folder","searchable":true,"sortable":true}},"folderPath":{"edit":{"label":"folderPath","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"folderPath","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","alternativeText","caption"],"edit":[[{"name":"name","size":6},{"name":"alternativeText","size":6}],[{"name":"caption","size":6},{"name":"width","size":4}],[{"name":"height","size":4}],[{"name":"formats","size":12}],[{"name":"hash","size":6},{"name":"ext","size":6}],[{"name":"mime","size":6},{"name":"size","size":4}],[{"name":"url","size":6},{"name":"previewUrl","size":6}],[{"name":"provider","size":6}],[{"name":"provider_metadata","size":12}],[{"name":"folder","size":6},{"name":"folderPath","size":6}]]}}	object	\N	\N
39	plugin_content_manager_configuration_content_types::plugin::upload.folder	{"uid":"plugin::upload.folder","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"pathId":{"edit":{"label":"pathId","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"pathId","searchable":true,"sortable":true}},"parent":{"edit":{"label":"parent","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"parent","searchable":true,"sortable":true}},"children":{"edit":{"label":"children","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"children","searchable":false,"sortable":false}},"files":{"edit":{"label":"files","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"files","searchable":false,"sortable":false}},"path":{"edit":{"label":"path","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"path","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","pathId","parent"],"edit":[[{"name":"name","size":6},{"name":"pathId","size":4}],[{"name":"parent","size":6},{"name":"children","size":6}],[{"name":"files","size":6},{"name":"path","size":6}]]}}	object	\N	\N
48	plugin_content_manager_configuration_content_types::plugin::users-permissions.role	{"uid":"plugin::users-permissions.role","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":true,"sortable":true}},"type":{"edit":{"label":"type","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"type","searchable":true,"sortable":true}},"permissions":{"edit":{"label":"permissions","description":"","placeholder":"","visible":true,"editable":true,"mainField":"action"},"list":{"label":"permissions","searchable":false,"sortable":false}},"users":{"edit":{"label":"users","description":"","placeholder":"","visible":true,"editable":true,"mainField":"username"},"list":{"label":"users","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","description","type"],"edit":[[{"name":"name","size":6},{"name":"description","size":6}],[{"name":"type","size":6},{"name":"permissions","size":6}],[{"name":"users","size":6}]]}}	object	\N	\N
60	plugin_content_manager_configuration_content_types::api::telegram.telegram	{"uid":"api::telegram.telegram","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","createdAt","updatedAt"],"edit":[[{"name":"name","size":6}]]}}	object	\N	\N
38	plugin_content_manager_configuration_content_types::admin::api-token-permission	{"uid":"admin::api-token-permission","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"action","defaultSortBy":"action","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"action":{"edit":{"label":"action","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"action","searchable":true,"sortable":true}},"token":{"edit":{"label":"token","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"token","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","action","token","createdAt"],"edit":[[{"name":"action","size":6},{"name":"token","size":6}]]}}	object	\N	\N
36	plugin_content_manager_configuration_content_types::admin::role	{"uid":"admin::role","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"code":{"edit":{"label":"code","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"code","searchable":true,"sortable":true}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":true,"sortable":true}},"users":{"edit":{"label":"users","description":"","placeholder":"","visible":true,"editable":true,"mainField":"firstname"},"list":{"label":"users","searchable":false,"sortable":false}},"permissions":{"edit":{"label":"permissions","description":"","placeholder":"","visible":true,"editable":true,"mainField":"action"},"list":{"label":"permissions","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","code","description"],"edit":[[{"name":"name","size":6},{"name":"code","size":6}],[{"name":"description","size":6},{"name":"users","size":6}],[{"name":"permissions","size":6}]]}}	object	\N	\N
58	plugin_content_manager_configuration_content_types::api::form-request.form-request	{"uid":"api::form-request.form-request","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"inputs":{"edit":{"label":"inputs","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"inputs","searchable":false,"sortable":false}},"files":{"edit":{"label":"files","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"files","searchable":false,"sortable":false}},"form":{"edit":{"label":"form","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"form","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","inputs","files","form"],"edit":[[{"name":"inputs","size":12}],[{"name":"files","size":6},{"name":"form","size":6}]]}}	object	\N	\N
46	plugin_content_manager_configuration_content_types::plugin::i18n.locale	{"uid":"plugin::i18n.locale","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"code":{"edit":{"label":"code","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"code","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","code","createdAt"],"edit":[[{"name":"name","size":6},{"name":"code","size":6}]]}}	object	\N	\N
35	plugin_content_manager_configuration_content_types::admin::api-token	{"uid":"admin::api-token","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":true,"sortable":true}},"type":{"edit":{"label":"type","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"type","searchable":true,"sortable":true}},"accessKey":{"edit":{"label":"accessKey","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"accessKey","searchable":true,"sortable":true}},"lastUsedAt":{"edit":{"label":"lastUsedAt","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"lastUsedAt","searchable":true,"sortable":true}},"permissions":{"edit":{"label":"permissions","description":"","placeholder":"","visible":true,"editable":true,"mainField":"action"},"list":{"label":"permissions","searchable":false,"sortable":false}},"expiresAt":{"edit":{"label":"expiresAt","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"expiresAt","searchable":true,"sortable":true}},"lifespan":{"edit":{"label":"lifespan","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"lifespan","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","name","description","type"],"edit":[[{"name":"name","size":6},{"name":"description","size":6}],[{"name":"type","size":6},{"name":"accessKey","size":6}],[{"name":"lastUsedAt","size":6},{"name":"permissions","size":6}],[{"name":"expiresAt","size":6},{"name":"lifespan","size":4}]]}}	object	\N	\N
50	plugin_content_manager_configuration_content_types::api::layout.layout	{"uid":"api::layout.layout","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"title","defaultSortBy":"title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"uid":{"edit":{"label":"uid","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"uid","searchable":true,"sortable":true}},"sidebar":{"edit":{"label":"sidebar","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"sidebar","searchable":true,"sortable":true}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"topbar":{"edit":{"label":"topbar","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"topbar","searchable":true,"sortable":true}},"footer":{"edit":{"label":"footer","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"footer","searchable":true,"sortable":true}},"slide_overs":{"edit":{"label":"slide_overs","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"slide_overs","searchable":false,"sortable":false}},"modals":{"edit":{"label":"modals","description":"","placeholder":"","visible":true,"editable":true,"mainField":"dialog_panel_class_name"},"list":{"label":"modals","searchable":false,"sortable":false}},"navbar":{"edit":{"label":"navbar","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"navbar","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"pages":{"edit":{"label":"pages","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"pages","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","title","uid","sidebar"],"edit":[[{"name":"title","size":6},{"name":"uid","size":6}],[{"name":"sidebar","size":6},{"name":"variant","size":6}],[{"name":"topbar","size":6},{"name":"footer","size":6}],[{"name":"slide_overs","size":6},{"name":"modals","size":6}],[{"name":"navbar","size":6},{"name":"class_name","size":6}],[{"name":"pages","size":6}]]}}	object	\N	\N
62	plugin_content_manager_configuration_content_types::api::tier.tier	{"uid":"api::tier.tier","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"price":{"edit":{"label":"price","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"price","searchable":true,"sortable":true}},"currency":{"edit":{"label":"currency","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"currency","searchable":true,"sortable":true}},"type":{"edit":{"label":"type","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"type","searchable":true,"sortable":true}},"period":{"edit":{"label":"period","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"period","searchable":true,"sortable":true}},"features":{"edit":{"label":"features","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"features","searchable":false,"sortable":false}},"old_price":{"edit":{"label":"old_price","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"old_price","searchable":true,"sortable":true}},"buttons":{"edit":{"label":"buttons","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"buttons","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","price","currency","type"],"edit":[[{"name":"title","size":12}],[{"name":"description","size":12}],[{"name":"price","size":4},{"name":"currency","size":6}],[{"name":"type","size":6},{"name":"period","size":4}],[{"name":"features","size":12}],[{"name":"old_price","size":4}],[{"name":"buttons","size":12}]]}}	object	\N	\N
56	plugin_content_manager_configuration_content_types::api::form.form	{"uid":"api::form.form","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"title","defaultSortBy":"title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"inputs":{"edit":{"label":"inputs","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"inputs","searchable":false,"sortable":false}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"additional_attributes":{"edit":{"label":"additional_attributes","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_attributes","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"button":{"edit":{"label":"button","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"button","searchable":false,"sortable":false}},"form_requests":{"edit":{"label":"form_requests","description":"","placeholder":"","visible":true,"editable":true,"mainField":"id"},"list":{"label":"form_requests","searchable":false,"sortable":false}},"uid":{"edit":{"label":"uid","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"uid","searchable":true,"sortable":true}},"side_effects":{"edit":{"label":"side_effects","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"side_effects","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","inputs","class_name","variant"],"edit":[[{"name":"inputs","size":12}],[{"name":"class_name","size":6}],[{"name":"additional_attributes","size":12}],[{"name":"variant","size":6}],[{"name":"button","size":12}],[{"name":"form_requests","size":6},{"name":"uid","size":6}],[{"name":"side_effects","size":12}],[{"name":"title","size":6}]]}}	object	\N	\N
88	plugin_content_manager_configuration_components::page-blocks.hero-section-block	{"uid":"page-blocks.hero-section-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"anchor","defaultSortBy":"anchor","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"buttons":{"edit":{"label":"buttons","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"buttons","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"anchor":{"edit":{"label":"anchor","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"anchor","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}}},"layouts":{"list":["id","media","buttons","variant"],"edit":[[{"name":"title","size":12}],[{"name":"description","size":12}],[{"name":"media","size":6}],[{"name":"buttons","size":12}],[{"name":"variant","size":6},{"name":"anchor","size":6}],[{"name":"class_name","size":6},{"name":"additional_media","size":6}]]},"isComponent":true}	object	\N	\N
1	strapi_content_types_schema	{"admin::permission":{"collectionName":"admin_permissions","info":{"name":"Permission","description":"","singularName":"permission","pluralName":"permissions","displayName":"Permission"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","minLength":1,"configurable":false,"required":true},"actionParameters":{"type":"json","configurable":false,"required":false,"default":{}},"subject":{"type":"string","minLength":1,"configurable":false,"required":false},"properties":{"type":"json","configurable":false,"required":false,"default":{}},"conditions":{"type":"json","configurable":false,"required":false,"default":[]},"role":{"configurable":false,"type":"relation","relation":"manyToOne","inversedBy":"permissions","target":"admin::role"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"admin_permissions","info":{"name":"Permission","description":"","singularName":"permission","pluralName":"permissions","displayName":"Permission"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","minLength":1,"configurable":false,"required":true},"actionParameters":{"type":"json","configurable":false,"required":false,"default":{}},"subject":{"type":"string","minLength":1,"configurable":false,"required":false},"properties":{"type":"json","configurable":false,"required":false,"default":{}},"conditions":{"type":"json","configurable":false,"required":false,"default":[]},"role":{"configurable":false,"type":"relation","relation":"manyToOne","inversedBy":"permissions","target":"admin::role"}},"kind":"collectionType"},"modelType":"contentType","modelName":"permission","connection":"default","uid":"admin::permission","plugin":"admin","globalId":"AdminPermission"},"admin::user":{"collectionName":"admin_users","info":{"name":"User","description":"","singularName":"user","pluralName":"users","displayName":"User"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"firstname":{"type":"string","unique":false,"minLength":1,"configurable":false,"required":false},"lastname":{"type":"string","unique":false,"minLength":1,"configurable":false,"required":false},"username":{"type":"string","unique":false,"configurable":false,"required":false},"email":{"type":"email","minLength":6,"configurable":false,"required":true,"unique":true,"private":true},"password":{"type":"password","minLength":6,"configurable":false,"required":false,"private":true,"searchable":false},"resetPasswordToken":{"type":"string","configurable":false,"private":true,"searchable":false},"registrationToken":{"type":"string","configurable":false,"private":true,"searchable":false},"isActive":{"type":"boolean","default":false,"configurable":false,"private":true},"roles":{"configurable":false,"private":true,"type":"relation","relation":"manyToMany","inversedBy":"users","target":"admin::role","collectionName":"strapi_users_roles"},"blocked":{"type":"boolean","default":false,"configurable":false,"private":true},"preferedLanguage":{"type":"string","configurable":false,"required":false,"searchable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"config":{"attributes":{"resetPasswordToken":{"hidden":true},"registrationToken":{"hidden":true}}},"kind":"collectionType","__schema__":{"collectionName":"admin_users","info":{"name":"User","description":"","singularName":"user","pluralName":"users","displayName":"User"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"firstname":{"type":"string","unique":false,"minLength":1,"configurable":false,"required":false},"lastname":{"type":"string","unique":false,"minLength":1,"configurable":false,"required":false},"username":{"type":"string","unique":false,"configurable":false,"required":false},"email":{"type":"email","minLength":6,"configurable":false,"required":true,"unique":true,"private":true},"password":{"type":"password","minLength":6,"configurable":false,"required":false,"private":true,"searchable":false},"resetPasswordToken":{"type":"string","configurable":false,"private":true,"searchable":false},"registrationToken":{"type":"string","configurable":false,"private":true,"searchable":false},"isActive":{"type":"boolean","default":false,"configurable":false,"private":true},"roles":{"configurable":false,"private":true,"type":"relation","relation":"manyToMany","inversedBy":"users","target":"admin::role","collectionName":"strapi_users_roles"},"blocked":{"type":"boolean","default":false,"configurable":false,"private":true},"preferedLanguage":{"type":"string","configurable":false,"required":false,"searchable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"user","connection":"default","uid":"admin::user","plugin":"admin","globalId":"AdminUser"},"admin::role":{"collectionName":"admin_roles","info":{"name":"Role","description":"","singularName":"role","pluralName":"roles","displayName":"Role"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"unique":true,"configurable":false,"required":true},"code":{"type":"string","minLength":1,"unique":true,"configurable":false,"required":true},"description":{"type":"string","configurable":false},"users":{"configurable":false,"type":"relation","relation":"manyToMany","mappedBy":"roles","target":"admin::user"},"permissions":{"configurable":false,"type":"relation","relation":"oneToMany","mappedBy":"role","target":"admin::permission"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"admin_roles","info":{"name":"Role","description":"","singularName":"role","pluralName":"roles","displayName":"Role"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"unique":true,"configurable":false,"required":true},"code":{"type":"string","minLength":1,"unique":true,"configurable":false,"required":true},"description":{"type":"string","configurable":false},"users":{"configurable":false,"type":"relation","relation":"manyToMany","mappedBy":"roles","target":"admin::user"},"permissions":{"configurable":false,"type":"relation","relation":"oneToMany","mappedBy":"role","target":"admin::permission"}},"kind":"collectionType"},"modelType":"contentType","modelName":"role","connection":"default","uid":"admin::role","plugin":"admin","globalId":"AdminRole"},"admin::api-token":{"collectionName":"strapi_api_tokens","info":{"name":"Api Token","singularName":"api-token","pluralName":"api-tokens","displayName":"Api Token","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"configurable":false,"required":true,"unique":true},"description":{"type":"string","minLength":1,"configurable":false,"required":false,"default":""},"type":{"type":"enumeration","enum":["read-only","full-access","custom"],"configurable":false,"required":true,"default":"read-only"},"accessKey":{"type":"string","minLength":1,"configurable":false,"required":true,"searchable":false},"lastUsedAt":{"type":"datetime","configurable":false,"required":false},"permissions":{"type":"relation","target":"admin::api-token-permission","relation":"oneToMany","mappedBy":"token","configurable":false,"required":false},"expiresAt":{"type":"datetime","configurable":false,"required":false},"lifespan":{"type":"biginteger","configurable":false,"required":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"strapi_api_tokens","info":{"name":"Api Token","singularName":"api-token","pluralName":"api-tokens","displayName":"Api Token","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"configurable":false,"required":true,"unique":true},"description":{"type":"string","minLength":1,"configurable":false,"required":false,"default":""},"type":{"type":"enumeration","enum":["read-only","full-access","custom"],"configurable":false,"required":true,"default":"read-only"},"accessKey":{"type":"string","minLength":1,"configurable":false,"required":true,"searchable":false},"lastUsedAt":{"type":"datetime","configurable":false,"required":false},"permissions":{"type":"relation","target":"admin::api-token-permission","relation":"oneToMany","mappedBy":"token","configurable":false,"required":false},"expiresAt":{"type":"datetime","configurable":false,"required":false},"lifespan":{"type":"biginteger","configurable":false,"required":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"api-token","connection":"default","uid":"admin::api-token","plugin":"admin","globalId":"AdminApiToken"},"admin::api-token-permission":{"collectionName":"strapi_api_token_permissions","info":{"name":"API Token Permission","description":"","singularName":"api-token-permission","pluralName":"api-token-permissions","displayName":"API Token Permission"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","minLength":1,"configurable":false,"required":true},"token":{"configurable":false,"type":"relation","relation":"manyToOne","inversedBy":"permissions","target":"admin::api-token"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"strapi_api_token_permissions","info":{"name":"API Token Permission","description":"","singularName":"api-token-permission","pluralName":"api-token-permissions","displayName":"API Token Permission"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","minLength":1,"configurable":false,"required":true},"token":{"configurable":false,"type":"relation","relation":"manyToOne","inversedBy":"permissions","target":"admin::api-token"}},"kind":"collectionType"},"modelType":"contentType","modelName":"api-token-permission","connection":"default","uid":"admin::api-token-permission","plugin":"admin","globalId":"AdminApiTokenPermission"},"admin::transfer-token":{"collectionName":"strapi_transfer_tokens","info":{"name":"Transfer Token","singularName":"transfer-token","pluralName":"transfer-tokens","displayName":"Transfer Token","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"configurable":false,"required":true,"unique":true},"description":{"type":"string","minLength":1,"configurable":false,"required":false,"default":""},"accessKey":{"type":"string","minLength":1,"configurable":false,"required":true},"lastUsedAt":{"type":"datetime","configurable":false,"required":false},"permissions":{"type":"relation","target":"admin::transfer-token-permission","relation":"oneToMany","mappedBy":"token","configurable":false,"required":false},"expiresAt":{"type":"datetime","configurable":false,"required":false},"lifespan":{"type":"biginteger","configurable":false,"required":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"strapi_transfer_tokens","info":{"name":"Transfer Token","singularName":"transfer-token","pluralName":"transfer-tokens","displayName":"Transfer Token","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":1,"configurable":false,"required":true,"unique":true},"description":{"type":"string","minLength":1,"configurable":false,"required":false,"default":""},"accessKey":{"type":"string","minLength":1,"configurable":false,"required":true},"lastUsedAt":{"type":"datetime","configurable":false,"required":false},"permissions":{"type":"relation","target":"admin::transfer-token-permission","relation":"oneToMany","mappedBy":"token","configurable":false,"required":false},"expiresAt":{"type":"datetime","configurable":false,"required":false},"lifespan":{"type":"biginteger","configurable":false,"required":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"transfer-token","connection":"default","uid":"admin::transfer-token","plugin":"admin","globalId":"AdminTransferToken"},"admin::transfer-token-permission":{"collectionName":"strapi_transfer_token_permissions","info":{"name":"Transfer Token Permission","description":"","singularName":"transfer-token-permission","pluralName":"transfer-token-permissions","displayName":"Transfer Token Permission"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","minLength":1,"configurable":false,"required":true},"token":{"configurable":false,"type":"relation","relation":"manyToOne","inversedBy":"permissions","target":"admin::transfer-token"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"strapi_transfer_token_permissions","info":{"name":"Transfer Token Permission","description":"","singularName":"transfer-token-permission","pluralName":"transfer-token-permissions","displayName":"Transfer Token Permission"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","minLength":1,"configurable":false,"required":true},"token":{"configurable":false,"type":"relation","relation":"manyToOne","inversedBy":"permissions","target":"admin::transfer-token"}},"kind":"collectionType"},"modelType":"contentType","modelName":"transfer-token-permission","connection":"default","uid":"admin::transfer-token-permission","plugin":"admin","globalId":"AdminTransferTokenPermission"},"plugin::upload.file":{"collectionName":"files","info":{"singularName":"file","pluralName":"files","displayName":"File","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","configurable":false,"required":true},"alternativeText":{"type":"string","configurable":false},"caption":{"type":"string","configurable":false},"width":{"type":"integer","configurable":false},"height":{"type":"integer","configurable":false},"formats":{"type":"json","configurable":false},"hash":{"type":"string","configurable":false,"required":true},"ext":{"type":"string","configurable":false},"mime":{"type":"string","configurable":false,"required":true},"size":{"type":"decimal","configurable":false,"required":true},"url":{"type":"string","configurable":false,"required":true},"previewUrl":{"type":"string","configurable":false},"provider":{"type":"string","configurable":false,"required":true},"provider_metadata":{"type":"json","configurable":false},"related":{"type":"relation","relation":"morphToMany","configurable":false},"folder":{"type":"relation","relation":"manyToOne","target":"plugin::upload.folder","inversedBy":"files","private":true},"folderPath":{"type":"string","min":1,"required":true,"private":true,"searchable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"indexes":[{"name":"upload_files_folder_path_index","columns":["folder_path"],"type":null},{"name":"upload_files_created_at_index","columns":["created_at"],"type":null},{"name":"upload_files_updated_at_index","columns":["updated_at"],"type":null},{"name":"upload_files_name_index","columns":["name"],"type":null},{"name":"upload_files_size_index","columns":["size"],"type":null},{"name":"upload_files_ext_index","columns":["ext"],"type":null}],"kind":"collectionType","__schema__":{"collectionName":"files","info":{"singularName":"file","pluralName":"files","displayName":"File","description":""},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","configurable":false,"required":true},"alternativeText":{"type":"string","configurable":false},"caption":{"type":"string","configurable":false},"width":{"type":"integer","configurable":false},"height":{"type":"integer","configurable":false},"formats":{"type":"json","configurable":false},"hash":{"type":"string","configurable":false,"required":true},"ext":{"type":"string","configurable":false},"mime":{"type":"string","configurable":false,"required":true},"size":{"type":"decimal","configurable":false,"required":true},"url":{"type":"string","configurable":false,"required":true},"previewUrl":{"type":"string","configurable":false},"provider":{"type":"string","configurable":false,"required":true},"provider_metadata":{"type":"json","configurable":false},"related":{"type":"relation","relation":"morphToMany","configurable":false},"folder":{"type":"relation","relation":"manyToOne","target":"plugin::upload.folder","inversedBy":"files","private":true},"folderPath":{"type":"string","min":1,"required":true,"private":true,"searchable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"file","connection":"default","uid":"plugin::upload.file","plugin":"upload","globalId":"UploadFile"},"plugin::upload.folder":{"collectionName":"upload_folders","info":{"singularName":"folder","pluralName":"folders","displayName":"Folder"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","min":1,"required":true},"pathId":{"type":"integer","unique":true,"required":true},"parent":{"type":"relation","relation":"manyToOne","target":"plugin::upload.folder","inversedBy":"children"},"children":{"type":"relation","relation":"oneToMany","target":"plugin::upload.folder","mappedBy":"parent"},"files":{"type":"relation","relation":"oneToMany","target":"plugin::upload.file","mappedBy":"folder"},"path":{"type":"string","min":1,"required":true},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"indexes":[{"name":"upload_folders_path_id_index","columns":["path_id"],"type":"unique"},{"name":"upload_folders_path_index","columns":["path"],"type":"unique"}],"kind":"collectionType","__schema__":{"collectionName":"upload_folders","info":{"singularName":"folder","pluralName":"folders","displayName":"Folder"},"options":{},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","min":1,"required":true},"pathId":{"type":"integer","unique":true,"required":true},"parent":{"type":"relation","relation":"manyToOne","target":"plugin::upload.folder","inversedBy":"children"},"children":{"type":"relation","relation":"oneToMany","target":"plugin::upload.folder","mappedBy":"parent"},"files":{"type":"relation","relation":"oneToMany","target":"plugin::upload.file","mappedBy":"folder"},"path":{"type":"string","min":1,"required":true}},"kind":"collectionType"},"modelType":"contentType","modelName":"folder","connection":"default","uid":"plugin::upload.folder","plugin":"upload","globalId":"UploadFolder"},"plugin::i18n.locale":{"info":{"singularName":"locale","pluralName":"locales","collectionName":"locales","displayName":"Locale","description":""},"options":{"draftAndPublish":false},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","min":1,"max":50,"configurable":false},"code":{"type":"string","unique":true,"configurable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"info":{"singularName":"locale","pluralName":"locales","collectionName":"locales","displayName":"Locale","description":""},"options":{"draftAndPublish":false},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","min":1,"max":50,"configurable":false},"code":{"type":"string","unique":true,"configurable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"locale","connection":"default","uid":"plugin::i18n.locale","plugin":"i18n","collectionName":"i18n_locale","globalId":"I18NLocale"},"plugin::users-permissions.permission":{"collectionName":"up_permissions","info":{"name":"permission","description":"","singularName":"permission","pluralName":"permissions","displayName":"Permission"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","required":true,"configurable":false},"role":{"type":"relation","relation":"manyToOne","target":"plugin::users-permissions.role","inversedBy":"permissions","configurable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"up_permissions","info":{"name":"permission","description":"","singularName":"permission","pluralName":"permissions","displayName":"Permission"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"action":{"type":"string","required":true,"configurable":false},"role":{"type":"relation","relation":"manyToOne","target":"plugin::users-permissions.role","inversedBy":"permissions","configurable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"permission","connection":"default","uid":"plugin::users-permissions.permission","plugin":"users-permissions","globalId":"UsersPermissionsPermission"},"plugin::users-permissions.role":{"collectionName":"up_roles","info":{"name":"role","description":"","singularName":"role","pluralName":"roles","displayName":"Role"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":3,"required":true,"configurable":false},"description":{"type":"string","configurable":false},"type":{"type":"string","unique":true,"configurable":false},"permissions":{"type":"relation","relation":"oneToMany","target":"plugin::users-permissions.permission","mappedBy":"role","configurable":false},"users":{"type":"relation","relation":"oneToMany","target":"plugin::users-permissions.user","mappedBy":"role","configurable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"kind":"collectionType","__schema__":{"collectionName":"up_roles","info":{"name":"role","description":"","singularName":"role","pluralName":"roles","displayName":"Role"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"name":{"type":"string","minLength":3,"required":true,"configurable":false},"description":{"type":"string","configurable":false},"type":{"type":"string","unique":true,"configurable":false},"permissions":{"type":"relation","relation":"oneToMany","target":"plugin::users-permissions.permission","mappedBy":"role","configurable":false},"users":{"type":"relation","relation":"oneToMany","target":"plugin::users-permissions.user","mappedBy":"role","configurable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"role","connection":"default","uid":"plugin::users-permissions.role","plugin":"users-permissions","globalId":"UsersPermissionsRole"},"plugin::users-permissions.user":{"collectionName":"up_users","info":{"name":"user","description":"","singularName":"user","pluralName":"users","displayName":"User"},"options":{"draftAndPublish":false,"timestamps":true},"attributes":{"username":{"type":"string","minLength":3,"unique":true,"configurable":false,"required":true},"email":{"type":"email","minLength":6,"configurable":false,"required":true},"provider":{"type":"string","configurable":false},"password":{"type":"password","minLength":6,"configurable":false,"private":true,"searchable":false},"resetPasswordToken":{"type":"string","configurable":false,"private":true,"searchable":false},"confirmationToken":{"type":"string","configurable":false,"private":true,"searchable":false},"confirmed":{"type":"boolean","default":false,"configurable":false},"blocked":{"type":"boolean","default":false,"configurable":false},"role":{"type":"relation","relation":"manyToOne","target":"plugin::users-permissions.role","inversedBy":"users","configurable":false},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"config":{"attributes":{"resetPasswordToken":{"hidden":true},"confirmationToken":{"hidden":true},"provider":{"hidden":true}}},"kind":"collectionType","__schema__":{"collectionName":"up_users","info":{"name":"user","description":"","singularName":"user","pluralName":"users","displayName":"User"},"options":{"draftAndPublish":false,"timestamps":true},"attributes":{"username":{"type":"string","minLength":3,"unique":true,"configurable":false,"required":true},"email":{"type":"email","minLength":6,"configurable":false,"required":true},"provider":{"type":"string","configurable":false},"password":{"type":"password","minLength":6,"configurable":false,"private":true,"searchable":false},"resetPasswordToken":{"type":"string","configurable":false,"private":true,"searchable":false},"confirmationToken":{"type":"string","configurable":false,"private":true,"searchable":false},"confirmed":{"type":"boolean","default":false,"configurable":false},"blocked":{"type":"boolean","default":false,"configurable":false},"role":{"type":"relation","relation":"manyToOne","target":"plugin::users-permissions.role","inversedBy":"users","configurable":false}},"kind":"collectionType"},"modelType":"contentType","modelName":"user","connection":"default","uid":"plugin::users-permissions.user","plugin":"users-permissions","globalId":"UsersPermissionsUser"},"plugin::email-designer.email-template":{"kind":"collectionType","collectionName":"email_templates","info":{"singularName":"email-template","pluralName":"email-templates","displayName":"Email-template","name":"email-template"},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"options":{"draftAndPublish":false,"timestamps":true,"increments":true,"comment":""},"attributes":{"templateReferenceId":{"type":"integer","required":false,"unique":true},"design":{"type":"json"},"name":{"type":"string"},"subject":{"type":"string"},"bodyHtml":{"type":"text"},"bodyText":{"type":"text"},"enabled":{"type":"boolean","default":true},"tags":{"type":"json"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"__schema__":{"collectionName":"email_templates","info":{"singularName":"email-template","pluralName":"email-templates","displayName":"Email-template","name":"email-template"},"options":{"draftAndPublish":false,"timestamps":true,"increments":true,"comment":""},"pluginOptions":{"content-manager":{"visible":false},"content-type-builder":{"visible":false}},"attributes":{"templateReferenceId":{"type":"integer","required":false,"unique":true},"design":{"type":"json"},"name":{"type":"string"},"subject":{"type":"string"},"bodyHtml":{"type":"text"},"bodyText":{"type":"text"},"enabled":{"type":"boolean","default":true},"tags":{"type":"json"}},"kind":"collectionType"},"modelType":"contentType","modelName":"email-template","connection":"default","uid":"plugin::email-designer.email-template","plugin":"email-designer","globalId":"EmailDesignerEmailTemplate"},"api::configuration.configuration":{"kind":"singleType","collectionName":"configurations","info":{"singularName":"configuration","pluralName":"configurations","displayName":"Configuration","description":""},"options":{"draftAndPublish":false},"pluginOptions":{},"attributes":{"configs":{"type":"component","repeatable":true,"component":"functions.config"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"__schema__":{"collectionName":"configurations","info":{"singularName":"configuration","pluralName":"configurations","displayName":"Configuration","description":""},"options":{"draftAndPublish":false},"pluginOptions":{},"attributes":{"configs":{"type":"component","repeatable":true,"component":"functions.config"}},"kind":"singleType"},"modelType":"contentType","modelName":"configuration","connection":"default","uid":"api::configuration.configuration","apiName":"configuration","globalId":"Configuration","actions":{},"lifecycles":{}},"api::currency.currency":{"kind":"collectionType","collectionName":"currencies","info":{"singularName":"currency","pluralName":"currencies","displayName":"Currency","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"type":"string","pluginOptions":{"i18n":{"localized":true}}},"unicode":{"type":"string","required":true,"unique":false,"pluginOptions":{"i18n":{"localized":false}}},"is_default":{"type":"boolean","pluginOptions":{"i18n":{"localized":true}}},"tiers":{"type":"relation","relation":"oneToMany","target":"api::tier.tier","mappedBy":"currency"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"localizations":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"relation","relation":"oneToMany","target":"api::currency.currency"},"locale":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"string"}},"__schema__":{"collectionName":"currencies","info":{"singularName":"currency","pluralName":"currencies","displayName":"Currency","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"type":"string","pluginOptions":{"i18n":{"localized":true}}},"unicode":{"type":"string","required":true,"unique":false,"pluginOptions":{"i18n":{"localized":false}}},"is_default":{"type":"boolean","pluginOptions":{"i18n":{"localized":true}}},"tiers":{"type":"relation","relation":"oneToMany","target":"api::tier.tier","mappedBy":"currency"}},"kind":"collectionType"},"modelType":"contentType","modelName":"currency","connection":"default","uid":"api::currency.currency","apiName":"currency","globalId":"Currency","actions":{},"lifecycles":{}},"api::flyout.flyout":{"kind":"collectionType","collectionName":"flyouts","info":{"singularName":"flyout","pluralName":"flyouts","displayName":"Flyout"},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"variant":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["simple"],"default":"simple","required":true},"page_blocks":{"pluginOptions":{"i18n":{"localized":true}},"type":"dynamiczone","components":["elements.buttons-array","elements.button","page-blocks.hero-section-block"]},"title":{"pluginOptions":{"i18n":{"localized":false}},"type":"string","required":true},"uid":{"pluginOptions":{"i18n":{"localized":true}},"type":"uid","targetField":"title"},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"localizations":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"relation","relation":"oneToMany","target":"api::flyout.flyout"},"locale":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"string"}},"__schema__":{"collectionName":"flyouts","info":{"singularName":"flyout","pluralName":"flyouts","displayName":"Flyout"},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"variant":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["simple"],"default":"simple","required":true},"page_blocks":{"pluginOptions":{"i18n":{"localized":true}},"type":"dynamiczone","components":["elements.buttons-array","elements.button","page-blocks.hero-section-block"]},"title":{"pluginOptions":{"i18n":{"localized":false}},"type":"string","required":true},"uid":{"pluginOptions":{"i18n":{"localized":true}},"type":"uid","targetField":"title"},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"}},"kind":"collectionType"},"modelType":"contentType","modelName":"flyout","connection":"default","uid":"api::flyout.flyout","apiName":"flyout","globalId":"Flyout","actions":{},"lifecycles":{}},"api::footer.footer":{"kind":"collectionType","collectionName":"footers","info":{"singularName":"footer","pluralName":"footers","displayName":"Footer","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"pluginOptions":{"i18n":{"localized":false}},"type":"string","required":true},"uid":{"pluginOptions":{"i18n":{"localized":true}},"type":"uid","targetField":"title","required":true},"layouts":{"type":"relation","relation":"oneToMany","target":"api::layout.layout","mappedBy":"footer"},"page_blocks":{"pluginOptions":{"i18n":{"localized":true}},"type":"dynamiczone","components":["page-blocks.footer-block"]},"variant":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["boxed"],"default":"boxed","required":true},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"localizations":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"relation","relation":"oneToMany","target":"api::footer.footer"},"locale":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"string"}},"__schema__":{"collectionName":"footers","info":{"singularName":"footer","pluralName":"footers","displayName":"Footer","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"pluginOptions":{"i18n":{"localized":false}},"type":"string","required":true},"uid":{"pluginOptions":{"i18n":{"localized":true}},"type":"uid","targetField":"title","required":true},"layouts":{"type":"relation","relation":"oneToMany","target":"api::layout.layout","mappedBy":"footer"},"page_blocks":{"pluginOptions":{"i18n":{"localized":true}},"type":"dynamiczone","components":["page-blocks.footer-block"]},"variant":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["boxed"],"default":"boxed","required":true},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"}},"kind":"collectionType"},"modelType":"contentType","modelName":"footer","connection":"default","uid":"api::footer.footer","apiName":"footer","globalId":"Footer","actions":{},"lifecycles":{}},"api::form.form":{"kind":"collectionType","collectionName":"forms","info":{"singularName":"form","pluralName":"forms","displayName":"Form","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"inputs":{"type":"component","repeatable":true,"component":"elements.input","pluginOptions":{"i18n":{"localized":true}}},"class_name":{"type":"text","pluginOptions":{"i18n":{"localized":true}}},"additional_attributes":{"type":"json","pluginOptions":{"i18n":{"localized":true}}},"variant":{"type":"enumeration","enum":["simple"],"default":"simple","required":true,"pluginOptions":{"i18n":{"localized":true}}},"button":{"type":"component","repeatable":false,"component":"elements.button","pluginOptions":{"i18n":{"localized":true}}},"form_requests":{"type":"relation","relation":"oneToMany","target":"api::form-request.form-request","mappedBy":"form"},"uid":{"type":"uid","required":true,"targetField":"title"},"side_effects":{"type":"component","repeatable":true,"component":"functions.form-side-effect","pluginOptions":{"i18n":{"localized":true}}},"title":{"type":"string","required":true,"pluginOptions":{"i18n":{"localized":true}}},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"localizations":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"relation","relation":"oneToMany","target":"api::form.form"},"locale":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"string"}},"__schema__":{"collectionName":"forms","info":{"singularName":"form","pluralName":"forms","displayName":"Form","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"inputs":{"type":"component","repeatable":true,"component":"elements.input","pluginOptions":{"i18n":{"localized":true}}},"class_name":{"type":"text","pluginOptions":{"i18n":{"localized":true}}},"additional_attributes":{"type":"json","pluginOptions":{"i18n":{"localized":true}}},"variant":{"type":"enumeration","enum":["simple"],"default":"simple","required":true,"pluginOptions":{"i18n":{"localized":true}}},"button":{"type":"component","repeatable":false,"component":"elements.button","pluginOptions":{"i18n":{"localized":true}}},"form_requests":{"type":"relation","relation":"oneToMany","target":"api::form-request.form-request","mappedBy":"form"},"uid":{"type":"uid","required":true,"targetField":"title"},"side_effects":{"type":"component","repeatable":true,"component":"functions.form-side-effect","pluginOptions":{"i18n":{"localized":true}}},"title":{"type":"string","required":true,"pluginOptions":{"i18n":{"localized":true}}}},"kind":"collectionType"},"modelType":"contentType","modelName":"form","connection":"default","uid":"api::form.form","apiName":"form","globalId":"Form","actions":{},"lifecycles":{}},"api::form-request.form-request":{"kind":"collectionType","collectionName":"form_requests","info":{"singularName":"form-request","pluralName":"form-requests","displayName":"Form Request","description":""},"options":{"draftAndPublish":false},"pluginOptions":{},"attributes":{"inputs":{"type":"component","repeatable":true,"component":"elements.request-input"},"files":{"type":"media","multiple":true,"required":false,"allowedTypes":["images","files","videos","audios"]},"form":{"type":"relation","relation":"manyToOne","target":"api::form.form","inversedBy":"form_requests"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"__schema__":{"collectionName":"form_requests","info":{"singularName":"form-request","pluralName":"form-requests","displayName":"Form Request","description":""},"options":{"draftAndPublish":false},"pluginOptions":{},"attributes":{"inputs":{"type":"component","repeatable":true,"component":"elements.request-input"},"files":{"type":"media","multiple":true,"required":false,"allowedTypes":["images","files","videos","audios"]},"form":{"type":"relation","relation":"manyToOne","target":"api::form.form","inversedBy":"form_requests"}},"kind":"collectionType"},"modelType":"contentType","modelName":"form-request","connection":"default","uid":"api::form-request.form-request","apiName":"form-request","globalId":"FormRequest","actions":{},"lifecycles":{}},"api::layout.layout":{"kind":"collectionType","collectionName":"layouts","info":{"singularName":"layout","pluralName":"layouts","displayName":"Layout","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"pluginOptions":{"i18n":{"localized":false}},"type":"string","required":true},"uid":{"pluginOptions":{"i18n":{"localized":true}},"type":"uid","targetField":"title"},"sidebar":{"type":"relation","relation":"manyToOne","target":"api::sidebar.sidebar","inversedBy":"layouts"},"variant":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["wide","boxed"],"default":"wide","required":true},"topbar":{"type":"relation","relation":"manyToOne","target":"api::topbar.topbar","inversedBy":"layouts"},"footer":{"type":"relation","relation":"manyToOne","target":"api::footer.footer","inversedBy":"layouts"},"slide_overs":{"type":"relation","relation":"manyToMany","target":"api::slide-over.slide-over","inversedBy":"layouts"},"modals":{"type":"relation","relation":"manyToMany","target":"api::modal.modal","inversedBy":"layouts"},"navbar":{"type":"relation","relation":"manyToOne","target":"api::navbar.navbar","inversedBy":"layouts"},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"},"pages":{"type":"relation","relation":"oneToMany","target":"api::page.page","mappedBy":"layout"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"localizations":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"relation","relation":"oneToMany","target":"api::layout.layout"},"locale":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"string"}},"__schema__":{"collectionName":"layouts","info":{"singularName":"layout","pluralName":"layouts","displayName":"Layout","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"pluginOptions":{"i18n":{"localized":false}},"type":"string","required":true},"uid":{"pluginOptions":{"i18n":{"localized":true}},"type":"uid","targetField":"title"},"sidebar":{"type":"relation","relation":"manyToOne","target":"api::sidebar.sidebar","inversedBy":"layouts"},"variant":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["wide","boxed"],"default":"wide","required":true},"topbar":{"type":"relation","relation":"manyToOne","target":"api::topbar.topbar","inversedBy":"layouts"},"footer":{"type":"relation","relation":"manyToOne","target":"api::footer.footer","inversedBy":"layouts"},"slide_overs":{"type":"relation","relation":"manyToMany","target":"api::slide-over.slide-over","inversedBy":"layouts"},"modals":{"type":"relation","relation":"manyToMany","target":"api::modal.modal","inversedBy":"layouts"},"navbar":{"type":"relation","relation":"manyToOne","target":"api::navbar.navbar","inversedBy":"layouts"},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"},"pages":{"type":"relation","relation":"oneToMany","target":"api::page.page","mappedBy":"layout"}},"kind":"collectionType"},"modelType":"contentType","modelName":"layout","connection":"default","uid":"api::layout.layout","apiName":"layout","globalId":"Layout","actions":{},"lifecycles":{}},"api::loader.loader":{"kind":"singleType","collectionName":"loaders","info":{"singularName":"loader","pluralName":"loaders","displayName":"Loader","description":""},"options":{"draftAndPublish":true},"pluginOptions":{},"attributes":{"variant":{"pluginOptions":{},"type":"enumeration","enum":["simple"],"default":"simple","required":true},"media":{"type":"media","multiple":true,"required":false,"allowedTypes":["images","files","videos","audios"],"pluginOptions":{}},"additional_media":{"type":"media","multiple":true,"required":false,"allowedTypes":["images","files","videos","audios"],"pluginOptions":{}},"class_name":{"pluginOptions":{},"type":"string"},"anchor":{"pluginOptions":{},"type":"string"},"title":{"pluginOptions":{},"type":"richtext"},"subtitle":{"pluginOptions":{},"type":"richtext"},"description":{"pluginOptions":{},"type":"richtext"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"__schema__":{"collectionName":"loaders","info":{"singularName":"loader","pluralName":"loaders","displayName":"Loader","description":""},"options":{"draftAndPublish":true},"pluginOptions":{},"attributes":{"variant":{"pluginOptions":{},"type":"enumeration","enum":["simple"],"default":"simple","required":true},"media":{"type":"media","multiple":true,"required":false,"allowedTypes":["images","files","videos","audios"],"pluginOptions":{}},"additional_media":{"type":"media","multiple":true,"required":false,"allowedTypes":["images","files","videos","audios"],"pluginOptions":{}},"class_name":{"pluginOptions":{},"type":"string"},"anchor":{"pluginOptions":{},"type":"string"},"title":{"pluginOptions":{},"type":"richtext"},"subtitle":{"pluginOptions":{},"type":"richtext"},"description":{"pluginOptions":{},"type":"richtext"}},"kind":"singleType"},"modelType":"contentType","modelName":"loader","connection":"default","uid":"api::loader.loader","apiName":"loader","globalId":"Loader","actions":{},"lifecycles":{}},"api::metatag.metatag":{"kind":"collectionType","collectionName":"metatags","info":{"singularName":"metatag","pluralName":"metatags","displayName":"Metatag","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"pluginOptions":{"i18n":{"localized":true}},"type":"text","required":true},"description":{"pluginOptions":{"i18n":{"localized":true}},"type":"text","required":true},"script":{"pluginOptions":{"i18n":{"localized":false}},"type":"text"},"gtm_key":{"pluginOptions":{"i18n":{"localized":false}},"type":"string"},"favicon":{"type":"media","multiple":false,"required":false,"allowedTypes":["images"],"pluginOptions":{"i18n":{"localized":true}}},"pages":{"type":"relation","relation":"oneToMany","target":"api::page.page","mappedBy":"metatag"},"is_default":{"pluginOptions":{"i18n":{"localized":true}},"type":"boolean"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"localizations":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"relation","relation":"oneToMany","target":"api::metatag.metatag"},"locale":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"string"}},"__schema__":{"collectionName":"metatags","info":{"singularName":"metatag","pluralName":"metatags","displayName":"Metatag","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"pluginOptions":{"i18n":{"localized":true}},"type":"text","required":true},"description":{"pluginOptions":{"i18n":{"localized":true}},"type":"text","required":true},"script":{"pluginOptions":{"i18n":{"localized":false}},"type":"text"},"gtm_key":{"pluginOptions":{"i18n":{"localized":false}},"type":"string"},"favicon":{"type":"media","multiple":false,"required":false,"allowedTypes":["images"],"pluginOptions":{"i18n":{"localized":true}}},"pages":{"type":"relation","relation":"oneToMany","target":"api::page.page","mappedBy":"metatag"},"is_default":{"pluginOptions":{"i18n":{"localized":true}},"type":"boolean"}},"kind":"collectionType"},"modelType":"contentType","modelName":"metatag","connection":"default","uid":"api::metatag.metatag","apiName":"metatag","globalId":"Metatag","actions":{},"lifecycles":{}},"api::modal.modal":{"kind":"collectionType","collectionName":"modals","info":{"singularName":"modal","pluralName":"modals","displayName":"Modal","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"uid":{"type":"uid","targetField":"title","required":true},"page_blocks":{"type":"dynamiczone","components":["page-blocks.hero-section-block","page-blocks.header-section-block","page-blocks.faqs-block","page-blocks.slider-block","page-blocks.alert-block"],"pluginOptions":{"i18n":{"localized":true}}},"dialog_panel_class_name":{"type":"string","pluginOptions":{"i18n":{"localized":true}}},"variant":{"type":"enumeration","enum":["simple"],"default":"simple","required":true,"pluginOptions":{"i18n":{"localized":true}}},"title":{"type":"string","required":true,"pluginOptions":{"i18n":{"localized":true}}},"layouts":{"type":"relation","relation":"manyToMany","target":"api::layout.layout","mappedBy":"modals"},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"localizations":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"relation","relation":"oneToMany","target":"api::modal.modal"},"locale":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"string"}},"__schema__":{"collectionName":"modals","info":{"singularName":"modal","pluralName":"modals","displayName":"Modal","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"uid":{"type":"uid","targetField":"title","required":true},"page_blocks":{"type":"dynamiczone","components":["page-blocks.hero-section-block","page-blocks.header-section-block","page-blocks.faqs-block","page-blocks.slider-block","page-blocks.alert-block"],"pluginOptions":{"i18n":{"localized":true}}},"dialog_panel_class_name":{"type":"string","pluginOptions":{"i18n":{"localized":true}}},"variant":{"type":"enumeration","enum":["simple"],"default":"simple","required":true,"pluginOptions":{"i18n":{"localized":true}}},"title":{"type":"string","required":true,"pluginOptions":{"i18n":{"localized":true}}},"layouts":{"type":"relation","relation":"manyToMany","target":"api::layout.layout","mappedBy":"modals"},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"}},"kind":"collectionType"},"modelType":"contentType","modelName":"modal","connection":"default","uid":"api::modal.modal","apiName":"modal","globalId":"Modal","actions":{},"lifecycles":{}},"api::navbar.navbar":{"kind":"collectionType","collectionName":"navbars","info":{"singularName":"navbar","pluralName":"navbars","displayName":"Navbar","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"pluginOptions":{"i18n":{"localized":false}},"type":"string","required":true},"uid":{"pluginOptions":{"i18n":{"localized":true}},"type":"uid","targetField":"title","required":true},"page_blocks":{"pluginOptions":{"i18n":{"localized":true}},"type":"dynamiczone","components":["page-blocks.navbar-block"]},"variant":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["boxed"],"default":"boxed","required":true},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"},"layouts":{"type":"relation","relation":"oneToMany","target":"api::layout.layout","mappedBy":"navbar"},"position":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["fixed"],"default":"fixed","required":true},"side":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["top"],"default":"top","required":true},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"localizations":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"relation","relation":"oneToMany","target":"api::navbar.navbar"},"locale":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"string"}},"__schema__":{"collectionName":"navbars","info":{"singularName":"navbar","pluralName":"navbars","displayName":"Navbar","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"pluginOptions":{"i18n":{"localized":false}},"type":"string","required":true},"uid":{"pluginOptions":{"i18n":{"localized":true}},"type":"uid","targetField":"title","required":true},"page_blocks":{"pluginOptions":{"i18n":{"localized":true}},"type":"dynamiczone","components":["page-blocks.navbar-block"]},"variant":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["boxed"],"default":"boxed","required":true},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"},"layouts":{"type":"relation","relation":"oneToMany","target":"api::layout.layout","mappedBy":"navbar"},"position":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["fixed"],"default":"fixed","required":true},"side":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["top"],"default":"top","required":true}},"kind":"collectionType"},"modelType":"contentType","modelName":"navbar","connection":"default","uid":"api::navbar.navbar","apiName":"navbar","globalId":"Navbar","actions":{},"lifecycles":{}},"api::page.page":{"kind":"collectionType","collectionName":"pages","info":{"singularName":"page","pluralName":"pages","displayName":"Page","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"pluginOptions":{"i18n":{"localized":true}},"type":"string","required":true},"url":{"pluginOptions":{"i18n":{"localized":false}},"type":"string","required":true,"unique":false},"layout":{"type":"relation","relation":"manyToOne","target":"api::layout.layout","inversedBy":"pages"},"page_blocks":{"pluginOptions":{"i18n":{"localized":true}},"type":"dynamiczone","components":["page-blocks.hero-section-block","page-blocks.incentives-block","page-blocks.header-section-block","page-blocks.contact-section-block","page-blocks.cta-section-block","page-blocks.faqs-block","page-blocks.features-section-block","page-blocks.logotypes-cloud-block","page-blocks.not-found-block","page-blocks.pricing-block","page-blocks.reviews-table-block","page-blocks.slider-block","elements.buttons-array","elements.button","page-blocks.reviews-list-block","page-blocks.alert-block"]},"metatag":{"type":"relation","relation":"manyToOne","target":"api::metatag.metatag","inversedBy":"pages"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"localizations":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"relation","relation":"oneToMany","target":"api::page.page"},"locale":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"string"}},"__schema__":{"collectionName":"pages","info":{"singularName":"page","pluralName":"pages","displayName":"Page","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"pluginOptions":{"i18n":{"localized":true}},"type":"string","required":true},"url":{"pluginOptions":{"i18n":{"localized":false}},"type":"string","required":true,"unique":false},"layout":{"type":"relation","relation":"manyToOne","target":"api::layout.layout","inversedBy":"pages"},"page_blocks":{"pluginOptions":{"i18n":{"localized":true}},"type":"dynamiczone","components":["page-blocks.hero-section-block","page-blocks.incentives-block","page-blocks.header-section-block","page-blocks.contact-section-block","page-blocks.cta-section-block","page-blocks.faqs-block","page-blocks.features-section-block","page-blocks.logotypes-cloud-block","page-blocks.not-found-block","page-blocks.pricing-block","page-blocks.reviews-table-block","page-blocks.slider-block","elements.buttons-array","elements.button","page-blocks.reviews-list-block","page-blocks.alert-block"]},"metatag":{"type":"relation","relation":"manyToOne","target":"api::metatag.metatag","inversedBy":"pages"}},"kind":"collectionType"},"modelType":"contentType","modelName":"page","connection":"default","uid":"api::page.page","apiName":"page","globalId":"Page","actions":{},"lifecycles":{}},"api::review.review":{"kind":"collectionType","collectionName":"reviews","info":{"singularName":"review","pluralName":"reviews","displayName":"Review","description":""},"options":{"draftAndPublish":true},"pluginOptions":{},"attributes":{"name":{"type":"richtext"},"title":{"type":"richtext"},"description":{"type":"richtext"},"subtitle":{"type":"richtext"},"rating":{"type":"integer"},"media":{"allowedTypes":["images","files","videos","audios"],"type":"media","multiple":true},"additional_media":{"allowedTypes":["images","files","videos","audios"],"type":"media","multiple":true},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"__schema__":{"collectionName":"reviews","info":{"singularName":"review","pluralName":"reviews","displayName":"Review","description":""},"options":{"draftAndPublish":true},"pluginOptions":{},"attributes":{"name":{"type":"richtext"},"title":{"type":"richtext"},"description":{"type":"richtext"},"subtitle":{"type":"richtext"},"rating":{"type":"integer"},"media":{"allowedTypes":["images","files","videos","audios"],"type":"media","multiple":true},"additional_media":{"allowedTypes":["images","files","videos","audios"],"type":"media","multiple":true}},"kind":"collectionType"},"modelType":"contentType","modelName":"review","connection":"default","uid":"api::review.review","apiName":"review","globalId":"Review","actions":{},"lifecycles":{}},"api::robot.robot":{"kind":"singleType","collectionName":"robots","info":{"singularName":"robot","pluralName":"robots","displayName":"Robot"},"options":{"draftAndPublish":false},"pluginOptions":{},"attributes":{"robots":{"type":"text"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"__schema__":{"collectionName":"robots","info":{"singularName":"robot","pluralName":"robots","displayName":"Robot"},"options":{"draftAndPublish":false},"pluginOptions":{},"attributes":{"robots":{"type":"text"}},"kind":"singleType"},"modelType":"contentType","modelName":"robot","connection":"default","uid":"api::robot.robot","apiName":"robot","globalId":"Robot","actions":{},"lifecycles":{}},"api::sidebar.sidebar":{"kind":"collectionType","collectionName":"sidebars","info":{"singularName":"sidebar","pluralName":"sidebars","displayName":"Sidebar","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"variant":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["one-quarter"],"default":"one-quarter","required":true},"title":{"pluginOptions":{"i18n":{"localized":true}},"type":"string","required":true},"uid":{"pluginOptions":{},"type":"uid","targetField":"title","required":true},"page_blocks":{"pluginOptions":{"i18n":{"localized":true}},"type":"dynamiczone","components":["page-blocks.hero-section-block","page-blocks.header-section-block","elements.button","elements.buttons-array"]},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"},"layouts":{"type":"relation","relation":"oneToMany","target":"api::layout.layout","mappedBy":"sidebar"},"side":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["left","right"],"default":"left","required":true},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"localizations":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"relation","relation":"oneToMany","target":"api::sidebar.sidebar"},"locale":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"string"}},"__schema__":{"collectionName":"sidebars","info":{"singularName":"sidebar","pluralName":"sidebars","displayName":"Sidebar","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"variant":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["one-quarter"],"default":"one-quarter","required":true},"title":{"pluginOptions":{"i18n":{"localized":true}},"type":"string","required":true},"uid":{"pluginOptions":{},"type":"uid","targetField":"title","required":true},"page_blocks":{"pluginOptions":{"i18n":{"localized":true}},"type":"dynamiczone","components":["page-blocks.hero-section-block","page-blocks.header-section-block","elements.button","elements.buttons-array"]},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"},"layouts":{"type":"relation","relation":"oneToMany","target":"api::layout.layout","mappedBy":"sidebar"},"side":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["left","right"],"default":"left","required":true}},"kind":"collectionType"},"modelType":"contentType","modelName":"sidebar","connection":"default","uid":"api::sidebar.sidebar","apiName":"sidebar","globalId":"Sidebar","actions":{},"lifecycles":{}},"api::slide-over.slide-over":{"kind":"collectionType","collectionName":"slide_overs","info":{"singularName":"slide-over","pluralName":"slide-overs","displayName":"Slide Over","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"variant":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["right-side-half-width"],"default":"right-side-half-width","required":true},"title":{"pluginOptions":{"i18n":{"localized":true}},"type":"string","required":true},"uid":{"pluginOptions":{},"type":"uid","targetField":"title","required":true},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"},"page_blocks":{"pluginOptions":{"i18n":{"localized":true}},"type":"dynamiczone","components":["page-blocks.faqs-block"]},"layouts":{"type":"relation","relation":"manyToMany","target":"api::layout.layout","mappedBy":"slide_overs"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"localizations":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"relation","relation":"oneToMany","target":"api::slide-over.slide-over"},"locale":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"string"}},"__schema__":{"collectionName":"slide_overs","info":{"singularName":"slide-over","pluralName":"slide-overs","displayName":"Slide Over","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"variant":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["right-side-half-width"],"default":"right-side-half-width","required":true},"title":{"pluginOptions":{"i18n":{"localized":true}},"type":"string","required":true},"uid":{"pluginOptions":{},"type":"uid","targetField":"title","required":true},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"},"page_blocks":{"pluginOptions":{"i18n":{"localized":true}},"type":"dynamiczone","components":["page-blocks.faqs-block"]},"layouts":{"type":"relation","relation":"manyToMany","target":"api::layout.layout","mappedBy":"slide_overs"}},"kind":"collectionType"},"modelType":"contentType","modelName":"slide-over","connection":"default","uid":"api::slide-over.slide-over","apiName":"slide-over","globalId":"SlideOver","actions":{},"lifecycles":{}},"api::slider.slider":{"kind":"collectionType","collectionName":"sliders","info":{"singularName":"slider","pluralName":"sliders","displayName":"Slider","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"variant":{"type":"enumeration","enum":["fade-with-previews"],"default":"fade-with-previews","required":true,"pluginOptions":{"i18n":{"localized":true}}},"slides":{"type":"component","repeatable":true,"component":"elements.slide","pluginOptions":{"i18n":{"localized":true}}},"show_backdrop":{"type":"boolean","pluginOptions":{"i18n":{"localized":true}}},"show_full_screen":{"type":"boolean","pluginOptions":{"i18n":{"localized":true}}},"show_previews":{"type":"boolean","pluginOptions":{"i18n":{"localized":true}}},"class_name":{"type":"string","pluginOptions":{"i18n":{"localized":true}}},"aspect_ratio_class_name":{"type":"string","required":true,"default":"aspect-h-1 aspect-w-1 xl:aspect-w-15 xl:aspect-h-10","pluginOptions":{"i18n":{"localized":true}}},"title":{"type":"string","required":true,"pluginOptions":{"i18n":{"localized":true}}},"uid":{"type":"uid","targetField":"title"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"localizations":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"relation","relation":"oneToMany","target":"api::slider.slider"},"locale":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"string"}},"__schema__":{"collectionName":"sliders","info":{"singularName":"slider","pluralName":"sliders","displayName":"Slider","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"variant":{"type":"enumeration","enum":["fade-with-previews"],"default":"fade-with-previews","required":true,"pluginOptions":{"i18n":{"localized":true}}},"slides":{"type":"component","repeatable":true,"component":"elements.slide","pluginOptions":{"i18n":{"localized":true}}},"show_backdrop":{"type":"boolean","pluginOptions":{"i18n":{"localized":true}}},"show_full_screen":{"type":"boolean","pluginOptions":{"i18n":{"localized":true}}},"show_previews":{"type":"boolean","pluginOptions":{"i18n":{"localized":true}}},"class_name":{"type":"string","pluginOptions":{"i18n":{"localized":true}}},"aspect_ratio_class_name":{"type":"string","required":true,"default":"aspect-h-1 aspect-w-1 xl:aspect-w-15 xl:aspect-h-10","pluginOptions":{"i18n":{"localized":true}}},"title":{"type":"string","required":true,"pluginOptions":{"i18n":{"localized":true}}},"uid":{"type":"uid","targetField":"title"}},"kind":"collectionType"},"modelType":"contentType","modelName":"slider","connection":"default","uid":"api::slider.slider","apiName":"slider","globalId":"Slider","actions":{},"lifecycles":{}},"api::telegram.telegram":{"kind":"collectionType","collectionName":"telegrams","info":{"singularName":"telegram","pluralName":"telegrams","displayName":"Telegram"},"options":{"draftAndPublish":false},"pluginOptions":{},"attributes":{"name":{"type":"string"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"__schema__":{"collectionName":"telegrams","info":{"singularName":"telegram","pluralName":"telegrams","displayName":"Telegram"},"options":{"draftAndPublish":false},"pluginOptions":{},"attributes":{"name":{"type":"string"}},"kind":"collectionType"},"modelType":"contentType","modelName":"telegram","connection":"default","uid":"api::telegram.telegram","apiName":"telegram","globalId":"Telegram","actions":{},"lifecycles":{}},"api::theme.theme":{"kind":"singleType","collectionName":"themes","info":{"singularName":"theme","pluralName":"themes","displayName":"Theme","description":""},"options":{"draftAndPublish":true},"pluginOptions":{},"attributes":{"theme":{"type":"json"},"fonts":{"type":"component","repeatable":true,"component":"elements.font"},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true}},"__schema__":{"collectionName":"themes","info":{"singularName":"theme","pluralName":"themes","displayName":"Theme","description":""},"options":{"draftAndPublish":true},"pluginOptions":{},"attributes":{"theme":{"type":"json"},"fonts":{"type":"component","repeatable":true,"component":"elements.font"}},"kind":"singleType"},"modelType":"contentType","modelName":"theme","connection":"default","uid":"api::theme.theme","apiName":"theme","globalId":"Theme","actions":{},"lifecycles":{}},"api::tier.tier":{"kind":"collectionType","collectionName":"tiers","info":{"singularName":"tier","pluralName":"tiers","displayName":"Tier","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"pluginOptions":{"i18n":{"localized":true}},"type":"richtext"},"description":{"pluginOptions":{"i18n":{"localized":true}},"type":"richtext"},"price":{"pluginOptions":{"i18n":{"localized":true}},"type":"float"},"currency":{"type":"relation","relation":"manyToOne","target":"api::currency.currency","inversedBy":"tiers"},"type":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["one-time","regularly"]},"period":{"pluginOptions":{"i18n":{"localized":true}},"type":"integer"},"features":{"type":"component","repeatable":true,"pluginOptions":{"i18n":{"localized":true}},"component":"elements.feature"},"old_price":{"pluginOptions":{"i18n":{"localized":true}},"type":"float"},"buttons":{"type":"component","repeatable":true,"component":"elements.button","pluginOptions":{"i18n":{"localized":true}}},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"localizations":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"relation","relation":"oneToMany","target":"api::tier.tier"},"locale":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"string"}},"__schema__":{"collectionName":"tiers","info":{"singularName":"tier","pluralName":"tiers","displayName":"Tier","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"pluginOptions":{"i18n":{"localized":true}},"type":"richtext"},"description":{"pluginOptions":{"i18n":{"localized":true}},"type":"richtext"},"price":{"pluginOptions":{"i18n":{"localized":true}},"type":"float"},"currency":{"type":"relation","relation":"manyToOne","target":"api::currency.currency","inversedBy":"tiers"},"type":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["one-time","regularly"]},"period":{"pluginOptions":{"i18n":{"localized":true}},"type":"integer"},"features":{"type":"component","repeatable":true,"pluginOptions":{"i18n":{"localized":true}},"component":"elements.feature"},"old_price":{"pluginOptions":{"i18n":{"localized":true}},"type":"float"},"buttons":{"type":"component","repeatable":true,"component":"elements.button","pluginOptions":{"i18n":{"localized":true}}}},"kind":"collectionType"},"modelType":"contentType","modelName":"tier","connection":"default","uid":"api::tier.tier","apiName":"tier","globalId":"Tier","actions":{},"lifecycles":{}},"api::topbar.topbar":{"kind":"collectionType","collectionName":"topbars","info":{"singularName":"topbar","pluralName":"topbars","displayName":"Topbar","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"pluginOptions":{"i18n":{"localized":false}},"type":"string"},"uid":{"pluginOptions":{"i18n":{"localized":true}},"type":"uid","targetField":"title","required":true},"variant":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["boxed"],"default":"boxed","required":true},"page_blocks":{"pluginOptions":{"i18n":{"localized":true}},"type":"dynamiczone","components":["elements.button"]},"layouts":{"type":"relation","relation":"oneToMany","target":"api::layout.layout","mappedBy":"topbar"},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"},"position":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["fixed"],"default":"fixed","required":true},"side":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["top"],"default":"top","required":true},"createdAt":{"type":"datetime"},"updatedAt":{"type":"datetime"},"publishedAt":{"type":"datetime","configurable":false,"writable":true,"visible":false},"createdBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"updatedBy":{"type":"relation","relation":"oneToOne","target":"admin::user","configurable":false,"writable":false,"visible":false,"useJoinTable":false,"private":true},"localizations":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"relation","relation":"oneToMany","target":"api::topbar.topbar"},"locale":{"writable":true,"private":false,"configurable":false,"visible":false,"type":"string"}},"__schema__":{"collectionName":"topbars","info":{"singularName":"topbar","pluralName":"topbars","displayName":"Topbar","description":""},"options":{"draftAndPublish":true},"pluginOptions":{"i18n":{"localized":true}},"attributes":{"title":{"pluginOptions":{"i18n":{"localized":false}},"type":"string"},"uid":{"pluginOptions":{"i18n":{"localized":true}},"type":"uid","targetField":"title","required":true},"variant":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["boxed"],"default":"boxed","required":true},"page_blocks":{"pluginOptions":{"i18n":{"localized":true}},"type":"dynamiczone","components":["elements.button"]},"layouts":{"type":"relation","relation":"oneToMany","target":"api::layout.layout","mappedBy":"topbar"},"class_name":{"pluginOptions":{"i18n":{"localized":true}},"type":"string"},"position":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["fixed"],"default":"fixed","required":true},"side":{"pluginOptions":{"i18n":{"localized":true}},"type":"enumeration","enum":["top"],"default":"top","required":true}},"kind":"collectionType"},"modelType":"contentType","modelName":"topbar","connection":"default","uid":"api::topbar.topbar","apiName":"topbar","globalId":"Topbar","actions":{},"lifecycles":{}}}	object	\N	\N
74	core_admin_auth	{"providers":{"autoRegister":false,"defaultRole":null,"ssoLockedRoles":null}}	object	\N	\N
42	plugin_content_manager_configuration_content_types::api::configuration.configuration	{"uid":"api::configuration.configuration","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"configs":{"edit":{"label":"configs","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"configs","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","configs","createdAt","updatedAt"],"edit":[[{"name":"configs","size":12}]]}}	object	\N	\N
49	plugin_content_manager_configuration_content_types::plugin::users-permissions.user	{"uid":"plugin::users-permissions.user","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"username","defaultSortBy":"username","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"username":{"edit":{"label":"username","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"username","searchable":true,"sortable":true}},"email":{"edit":{"label":"email","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"email","searchable":true,"sortable":true}},"provider":{"edit":{"label":"provider","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"provider","searchable":true,"sortable":true}},"password":{"edit":{"label":"password","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"password","searchable":true,"sortable":true}},"resetPasswordToken":{"edit":{"label":"resetPasswordToken","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"resetPasswordToken","searchable":true,"sortable":true}},"confirmationToken":{"edit":{"label":"confirmationToken","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"confirmationToken","searchable":true,"sortable":true}},"confirmed":{"edit":{"label":"confirmed","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"confirmed","searchable":true,"sortable":true}},"blocked":{"edit":{"label":"blocked","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"blocked","searchable":true,"sortable":true}},"role":{"edit":{"label":"role","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"role","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","username","email","confirmed"],"edit":[[{"name":"username","size":6},{"name":"email","size":6}],[{"name":"password","size":6},{"name":"confirmed","size":4}],[{"name":"blocked","size":4},{"name":"role","size":6}]]}}	object	\N	\N
61	plugin_content_manager_configuration_content_types::api::theme.theme	{"uid":"api::theme.theme","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"theme":{"edit":{"label":"theme","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"theme","searchable":false,"sortable":false}},"fonts":{"edit":{"label":"fonts","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"fonts","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","fonts","createdAt","updatedAt"],"edit":[[{"name":"theme","size":12}],[{"name":"fonts","size":12}]]}}	object	\N	\N
44	plugin_content_manager_configuration_content_types::api::flyout.flyout	{"uid":"api::flyout.flyout","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"title","defaultSortBy":"title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"page_blocks":{"edit":{"label":"page_blocks","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"page_blocks","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"uid":{"edit":{"label":"uid","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"uid","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","variant","title","uid"],"edit":[[{"name":"variant","size":6}],[{"name":"page_blocks","size":12}],[{"name":"title","size":6},{"name":"uid","size":6}],[{"name":"class_name","size":6}]]}}	object	\N	\N
51	plugin_content_manager_configuration_content_types::api::loader.loader	{"uid":"api::loader.loader","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"class_name","defaultSortBy":"class_name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"anchor":{"edit":{"label":"anchor","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"anchor","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","variant","media","additional_media"],"edit":[[{"name":"variant","size":6},{"name":"media","size":6}],[{"name":"additional_media","size":6},{"name":"class_name","size":6}],[{"name":"anchor","size":6}],[{"name":"title","size":12}],[{"name":"subtitle","size":12}],[{"name":"description","size":12}]]}}	object	\N	\N
64	plugin_content_manager_configuration_content_types::api::review.review	{"uid":"api::review.review","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}},"rating":{"edit":{"label":"rating","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"rating","searchable":true,"sortable":true}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","rating","media","additional_media"],"edit":[[{"name":"name","size":12}],[{"name":"title","size":12}],[{"name":"description","size":12}],[{"name":"subtitle","size":12}],[{"name":"rating","size":4},{"name":"media","size":6}],[{"name":"additional_media","size":6}]]}}	object	\N	\N
52	plugin_content_manager_configuration_content_types::api::metatag.metatag	{"uid":"api::metatag.metatag","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"gtm_key","defaultSortBy":"gtm_key","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":true,"sortable":true}},"script":{"edit":{"label":"script","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"script","searchable":true,"sortable":true}},"gtm_key":{"edit":{"label":"gtm_key","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"gtm_key","searchable":true,"sortable":true}},"favicon":{"edit":{"label":"favicon","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"favicon","searchable":false,"sortable":false}},"pages":{"edit":{"label":"pages","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"pages","searchable":false,"sortable":false}},"is_default":{"edit":{"label":"is_default","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"is_default","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","title","description","script"],"edit":[[{"name":"title","size":6},{"name":"description","size":6}],[{"name":"script","size":6},{"name":"gtm_key","size":6}],[{"name":"favicon","size":6},{"name":"pages","size":6}],[{"name":"is_default","size":4}]]}}	object	\N	\N
65	plugin_content_manager_configuration_content_types::api::robot.robot	{"uid":"api::robot.robot","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"robots":{"edit":{"label":"robots","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"robots","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","robots","createdAt","updatedAt"],"edit":[[{"name":"robots","size":6}]]}}	object	\N	\N
53	plugin_content_manager_configuration_content_types::api::modal.modal	{"uid":"api::modal.modal","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"dialog_panel_class_name","defaultSortBy":"dialog_panel_class_name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"uid":{"edit":{"label":"uid","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"uid","searchable":true,"sortable":true}},"page_blocks":{"edit":{"label":"page_blocks","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"page_blocks","searchable":false,"sortable":false}},"dialog_panel_class_name":{"edit":{"label":"dialog_panel_class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"dialog_panel_class_name","searchable":true,"sortable":true}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"layouts":{"edit":{"label":"layouts","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"layouts","searchable":false,"sortable":false}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","uid","dialog_panel_class_name","variant"],"edit":[[{"name":"uid","size":6}],[{"name":"page_blocks","size":12}],[{"name":"dialog_panel_class_name","size":6},{"name":"variant","size":6}],[{"name":"title","size":6},{"name":"layouts","size":6}],[{"name":"class_name","size":6}]]}}	object	\N	\N
67	plugin_upload_settings	{"sizeOptimization":true,"responsiveDimensions":true,"autoOrientation":false}	object	\N	\N
68	plugin_upload_view_configuration	{"pageSize":10,"sort":"createdAt:DESC"}	object	\N	\N
41	plugin_content_manager_configuration_content_types::plugin::email-designer.email-template	{"uid":"plugin::email-designer.email-template","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"name","defaultSortBy":"name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"templateReferenceId":{"edit":{"label":"templateReferenceId","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"templateReferenceId","searchable":true,"sortable":true}},"design":{"edit":{"label":"design","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"design","searchable":false,"sortable":false}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"subject":{"edit":{"label":"subject","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subject","searchable":true,"sortable":true}},"bodyHtml":{"edit":{"label":"bodyHtml","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"bodyHtml","searchable":true,"sortable":true}},"bodyText":{"edit":{"label":"bodyText","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"bodyText","searchable":true,"sortable":true}},"enabled":{"edit":{"label":"enabled","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"enabled","searchable":true,"sortable":true}},"tags":{"edit":{"label":"tags","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"tags","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","templateReferenceId","name","subject"],"edit":[[{"name":"templateReferenceId","size":4}],[{"name":"design","size":12}],[{"name":"name","size":6},{"name":"subject","size":6}],[{"name":"bodyHtml","size":6},{"name":"bodyText","size":6}],[{"name":"enabled","size":4}],[{"name":"tags","size":12}]]}}	object	\N	\N
54	plugin_content_manager_configuration_content_types::api::navbar.navbar	{"uid":"api::navbar.navbar","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"title","defaultSortBy":"title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"uid":{"edit":{"label":"uid","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"uid","searchable":true,"sortable":true}},"page_blocks":{"edit":{"label":"page_blocks","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"page_blocks","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"layouts":{"edit":{"label":"layouts","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"layouts","searchable":false,"sortable":false}},"position":{"edit":{"label":"position","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"position","searchable":true,"sortable":true}},"side":{"edit":{"label":"side","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"side","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","title","uid","variant"],"edit":[[{"name":"title","size":6},{"name":"uid","size":6}],[{"name":"page_blocks","size":12}],[{"name":"variant","size":6},{"name":"class_name","size":6}],[{"name":"layouts","size":6},{"name":"position","size":6}],[{"name":"side","size":6}]]}}	object	\N	\N
70	plugin_i18n_default_locale	"en"	string	\N	\N
71	plugin_users-permissions_grant	{"email":{"enabled":true,"icon":"envelope"},"discord":{"enabled":false,"icon":"discord","key":"","secret":"","callback":"api/auth/discord/callback","scope":["identify","email"]},"facebook":{"enabled":false,"icon":"facebook-square","key":"","secret":"","callback":"api/auth/facebook/callback","scope":["email"]},"google":{"enabled":false,"icon":"google","key":"","secret":"","callback":"api/auth/google/callback","scope":["email"]},"github":{"enabled":false,"icon":"github","key":"","secret":"","callback":"api/auth/github/callback","scope":["user","user:email"]},"microsoft":{"enabled":false,"icon":"windows","key":"","secret":"","callback":"api/auth/microsoft/callback","scope":["user.read"]},"twitter":{"enabled":false,"icon":"twitter","key":"","secret":"","callback":"api/auth/twitter/callback"},"instagram":{"enabled":false,"icon":"instagram","key":"","secret":"","callback":"api/auth/instagram/callback","scope":["user_profile"]},"vk":{"enabled":false,"icon":"vk","key":"","secret":"","callback":"api/auth/vk/callback","scope":["email"]},"twitch":{"enabled":false,"icon":"twitch","key":"","secret":"","callback":"api/auth/twitch/callback","scope":["user:read:email"]},"linkedin":{"enabled":false,"icon":"linkedin","key":"","secret":"","callback":"api/auth/linkedin/callback","scope":["r_liteprofile","r_emailaddress"]},"cognito":{"enabled":false,"icon":"aws","key":"","secret":"","subdomain":"my.subdomain.com","callback":"api/auth/cognito/callback","scope":["email","openid","profile"]},"reddit":{"enabled":false,"icon":"reddit","key":"","secret":"","state":true,"callback":"api/auth/reddit/callback","scope":["identity"]},"auth0":{"enabled":false,"icon":"","key":"","secret":"","subdomain":"my-tenant.eu","callback":"api/auth/auth0/callback","scope":["openid","email","profile"]},"cas":{"enabled":false,"icon":"book","key":"","secret":"","callback":"api/auth/cas/callback","scope":["openid email"],"subdomain":"my.subdomain.com/cas"},"patreon":{"enabled":false,"icon":"","key":"","secret":"","callback":"api/auth/patreon/callback","scope":["identity","identity[email]"]}}	object	\N	\N
72	plugin_users-permissions_email	{"reset_password":{"display":"Email.template.reset_password","icon":"sync","options":{"from":{"name":"Administration Panel","email":"no-reply@strapi.io"},"response_email":"","object":"Reset password","message":"<p>We heard that you lost your password. Sorry about that!</p>\\n\\n<p>But don’t worry! You can use the following link to reset your password:</p>\\n<p><%= URL %>?code=<%= TOKEN %></p>\\n\\n<p>Thanks.</p>"}},"email_confirmation":{"display":"Email.template.email_confirmation","icon":"check-square","options":{"from":{"name":"Administration Panel","email":"no-reply@strapi.io"},"response_email":"","object":"Account confirmation","message":"<p>Thank you for registering!</p>\\n\\n<p>You have to confirm your email address. Please click on the link below.</p>\\n\\n<p><%= URL %>?confirmation=<%= CODE %></p>\\n\\n<p>Thanks.</p>"}}}	object	\N	\N
73	plugin_users-permissions_advanced	{"unique_email":true,"allow_register":true,"email_confirmation":false,"email_reset_password":null,"email_confirmation_redirection":null,"default_role":"authenticated"}	object	\N	\N
75	plugin_content_manager_configuration_components::elements.reciever	{"uid":"elements.reciever","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"identifier":{"edit":{"label":"identifier","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"identifier","searchable":true,"sortable":true}},"admin":{"edit":{"label":"admin","description":"","placeholder":"","visible":true,"editable":true,"mainField":"firstname"},"list":{"label":"admin","searchable":true,"sortable":true}},"user":{"edit":{"label":"user","description":"","placeholder":"","visible":true,"editable":true,"mainField":"username"},"list":{"label":"user","searchable":true,"sortable":true}}},"layouts":{"list":["id","identifier","admin","user"],"edit":[[{"name":"identifier","size":6},{"name":"admin","size":6}],[{"name":"user","size":6}]]},"isComponent":true}	object	\N	\N
76	plugin_content_manager_configuration_components::elements.slide	{"uid":"elements.slide","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"buttons":{"edit":{"label":"buttons","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"buttons","searchable":false,"sortable":false}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}}},"layouts":{"list":["id","media","buttons","additional_media"],"edit":[[{"name":"title","size":12}],[{"name":"description","size":12}],[{"name":"subtitle","size":12}],[{"name":"media","size":6}],[{"name":"buttons","size":12}],[{"name":"additional_media","size":6}]]},"isComponent":true}	object	\N	\N
77	plugin_content_manager_configuration_components::elements.date-value	{"uid":"elements.date-value","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"date_value":{"edit":{"label":"date_value","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"date_value","searchable":true,"sortable":true}},"datetime_value":{"edit":{"label":"datetime_value","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"datetime_value","searchable":true,"sortable":true}},"time_value":{"edit":{"label":"time_value","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"time_value","searchable":true,"sortable":true}}},"layouts":{"list":["id","date_value","datetime_value","time_value"],"edit":[[{"name":"date_value","size":4},{"name":"datetime_value","size":6}],[{"name":"time_value","size":4}]]},"isComponent":true}	object	\N	\N
78	plugin_content_manager_configuration_components::page-blocks.alert-block	{"uid":"page-blocks.alert-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"class_name","defaultSortBy":"class_name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}},"buttons":{"edit":{"label":"buttons","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"buttons","searchable":false,"sortable":false}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"anchor":{"edit":{"label":"anchor","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"anchor","searchable":true,"sortable":true}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}}},"layouts":{"list":["id","media","additional_media","buttons"],"edit":[[{"name":"title","size":12}],[{"name":"subtitle","size":12}],[{"name":"description","size":12}],[{"name":"media","size":6},{"name":"additional_media","size":6}],[{"name":"buttons","size":12}],[{"name":"class_name","size":6},{"name":"anchor","size":6}],[{"name":"variant","size":6}]]},"isComponent":true}	object	\N	\N
80	plugin_content_manager_configuration_components::elements.buttons-array	{"uid":"elements.buttons-array","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"class_name","defaultSortBy":"class_name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"buttons":{"edit":{"label":"buttons","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"buttons","searchable":false,"sortable":false}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}},"url":{"edit":{"label":"url","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"url","searchable":true,"sortable":true}},"additional_attributes":{"edit":{"label":"additional_attributes","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_attributes","searchable":false,"sortable":false}}},"layouts":{"list":["id","buttons","class_name","media"],"edit":[[{"name":"title","size":12}],[{"name":"buttons","size":12}],[{"name":"class_name","size":6},{"name":"media","size":6}],[{"name":"variant","size":6}],[{"name":"description","size":12}],[{"name":"additional_media","size":6},{"name":"url","size":6}],[{"name":"additional_attributes","size":12}]]},"isComponent":true}	object	\N	\N
81	plugin_content_manager_configuration_components::elements.logotype	{"uid":"elements.logotype","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"url":{"edit":{"label":"url","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"url","searchable":true,"sortable":true}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}}},"layouts":{"list":["id","url","media","additional_media"],"edit":[[{"name":"title","size":12}],[{"name":"url","size":6},{"name":"media","size":6}],[{"name":"additional_media","size":6}]]},"isComponent":true}	object	\N	\N
79	plugin_upload_metrics	{"weeklySchedule":"7 33 22 * * 5","lastWeeklyUpdate":1698420787102}	object	\N	\N
40	plugin_content_manager_configuration_content_types::admin::permission	{"uid":"admin::permission","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"action","defaultSortBy":"action","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"action":{"edit":{"label":"action","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"action","searchable":true,"sortable":true}},"actionParameters":{"edit":{"label":"actionParameters","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"actionParameters","searchable":false,"sortable":false}},"subject":{"edit":{"label":"subject","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subject","searchable":true,"sortable":true}},"properties":{"edit":{"label":"properties","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"properties","searchable":false,"sortable":false}},"conditions":{"edit":{"label":"conditions","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"conditions","searchable":false,"sortable":false}},"role":{"edit":{"label":"role","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"role","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","action","subject","role"],"edit":[[{"name":"action","size":6},{"name":"subject","size":6}],[{"name":"properties","size":12}],[{"name":"conditions","size":12}],[{"name":"role","size":6}],[{"name":"actionParameters","size":12}]]}}	object	\N	\N
82	plugin_content_manager_configuration_components::functions.config	{"uid":"functions.config","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"provider":{"edit":{"label":"provider","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"provider","searchable":true,"sortable":true}},"config":{"edit":{"label":"config","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"config","searchable":false,"sortable":false}}},"layouts":{"list":["id","provider"],"edit":[[{"name":"provider","size":6}],[{"name":"config","size":12}]]},"isComponent":true}	object	\N	\N
83	plugin_content_manager_configuration_components::functions.form-side-effect	{"uid":"functions.form-side-effect","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"type":{"edit":{"label":"type","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"type","searchable":true,"sortable":true}},"recievers":{"edit":{"label":"recievers","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"recievers","searchable":false,"sortable":false}},"provider":{"edit":{"label":"provider","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"provider","searchable":true,"sortable":true}}},"layouts":{"list":["id","type","recievers","provider"],"edit":[[{"name":"type","size":6}],[{"name":"recievers","size":12}],[{"name":"provider","size":6}]]},"isComponent":true}	object	\N	\N
84	plugin_content_manager_configuration_components::page-blocks.contact-section-block	{"uid":"page-blocks.contact-section-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"anchor":{"edit":{"label":"anchor","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"anchor","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"form":{"edit":{"label":"form","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"form","searchable":true,"sortable":true}},"buttons_arrays":{"edit":{"label":"buttons_arrays","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"buttons_arrays","searchable":false,"sortable":false}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}}},"layouts":{"list":["id","anchor","class_name","variant"],"edit":[[{"name":"title","size":12}],[{"name":"subtitle","size":12}],[{"name":"description","size":12}],[{"name":"anchor","size":6},{"name":"class_name","size":6}],[{"name":"variant","size":6},{"name":"media","size":6}],[{"name":"form","size":6}],[{"name":"buttons_arrays","size":12}],[{"name":"additional_media","size":6}]]},"isComponent":true}	object	\N	\N
85	plugin_content_manager_configuration_components::elements.request-input	{"uid":"elements.request-input","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"key":{"edit":{"label":"key","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"key","searchable":true,"sortable":true}},"value":{"edit":{"label":"value","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"value","searchable":true,"sortable":true}},"files":{"edit":{"label":"files","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"files","searchable":false,"sortable":false}},"options":{"edit":{"label":"options","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"options","searchable":false,"sortable":false}},"is_true":{"edit":{"label":"is_true","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"is_true","searchable":true,"sortable":true}},"option":{"edit":{"label":"option","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"option","searchable":false,"sortable":false}},"date_value":{"edit":{"label":"date_value","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"date_value","searchable":true,"sortable":true}},"datetime_value":{"edit":{"label":"datetime_value","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"datetime_value","searchable":true,"sortable":true}},"dates":{"edit":{"label":"dates","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"dates","searchable":false,"sortable":false}}},"layouts":{"list":["id","key","value","files"],"edit":[[{"name":"key","size":6},{"name":"value","size":6}],[{"name":"files","size":6}],[{"name":"options","size":12}],[{"name":"is_true","size":4}],[{"name":"option","size":12}],[{"name":"date_value","size":4},{"name":"datetime_value","size":6}],[{"name":"dates","size":12}]]},"isComponent":true}	object	\N	\N
55	plugin_content_manager_configuration_content_types::api::page.page	{"uid":"api::page.page","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"title","defaultSortBy":"title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"url":{"edit":{"label":"url","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"url","searchable":true,"sortable":true}},"layout":{"edit":{"label":"layout","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"layout","searchable":true,"sortable":true}},"page_blocks":{"edit":{"label":"page_blocks","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"page_blocks","searchable":false,"sortable":false}},"metatag":{"edit":{"label":"metatag","description":"","placeholder":"","visible":true,"editable":true,"mainField":"gtm_key"},"list":{"label":"metatag","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","title","url","layout"],"edit":[[{"name":"title","size":6},{"name":"url","size":6}],[{"name":"layout","size":6}],[{"name":"page_blocks","size":12}],[{"name":"metatag","size":6}]]}}	object	\N	\N
66	plugin_content_manager_configuration_content_types::api::slide-over.slide-over	{"uid":"api::slide-over.slide-over","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"title","defaultSortBy":"title","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"uid":{"edit":{"label":"uid","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"uid","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"page_blocks":{"edit":{"label":"page_blocks","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"page_blocks","searchable":false,"sortable":false}},"layouts":{"edit":{"label":"layouts","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"layouts","searchable":false,"sortable":false}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","variant","title","uid"],"edit":[[{"name":"variant","size":6},{"name":"title","size":6}],[{"name":"uid","size":6},{"name":"class_name","size":6}],[{"name":"page_blocks","size":12}],[{"name":"layouts","size":6}]]}}	object	\N	\N
86	plugin_content_manager_configuration_components::elements.feature	{"uid":"elements.feature","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}}},"layouts":{"list":["id","media","additional_media"],"edit":[[{"name":"media","size":6}],[{"name":"description","size":12}],[{"name":"additional_media","size":6}],[{"name":"title","size":12}],[{"name":"subtitle","size":12}]]},"isComponent":true}	object	\N	\N
87	plugin_content_manager_configuration_components::elements.input	{"uid":"elements.input","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"placeholder","defaultSortBy":"placeholder","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"placeholder":{"edit":{"label":"placeholder","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"placeholder","searchable":true,"sortable":true}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"is_required":{"edit":{"label":"is_required","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"is_required","searchable":true,"sortable":true}},"value":{"edit":{"label":"value","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"value","searchable":true,"sortable":true}},"name":{"edit":{"label":"name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"name","searchable":true,"sortable":true}},"options":{"edit":{"label":"options","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"options","searchable":false,"sortable":false}},"label":{"edit":{"label":"label","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"label","searchable":false,"sortable":false}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"type":{"edit":{"label":"type","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"type","searchable":true,"sortable":true}},"multiple":{"edit":{"label":"multiple","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"multiple","searchable":true,"sortable":true}},"min":{"edit":{"label":"min","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"min","searchable":true,"sortable":true}},"max":{"edit":{"label":"max","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"max","searchable":true,"sortable":true}},"step":{"edit":{"label":"step","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"step","searchable":true,"sortable":true}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}},"extra_media":{"edit":{"label":"extra_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"extra_media","searchable":false,"sortable":false}}},"layouts":{"list":["id","placeholder","variant","is_required"],"edit":[[{"name":"placeholder","size":6},{"name":"variant","size":6}],[{"name":"is_required","size":4},{"name":"value","size":6}],[{"name":"name","size":6}],[{"name":"options","size":12}],[{"name":"label","size":12}],[{"name":"class_name","size":6},{"name":"type","size":6}],[{"name":"multiple","size":4},{"name":"min","size":4},{"name":"max","size":4}],[{"name":"step","size":4},{"name":"media","size":6}],[{"name":"additional_media","size":6},{"name":"extra_media","size":6}]]},"isComponent":true}	object	\N	\N
89	plugin_content_manager_configuration_components::page-blocks.faqs-block	{"uid":"page-blocks.faqs-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"class_name","defaultSortBy":"class_name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"faqs":{"edit":{"label":"faqs","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"faqs","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"anchor":{"edit":{"label":"anchor","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"anchor","searchable":true,"sortable":true}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}}},"layouts":{"list":["id","faqs","variant","class_name"],"edit":[[{"name":"title","size":12}],[{"name":"description","size":12}],[{"name":"faqs","size":12}],[{"name":"variant","size":6},{"name":"class_name","size":6}],[{"name":"anchor","size":6}],[{"name":"subtitle","size":12}]]},"isComponent":true}	object	\N	\N
90	plugin_content_manager_configuration_components::page-blocks.features-section-block	{"uid":"page-blocks.features-section-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"anchor","defaultSortBy":"anchor","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}},"features":{"edit":{"label":"features","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"features","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"anchor":{"edit":{"label":"anchor","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"anchor","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}}},"layouts":{"list":["id","features","variant","anchor"],"edit":[[{"name":"title","size":12}],[{"name":"description","size":12}],[{"name":"subtitle","size":12}],[{"name":"features","size":12}],[{"name":"variant","size":6},{"name":"anchor","size":6}],[{"name":"class_name","size":6},{"name":"media","size":6}],[{"name":"additional_media","size":6}]]},"isComponent":true}	object	\N	\N
91	plugin_content_manager_configuration_components::page-blocks.navbar-block	{"uid":"page-blocks.navbar-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"class_name","defaultSortBy":"class_name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"logotype":{"edit":{"label":"logotype","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"logotype","searchable":false,"sortable":false}},"buttons":{"edit":{"label":"buttons","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"buttons","searchable":false,"sortable":false}},"additional_buttons":{"edit":{"label":"additional_buttons","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_buttons","searchable":false,"sortable":false}},"extra_buttons":{"edit":{"label":"extra_buttons","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"extra_buttons","searchable":false,"sortable":false}}},"layouts":{"list":["id","variant","class_name","logotype"],"edit":[[{"name":"variant","size":6}],[{"name":"description","size":12}],[{"name":"class_name","size":6}],[{"name":"logotype","size":12}],[{"name":"buttons","size":12}],[{"name":"additional_buttons","size":12}],[{"name":"extra_buttons","size":12}]]},"isComponent":true}	object	\N	\N
92	plugin_content_manager_configuration_components::elements.button	{"uid":"elements.button","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"class_name","defaultSortBy":"class_name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"url":{"edit":{"label":"url","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"url","searchable":true,"sortable":true}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"additional_attributes":{"edit":{"label":"additional_attributes","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_attributes","searchable":false,"sortable":false}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"flyout":{"edit":{"label":"flyout","description":"","placeholder":"","visible":true,"editable":true,"mainField":"title"},"list":{"label":"flyout","searchable":true,"sortable":true}}},"layouts":{"list":["id","url","media","variant"],"edit":[[{"name":"url","size":6},{"name":"media","size":6}],[{"name":"description","size":12}],[{"name":"variant","size":6},{"name":"additional_media","size":6}],[{"name":"title","size":12}],[{"name":"additional_attributes","size":12}],[{"name":"class_name","size":6},{"name":"flyout","size":6}]]},"isComponent":true}	object	\N	\N
93	plugin_content_manager_configuration_components::page-blocks.incentives-block	{"uid":"page-blocks.incentives-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"anchor","defaultSortBy":"anchor","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"features":{"edit":{"label":"features","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"features","searchable":false,"sortable":false}},"anchor":{"edit":{"label":"anchor","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"anchor","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}}},"layouts":{"list":["id","features","anchor","class_name"],"edit":[[{"name":"title","size":12}],[{"name":"description","size":12}],[{"name":"features","size":12}],[{"name":"anchor","size":6},{"name":"class_name","size":6}],[{"name":"variant","size":6},{"name":"media","size":6}],[{"name":"additional_media","size":6}],[{"name":"subtitle","size":12}]]},"isComponent":true}	object	\N	\N
94	plugin_content_manager_configuration_components::page-blocks.pricing-block	{"uid":"page-blocks.pricing-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"anchor","defaultSortBy":"anchor","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"tiers":{"edit":{"label":"tiers","description":"","placeholder":"","visible":true,"editable":true,"mainField":"id"},"list":{"label":"tiers","searchable":false,"sortable":false}},"anchor":{"edit":{"label":"anchor","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"anchor","searchable":true,"sortable":true}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}}},"layouts":{"list":["id","variant","class_name","tiers"],"edit":[[{"name":"variant","size":6}],[{"name":"title","size":12}],[{"name":"subtitle","size":12}],[{"name":"description","size":12}],[{"name":"class_name","size":6},{"name":"tiers","size":6}],[{"name":"anchor","size":6},{"name":"media","size":6}],[{"name":"additional_media","size":6}]]},"isComponent":true}	object	\N	\N
95	plugin_content_manager_configuration_components::page-blocks.cta-section-block	{"uid":"page-blocks.cta-section-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"anchor","defaultSortBy":"anchor","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"anchor":{"edit":{"label":"anchor","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"anchor","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"buttons":{"edit":{"label":"buttons","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"buttons","searchable":false,"sortable":false}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}}},"layouts":{"list":["id","variant","anchor","class_name"],"edit":[[{"name":"variant","size":6},{"name":"anchor","size":6}],[{"name":"class_name","size":6}],[{"name":"title","size":12}],[{"name":"description","size":12}],[{"name":"media","size":6}],[{"name":"buttons","size":12}],[{"name":"subtitle","size":12}],[{"name":"additional_media","size":6}]]},"isComponent":true}	object	\N	\N
96	plugin_content_manager_configuration_components::page-blocks.footer-block	{"uid":"page-blocks.footer-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"class_name","defaultSortBy":"class_name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"copyrights":{"edit":{"label":"copyrights","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"copyrights","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"logotype":{"edit":{"label":"logotype","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"logotype","searchable":false,"sortable":false}},"buttons_arrays":{"edit":{"label":"buttons_arrays","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"buttons_arrays","searchable":false,"sortable":false}},"additional_buttons_arrays":{"edit":{"label":"additional_buttons_arrays","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_buttons_arrays","searchable":false,"sortable":false}},"extra_buttons_arrays":{"edit":{"label":"extra_buttons_arrays","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"extra_buttons_arrays","searchable":false,"sortable":false}}},"layouts":{"list":["id","variant","class_name","logotype"],"edit":[[{"name":"copyrights","size":12}],[{"name":"description","size":12}],[{"name":"variant","size":6},{"name":"class_name","size":6}],[{"name":"logotype","size":12}],[{"name":"buttons_arrays","size":12}],[{"name":"additional_buttons_arrays","size":12}],[{"name":"extra_buttons_arrays","size":12}]]},"isComponent":true}	object	\N	\N
97	plugin_content_manager_configuration_components::page-blocks.reviews-table-block	{"uid":"page-blocks.reviews-table-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"anchor","defaultSortBy":"anchor","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"anchor":{"edit":{"label":"anchor","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"anchor","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}}},"layouts":{"list":["id","variant","anchor","class_name"],"edit":[[{"name":"variant","size":6},{"name":"anchor","size":6}],[{"name":"class_name","size":6}]]},"isComponent":true}	object	\N	\N
98	plugin_content_manager_configuration_components::page-blocks.reviews-list-block	{"uid":"page-blocks.reviews-list-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"anchor","defaultSortBy":"anchor","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"reviews":{"edit":{"label":"reviews","description":"","placeholder":"","visible":true,"editable":true,"mainField":"id"},"list":{"label":"reviews","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"show_all":{"edit":{"label":"show_all","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"show_all","searchable":true,"sortable":true}},"anchor":{"edit":{"label":"anchor","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"anchor","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}}},"layouts":{"list":["id","reviews","variant","show_all"],"edit":[[{"name":"reviews","size":6},{"name":"variant","size":6}],[{"name":"show_all","size":4},{"name":"anchor","size":6}],[{"name":"class_name","size":6}],[{"name":"title","size":12}],[{"name":"subtitle","size":12}],[{"name":"description","size":12}]]},"isComponent":true}	object	\N	\N
99	plugin_content_manager_configuration_components::page-blocks.slider-block	{"uid":"page-blocks.slider-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"anchor","defaultSortBy":"anchor","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"slider":{"edit":{"label":"slider","description":"","placeholder":"","visible":true,"editable":true,"mainField":"class_name"},"list":{"label":"slider","searchable":true,"sortable":true}},"anchor":{"edit":{"label":"anchor","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"anchor","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}}},"layouts":{"list":["id","variant","slider","anchor"],"edit":[[{"name":"variant","size":6},{"name":"slider","size":6}],[{"name":"anchor","size":6},{"name":"class_name","size":6}],[{"name":"title","size":12}],[{"name":"description","size":12}],[{"name":"subtitle","size":12}]]},"isComponent":true}	object	\N	\N
100	plugin_content_manager_configuration_components::page-blocks.header-section-block	{"uid":"page-blocks.header-section-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"anchor","defaultSortBy":"anchor","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}},"anchor":{"edit":{"label":"anchor","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"anchor","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}}},"layouts":{"list":["id","media","variant","anchor"],"edit":[[{"name":"title","size":12}],[{"name":"description","size":12}],[{"name":"media","size":6},{"name":"variant","size":6}],[{"name":"subtitle","size":12}],[{"name":"anchor","size":6},{"name":"class_name","size":6}],[{"name":"additional_media","size":6}]]},"isComponent":true}	object	\N	\N
101	plugin_content_manager_configuration_components::page-blocks.not-found-block	{"uid":"page-blocks.not-found-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"anchor":{"edit":{"label":"anchor","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"anchor","searchable":true,"sortable":true}},"buttons":{"edit":{"label":"buttons","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"buttons","searchable":false,"sortable":false}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}}},"layouts":{"list":["id","variant","class_name","anchor"],"edit":[[{"name":"variant","size":6}],[{"name":"title","size":12}],[{"name":"description","size":12}],[{"name":"class_name","size":6},{"name":"anchor","size":6}],[{"name":"buttons","size":12}],[{"name":"subtitle","size":12}],[{"name":"media","size":6},{"name":"additional_media","size":6}]]},"isComponent":true}	object	\N	\N
102	plugin_content_manager_configuration_components::page-blocks.logotypes-cloud-block	{"uid":"page-blocks.logotypes-cloud-block","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"anchor","defaultSortBy":"anchor","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"buttons":{"edit":{"label":"buttons","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"buttons","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"anchor":{"edit":{"label":"anchor","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"anchor","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"logotypes":{"edit":{"label":"logotypes","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"logotypes","searchable":false,"sortable":false}},"subtitle":{"edit":{"label":"subtitle","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"subtitle","searchable":false,"sortable":false}}},"layouts":{"list":["id","variant","buttons","anchor"],"edit":[[{"name":"variant","size":6}],[{"name":"title","size":12}],[{"name":"buttons","size":12}],[{"name":"description","size":12}],[{"name":"anchor","size":6},{"name":"class_name","size":6}],[{"name":"logotypes","size":12}],[{"name":"subtitle","size":12}]]},"isComponent":true}	object	\N	\N
103	plugin_content_manager_configuration_components::elements.font	{"uid":"elements.font","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"weight":{"edit":{"label":"weight","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"weight","searchable":true,"sortable":true}},"style":{"edit":{"label":"style","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"style","searchable":true,"sortable":true}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}}},"layouts":{"list":["id","media","weight","style"],"edit":[[{"name":"media","size":6},{"name":"weight","size":6}],[{"name":"style","size":6},{"name":"variant","size":6}]]},"isComponent":true}	object	\N	\N
105	plugin_content_manager_configuration_components::elements.input-option	{"uid":"elements.input-option","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"media":{"edit":{"label":"media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"media","searchable":false,"sortable":false}},"additional_media":{"edit":{"label":"additional_media","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"additional_media","searchable":false,"sortable":false}}},"layouts":{"list":["id","media","additional_media"],"edit":[[{"name":"title","size":12}],[{"name":"description","size":12}],[{"name":"media","size":6},{"name":"additional_media","size":6}]]},"isComponent":true}	object	\N	\N
106	plugin_content_manager_configuration_components::elements.faq	{"uid":"elements.faq","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"id","defaultSortBy":"id","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":false,"sortable":false}},"description":{"edit":{"label":"description","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"description","searchable":false,"sortable":false}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":false,"sortable":false}}},"layouts":{"list":["id"],"edit":[[{"name":"description","size":12}],[{"name":"title","size":12}]]},"isComponent":true}	object	\N	\N
104	plugin_content_manager_configuration_content_types::admin::user	{"uid":"admin::user","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"firstname","defaultSortBy":"firstname","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"firstname":{"edit":{"label":"firstname","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"firstname","searchable":true,"sortable":true}},"lastname":{"edit":{"label":"lastname","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"lastname","searchable":true,"sortable":true}},"username":{"edit":{"label":"username","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"username","searchable":true,"sortable":true}},"email":{"edit":{"label":"email","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"email","searchable":true,"sortable":true}},"password":{"edit":{"label":"password","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"password","searchable":true,"sortable":true}},"resetPasswordToken":{"edit":{"label":"resetPasswordToken","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"resetPasswordToken","searchable":true,"sortable":true}},"registrationToken":{"edit":{"label":"registrationToken","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"registrationToken","searchable":true,"sortable":true}},"isActive":{"edit":{"label":"isActive","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"isActive","searchable":true,"sortable":true}},"roles":{"edit":{"label":"roles","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"roles","searchable":false,"sortable":false}},"blocked":{"edit":{"label":"blocked","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"blocked","searchable":true,"sortable":true}},"preferedLanguage":{"edit":{"label":"preferedLanguage","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"preferedLanguage","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","firstname","lastname","username"],"edit":[[{"name":"firstname","size":6},{"name":"lastname","size":6}],[{"name":"username","size":6},{"name":"email","size":6}],[{"name":"password","size":6}],[{"name":"isActive","size":4}],[{"name":"roles","size":6},{"name":"blocked","size":4}],[{"name":"preferedLanguage","size":6}]]}}	object	\N	\N
47	plugin_content_manager_configuration_content_types::plugin::users-permissions.permission	{"uid":"plugin::users-permissions.permission","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"action","defaultSortBy":"action","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"action":{"edit":{"label":"action","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"action","searchable":true,"sortable":true}},"role":{"edit":{"label":"role","description":"","placeholder":"","visible":true,"editable":true,"mainField":"name"},"list":{"label":"role","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","action","role","createdAt"],"edit":[[{"name":"action","size":6},{"name":"role","size":6}]]}}	object	\N	\N
59	plugin_content_manager_configuration_content_types::api::slider.slider	{"uid":"api::slider.slider","settings":{"bulkable":true,"filterable":true,"searchable":true,"pageSize":10,"mainField":"class_name","defaultSortBy":"class_name","defaultSortOrder":"ASC"},"metadatas":{"id":{"edit":{},"list":{"label":"id","searchable":true,"sortable":true}},"variant":{"edit":{"label":"variant","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"variant","searchable":true,"sortable":true}},"slides":{"edit":{"label":"slides","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"slides","searchable":false,"sortable":false}},"show_backdrop":{"edit":{"label":"show_backdrop","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"show_backdrop","searchable":true,"sortable":true}},"show_full_screen":{"edit":{"label":"show_full_screen","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"show_full_screen","searchable":true,"sortable":true}},"show_previews":{"edit":{"label":"show_previews","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"show_previews","searchable":true,"sortable":true}},"class_name":{"edit":{"label":"class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"class_name","searchable":true,"sortable":true}},"aspect_ratio_class_name":{"edit":{"label":"aspect_ratio_class_name","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"aspect_ratio_class_name","searchable":true,"sortable":true}},"title":{"edit":{"label":"title","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"title","searchable":true,"sortable":true}},"uid":{"edit":{"label":"uid","description":"","placeholder":"","visible":true,"editable":true},"list":{"label":"uid","searchable":true,"sortable":true}},"createdAt":{"edit":{"label":"createdAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"createdAt","searchable":true,"sortable":true}},"updatedAt":{"edit":{"label":"updatedAt","description":"","placeholder":"","visible":false,"editable":true},"list":{"label":"updatedAt","searchable":true,"sortable":true}},"createdBy":{"edit":{"label":"createdBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"createdBy","searchable":true,"sortable":true}},"updatedBy":{"edit":{"label":"updatedBy","description":"","placeholder":"","visible":false,"editable":true,"mainField":"firstname"},"list":{"label":"updatedBy","searchable":true,"sortable":true}}},"layouts":{"list":["id","variant","slides","show_backdrop"],"edit":[[{"name":"variant","size":6}],[{"name":"slides","size":12}],[{"name":"show_backdrop","size":4},{"name":"show_full_screen","size":4},{"name":"show_previews","size":4}],[{"name":"class_name","size":6},{"name":"aspect_ratio_class_name","size":6}],[{"name":"title","size":6},{"name":"uid","size":6}]]}}	object	\N	\N
\.


--
-- Data for Name: strapi_database_schema; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strapi_database_schema (id, schema, "time", hash) FROM stdin;
4	{"tables":[{"name":"strapi_core_store_settings","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"key","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"value","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"environment","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"tag","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"strapi_webhooks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"url","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"headers","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"events","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"enabled","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"admin_permissions","indexes":[{"name":"admin_permissions_created_by_id_fk","columns":["created_by_id"]},{"name":"admin_permissions_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"admin_permissions_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"admin_permissions_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"action","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"action_parameters","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subject","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"properties","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"conditions","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"admin_users","indexes":[{"name":"admin_users_created_by_id_fk","columns":["created_by_id"]},{"name":"admin_users_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"admin_users_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"admin_users_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"firstname","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"lastname","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"username","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"email","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"password","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"reset_password_token","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"registration_token","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"is_active","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"blocked","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"prefered_language","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"admin_roles","indexes":[{"name":"admin_roles_created_by_id_fk","columns":["created_by_id"]},{"name":"admin_roles_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"admin_roles_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"admin_roles_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"code","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_api_tokens","indexes":[{"name":"strapi_api_tokens_created_by_id_fk","columns":["created_by_id"]},{"name":"strapi_api_tokens_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"strapi_api_tokens_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"strapi_api_tokens_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"access_key","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"last_used_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"expires_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"lifespan","type":"bigInteger","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_api_token_permissions","indexes":[{"name":"strapi_api_token_permissions_created_by_id_fk","columns":["created_by_id"]},{"name":"strapi_api_token_permissions_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"strapi_api_token_permissions_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"strapi_api_token_permissions_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"action","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_transfer_tokens","indexes":[{"name":"strapi_transfer_tokens_created_by_id_fk","columns":["created_by_id"]},{"name":"strapi_transfer_tokens_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"strapi_transfer_tokens_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"strapi_transfer_tokens_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"access_key","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"last_used_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"expires_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"lifespan","type":"bigInteger","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_transfer_token_permissions","indexes":[{"name":"strapi_transfer_token_permissions_created_by_id_fk","columns":["created_by_id"]},{"name":"strapi_transfer_token_permissions_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"strapi_transfer_token_permissions_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"strapi_transfer_token_permissions_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"action","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"files","indexes":[{"name":"upload_files_folder_path_index","columns":["folder_path"],"type":null},{"name":"upload_files_created_at_index","columns":["created_at"],"type":null},{"name":"upload_files_updated_at_index","columns":["updated_at"],"type":null},{"name":"upload_files_name_index","columns":["name"],"type":null},{"name":"upload_files_size_index","columns":["size"],"type":null},{"name":"upload_files_ext_index","columns":["ext"],"type":null},{"name":"files_created_by_id_fk","columns":["created_by_id"]},{"name":"files_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"files_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"files_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"alternative_text","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"caption","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"width","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"height","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"formats","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"hash","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"ext","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"mime","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"size","type":"decimal","args":[10,2],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"url","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"preview_url","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"provider","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"provider_metadata","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"folder_path","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"upload_folders","indexes":[{"name":"upload_folders_path_id_index","columns":["path_id"],"type":"unique"},{"name":"upload_folders_path_index","columns":["path"],"type":"unique"},{"name":"upload_folders_created_by_id_fk","columns":["created_by_id"]},{"name":"upload_folders_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"upload_folders_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"upload_folders_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"path_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"path","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"i18n_locale","indexes":[{"name":"i18n_locale_created_by_id_fk","columns":["created_by_id"]},{"name":"i18n_locale_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"i18n_locale_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"i18n_locale_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"code","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"up_permissions","indexes":[{"name":"up_permissions_created_by_id_fk","columns":["created_by_id"]},{"name":"up_permissions_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"up_permissions_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"up_permissions_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"action","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"up_roles","indexes":[{"name":"up_roles_created_by_id_fk","columns":["created_by_id"]},{"name":"up_roles_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"up_roles_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"up_roles_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"up_users","indexes":[{"name":"up_users_created_by_id_fk","columns":["created_by_id"]},{"name":"up_users_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"up_users_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"up_users_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"username","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"email","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"provider","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"password","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"reset_password_token","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"confirmation_token","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"confirmed","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"blocked","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"email_templates","indexes":[{"name":"email_templates_created_by_id_fk","columns":["created_by_id"]},{"name":"email_templates_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"email_templates_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"email_templates_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"template_reference_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"design","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subject","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"body_html","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"body_text","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"enabled","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"tags","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"configurations","indexes":[{"name":"configurations_created_by_id_fk","columns":["created_by_id"]},{"name":"configurations_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"configurations_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"configurations_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"currencies","indexes":[{"name":"currencies_created_by_id_fk","columns":["created_by_id"]},{"name":"currencies_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"currencies_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"currencies_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"unicode","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"is_default","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"flyouts","indexes":[{"type":"unique","name":"flyouts_uid_unique","columns":["uid"]},{"name":"flyouts_created_by_id_fk","columns":["created_by_id"]},{"name":"flyouts_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"flyouts_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"flyouts_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"uid","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false,"unique":true},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"footers","indexes":[{"type":"unique","name":"footers_uid_unique","columns":["uid"]},{"name":"footers_created_by_id_fk","columns":["created_by_id"]},{"name":"footers_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"footers_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"footers_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"uid","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false,"unique":true},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"forms","indexes":[{"type":"unique","name":"forms_uid_unique","columns":["uid"]},{"name":"forms_created_by_id_fk","columns":["created_by_id"]},{"name":"forms_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"forms_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"forms_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"class_name","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"additional_attributes","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"uid","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false,"unique":true},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"form_requests","indexes":[{"name":"form_requests_created_by_id_fk","columns":["created_by_id"]},{"name":"form_requests_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"form_requests_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"form_requests_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"layouts","indexes":[{"type":"unique","name":"layouts_uid_unique","columns":["uid"]},{"name":"layouts_created_by_id_fk","columns":["created_by_id"]},{"name":"layouts_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"layouts_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"layouts_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"uid","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false,"unique":true},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"loaders","indexes":[{"name":"loaders_created_by_id_fk","columns":["created_by_id"]},{"name":"loaders_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"loaders_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"loaders_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"anchor","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"metatags","indexes":[{"name":"metatags_created_by_id_fk","columns":["created_by_id"]},{"name":"metatags_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"metatags_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"metatags_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"script","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"gtm_key","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"is_default","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"modals","indexes":[{"type":"unique","name":"modals_uid_unique","columns":["uid"]},{"name":"modals_created_by_id_fk","columns":["created_by_id"]},{"name":"modals_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"modals_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"modals_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"uid","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false,"unique":true},{"name":"dialog_panel_class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"navbars","indexes":[{"type":"unique","name":"navbars_uid_unique","columns":["uid"]},{"name":"navbars_created_by_id_fk","columns":["created_by_id"]},{"name":"navbars_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"navbars_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"navbars_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"uid","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false,"unique":true},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"position","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"side","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"pages","indexes":[{"name":"pages_created_by_id_fk","columns":["created_by_id"]},{"name":"pages_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"pages_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"pages_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"url","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"reviews","indexes":[{"name":"reviews_created_by_id_fk","columns":["created_by_id"]},{"name":"reviews_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"reviews_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"reviews_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"rating","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"robots","indexes":[{"name":"robots_created_by_id_fk","columns":["created_by_id"]},{"name":"robots_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"robots_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"robots_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"robots","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"sidebars","indexes":[{"type":"unique","name":"sidebars_uid_unique","columns":["uid"]},{"name":"sidebars_created_by_id_fk","columns":["created_by_id"]},{"name":"sidebars_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"sidebars_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"sidebars_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"uid","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false,"unique":true},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"side","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"slide_overs","indexes":[{"type":"unique","name":"slide_overs_uid_unique","columns":["uid"]},{"name":"slide_overs_created_by_id_fk","columns":["created_by_id"]},{"name":"slide_overs_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"slide_overs_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"slide_overs_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"uid","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false,"unique":true},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"sliders","indexes":[{"type":"unique","name":"sliders_uid_unique","columns":["uid"]},{"name":"sliders_created_by_id_fk","columns":["created_by_id"]},{"name":"sliders_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"sliders_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"sliders_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"show_backdrop","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"show_full_screen","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"show_previews","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"aspect_ratio_class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"uid","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false,"unique":true},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"telegrams","indexes":[{"name":"telegrams_created_by_id_fk","columns":["created_by_id"]},{"name":"telegrams_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"telegrams_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"telegrams_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"themes","indexes":[{"name":"themes_created_by_id_fk","columns":["created_by_id"]},{"name":"themes_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"themes_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"themes_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"theme","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"tiers","indexes":[{"name":"tiers_created_by_id_fk","columns":["created_by_id"]},{"name":"tiers_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"tiers_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"tiers_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"price","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"period","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"old_price","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"topbars","indexes":[{"type":"unique","name":"topbars_uid_unique","columns":["uid"]},{"name":"topbars_created_by_id_fk","columns":["created_by_id"]},{"name":"topbars_updated_by_id_fk","columns":["updated_by_id"]}],"foreignKeys":[{"name":"topbars_created_by_id_fk","columns":["created_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"},{"name":"topbars_updated_by_id_fk","columns":["updated_by_id"],"referencedTable":"admin_users","referencedColumns":["id"],"onDelete":"SET NULL"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"uid","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false,"unique":true},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"position","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"side","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"updated_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"published_at","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"created_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"updated_by_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"locale","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_elements_buttons","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"url","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"additional_attributes","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_elements_buttons_arrays","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"url","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"additional_attributes","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_elements_date_values","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"date_value","type":"date","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"datetime_value","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"time_value","type":"time","args":[{"precision":3}],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_elements_faqs","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_elements_features","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_elements_fonts","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"weight","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"style","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_elements_input_options","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_elements_inputs","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"placeholder","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"is_required","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"value","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"label","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"multiple","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"min","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"max","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"step","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_elements_logotypes","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"url","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_elements_recievers","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"identifier","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_elements_request_inputs","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"key","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"value","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"is_true","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"date_value","type":"date","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"datetime_value","type":"datetime","args":[{"useTz":false,"precision":6}],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_elements_slides","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_functions_configs","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"provider","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"config","type":"jsonb","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_functions_form_side_effects","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"provider","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_alert_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"anchor","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_contact_section_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"anchor","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_cta_section_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"anchor","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_faqs_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"anchor","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_features_section_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"anchor","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_footer_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"copyrights","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_header_section_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"anchor","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_hero_section_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"anchor","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_incentives_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"anchor","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_logotypes_cloud_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"anchor","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_navbar_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_not_found_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"anchor","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_pricing_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"anchor","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_reviews_list_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"show_all","type":"boolean","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"anchor","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_reviews_table_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"anchor","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"components_page_blocks_slider_blocks","indexes":[],"foreignKeys":[],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"variant","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"anchor","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"class_name","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"title","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"description","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"subtitle","type":"text","args":["longtext"],"defaultTo":null,"notNullable":false,"unsigned":false}]},{"name":"admin_permissions_role_links","indexes":[{"name":"admin_permissions_role_links_fk","columns":["permission_id"]},{"name":"admin_permissions_role_links_inv_fk","columns":["role_id"]},{"name":"admin_permissions_role_links_unique","columns":["permission_id","role_id"],"type":"unique"},{"name":"admin_permissions_role_links_order_inv_fk","columns":["permission_order"]}],"foreignKeys":[{"name":"admin_permissions_role_links_fk","columns":["permission_id"],"referencedColumns":["id"],"referencedTable":"admin_permissions","onDelete":"CASCADE"},{"name":"admin_permissions_role_links_inv_fk","columns":["role_id"],"referencedColumns":["id"],"referencedTable":"admin_roles","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"permission_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"role_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"permission_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"admin_users_roles_links","indexes":[{"name":"admin_users_roles_links_fk","columns":["user_id"]},{"name":"admin_users_roles_links_inv_fk","columns":["role_id"]},{"name":"admin_users_roles_links_unique","columns":["user_id","role_id"],"type":"unique"},{"name":"admin_users_roles_links_order_fk","columns":["role_order"]},{"name":"admin_users_roles_links_order_inv_fk","columns":["user_order"]}],"foreignKeys":[{"name":"admin_users_roles_links_fk","columns":["user_id"],"referencedColumns":["id"],"referencedTable":"admin_users","onDelete":"CASCADE"},{"name":"admin_users_roles_links_inv_fk","columns":["role_id"],"referencedColumns":["id"],"referencedTable":"admin_roles","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"user_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"role_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"role_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"user_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_api_token_permissions_token_links","indexes":[{"name":"strapi_api_token_permissions_token_links_fk","columns":["api_token_permission_id"]},{"name":"strapi_api_token_permissions_token_links_inv_fk","columns":["api_token_id"]},{"name":"strapi_api_token_permissions_token_links_unique","columns":["api_token_permission_id","api_token_id"],"type":"unique"},{"name":"strapi_api_token_permissions_token_links_order_inv_fk","columns":["api_token_permission_order"]}],"foreignKeys":[{"name":"strapi_api_token_permissions_token_links_fk","columns":["api_token_permission_id"],"referencedColumns":["id"],"referencedTable":"strapi_api_token_permissions","onDelete":"CASCADE"},{"name":"strapi_api_token_permissions_token_links_inv_fk","columns":["api_token_id"],"referencedColumns":["id"],"referencedTable":"strapi_api_tokens","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"api_token_permission_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"api_token_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"api_token_permission_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"strapi_transfer_token_permissions_token_links","indexes":[{"name":"strapi_transfer_token_permissions_token_links_fk","columns":["transfer_token_permission_id"]},{"name":"strapi_transfer_token_permissions_token_links_inv_fk","columns":["transfer_token_id"]},{"name":"strapi_transfer_token_permissions_token_links_unique","columns":["transfer_token_permission_id","transfer_token_id"],"type":"unique"},{"name":"strapi_transfer_token_permissions_token_links_order_inv_fk","columns":["transfer_token_permission_order"]}],"foreignKeys":[{"name":"strapi_transfer_token_permissions_token_links_fk","columns":["transfer_token_permission_id"],"referencedColumns":["id"],"referencedTable":"strapi_transfer_token_permissions","onDelete":"CASCADE"},{"name":"strapi_transfer_token_permissions_token_links_inv_fk","columns":["transfer_token_id"],"referencedColumns":["id"],"referencedTable":"strapi_transfer_tokens","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"transfer_token_permission_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"transfer_token_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"transfer_token_permission_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"files_related_morphs","indexes":[{"name":"files_related_morphs_fk","columns":["file_id"]},{"name":"files_related_morphs_order_index","columns":["order"]},{"name":"files_related_morphs_id_column_index","columns":["related_id"]}],"foreignKeys":[{"name":"files_related_morphs_fk","columns":["file_id"],"referencedColumns":["id"],"referencedTable":"files","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"file_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"related_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"related_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"files_folder_links","indexes":[{"name":"files_folder_links_fk","columns":["file_id"]},{"name":"files_folder_links_inv_fk","columns":["folder_id"]},{"name":"files_folder_links_unique","columns":["file_id","folder_id"],"type":"unique"},{"name":"files_folder_links_order_inv_fk","columns":["file_order"]}],"foreignKeys":[{"name":"files_folder_links_fk","columns":["file_id"],"referencedColumns":["id"],"referencedTable":"files","onDelete":"CASCADE"},{"name":"files_folder_links_inv_fk","columns":["folder_id"],"referencedColumns":["id"],"referencedTable":"upload_folders","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"file_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"folder_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"file_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"upload_folders_parent_links","indexes":[{"name":"upload_folders_parent_links_fk","columns":["folder_id"]},{"name":"upload_folders_parent_links_inv_fk","columns":["inv_folder_id"]},{"name":"upload_folders_parent_links_unique","columns":["folder_id","inv_folder_id"],"type":"unique"},{"name":"upload_folders_parent_links_order_inv_fk","columns":["folder_order"]}],"foreignKeys":[{"name":"upload_folders_parent_links_fk","columns":["folder_id"],"referencedColumns":["id"],"referencedTable":"upload_folders","onDelete":"CASCADE"},{"name":"upload_folders_parent_links_inv_fk","columns":["inv_folder_id"],"referencedColumns":["id"],"referencedTable":"upload_folders","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"folder_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_folder_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"folder_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"up_permissions_role_links","indexes":[{"name":"up_permissions_role_links_fk","columns":["permission_id"]},{"name":"up_permissions_role_links_inv_fk","columns":["role_id"]},{"name":"up_permissions_role_links_unique","columns":["permission_id","role_id"],"type":"unique"},{"name":"up_permissions_role_links_order_inv_fk","columns":["permission_order"]}],"foreignKeys":[{"name":"up_permissions_role_links_fk","columns":["permission_id"],"referencedColumns":["id"],"referencedTable":"up_permissions","onDelete":"CASCADE"},{"name":"up_permissions_role_links_inv_fk","columns":["role_id"],"referencedColumns":["id"],"referencedTable":"up_roles","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"permission_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"role_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"permission_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"up_users_role_links","indexes":[{"name":"up_users_role_links_fk","columns":["user_id"]},{"name":"up_users_role_links_inv_fk","columns":["role_id"]},{"name":"up_users_role_links_unique","columns":["user_id","role_id"],"type":"unique"},{"name":"up_users_role_links_order_inv_fk","columns":["user_order"]}],"foreignKeys":[{"name":"up_users_role_links_fk","columns":["user_id"],"referencedColumns":["id"],"referencedTable":"up_users","onDelete":"CASCADE"},{"name":"up_users_role_links_inv_fk","columns":["role_id"],"referencedColumns":["id"],"referencedTable":"up_roles","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"user_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"role_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"user_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"configurations_components","indexes":[{"name":"configurations_field_index","columns":["field"]},{"name":"configurations_component_type_index","columns":["component_type"]},{"name":"configurations_entity_fk","columns":["entity_id"]},{"name":"configurations_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"configurations_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"configurations","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"currencies_localizations_links","indexes":[{"name":"currencies_localizations_links_fk","columns":["currency_id"]},{"name":"currencies_localizations_links_inv_fk","columns":["inv_currency_id"]},{"name":"currencies_localizations_links_unique","columns":["currency_id","inv_currency_id"],"type":"unique"},{"name":"currencies_localizations_links_order_fk","columns":["currency_order"]}],"foreignKeys":[{"name":"currencies_localizations_links_fk","columns":["currency_id"],"referencedColumns":["id"],"referencedTable":"currencies","onDelete":"CASCADE"},{"name":"currencies_localizations_links_inv_fk","columns":["inv_currency_id"],"referencedColumns":["id"],"referencedTable":"currencies","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"currency_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_currency_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"currency_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"flyouts_components","indexes":[{"name":"flyouts_field_index","columns":["field"]},{"name":"flyouts_component_type_index","columns":["component_type"]},{"name":"flyouts_entity_fk","columns":["entity_id"]},{"name":"flyouts_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"flyouts_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"flyouts","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"flyouts_localizations_links","indexes":[{"name":"flyouts_localizations_links_fk","columns":["flyout_id"]},{"name":"flyouts_localizations_links_inv_fk","columns":["inv_flyout_id"]},{"name":"flyouts_localizations_links_unique","columns":["flyout_id","inv_flyout_id"],"type":"unique"},{"name":"flyouts_localizations_links_order_fk","columns":["flyout_order"]}],"foreignKeys":[{"name":"flyouts_localizations_links_fk","columns":["flyout_id"],"referencedColumns":["id"],"referencedTable":"flyouts","onDelete":"CASCADE"},{"name":"flyouts_localizations_links_inv_fk","columns":["inv_flyout_id"],"referencedColumns":["id"],"referencedTable":"flyouts","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"flyout_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_flyout_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"flyout_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"footers_components","indexes":[{"name":"footers_field_index","columns":["field"]},{"name":"footers_component_type_index","columns":["component_type"]},{"name":"footers_entity_fk","columns":["entity_id"]},{"name":"footers_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"footers_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"footers","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"footers_localizations_links","indexes":[{"name":"footers_localizations_links_fk","columns":["footer_id"]},{"name":"footers_localizations_links_inv_fk","columns":["inv_footer_id"]},{"name":"footers_localizations_links_unique","columns":["footer_id","inv_footer_id"],"type":"unique"},{"name":"footers_localizations_links_order_fk","columns":["footer_order"]}],"foreignKeys":[{"name":"footers_localizations_links_fk","columns":["footer_id"],"referencedColumns":["id"],"referencedTable":"footers","onDelete":"CASCADE"},{"name":"footers_localizations_links_inv_fk","columns":["inv_footer_id"],"referencedColumns":["id"],"referencedTable":"footers","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"footer_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_footer_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"footer_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"forms_components","indexes":[{"name":"forms_field_index","columns":["field"]},{"name":"forms_component_type_index","columns":["component_type"]},{"name":"forms_entity_fk","columns":["entity_id"]},{"name":"forms_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"forms_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"forms","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"forms_localizations_links","indexes":[{"name":"forms_localizations_links_fk","columns":["form_id"]},{"name":"forms_localizations_links_inv_fk","columns":["inv_form_id"]},{"name":"forms_localizations_links_unique","columns":["form_id","inv_form_id"],"type":"unique"},{"name":"forms_localizations_links_order_fk","columns":["form_order"]}],"foreignKeys":[{"name":"forms_localizations_links_fk","columns":["form_id"],"referencedColumns":["id"],"referencedTable":"forms","onDelete":"CASCADE"},{"name":"forms_localizations_links_inv_fk","columns":["inv_form_id"],"referencedColumns":["id"],"referencedTable":"forms","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"form_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_form_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"form_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"form_requests_components","indexes":[{"name":"form_requests_field_index","columns":["field"]},{"name":"form_requests_component_type_index","columns":["component_type"]},{"name":"form_requests_entity_fk","columns":["entity_id"]},{"name":"form_requests_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"form_requests_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"form_requests","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"form_requests_form_links","indexes":[{"name":"form_requests_form_links_fk","columns":["form_request_id"]},{"name":"form_requests_form_links_inv_fk","columns":["form_id"]},{"name":"form_requests_form_links_unique","columns":["form_request_id","form_id"],"type":"unique"},{"name":"form_requests_form_links_order_inv_fk","columns":["form_request_order"]}],"foreignKeys":[{"name":"form_requests_form_links_fk","columns":["form_request_id"],"referencedColumns":["id"],"referencedTable":"form_requests","onDelete":"CASCADE"},{"name":"form_requests_form_links_inv_fk","columns":["form_id"],"referencedColumns":["id"],"referencedTable":"forms","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"form_request_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"form_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"form_request_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"layouts_sidebar_links","indexes":[{"name":"layouts_sidebar_links_fk","columns":["layout_id"]},{"name":"layouts_sidebar_links_inv_fk","columns":["sidebar_id"]},{"name":"layouts_sidebar_links_unique","columns":["layout_id","sidebar_id"],"type":"unique"},{"name":"layouts_sidebar_links_order_inv_fk","columns":["layout_order"]}],"foreignKeys":[{"name":"layouts_sidebar_links_fk","columns":["layout_id"],"referencedColumns":["id"],"referencedTable":"layouts","onDelete":"CASCADE"},{"name":"layouts_sidebar_links_inv_fk","columns":["sidebar_id"],"referencedColumns":["id"],"referencedTable":"sidebars","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"layout_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"sidebar_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"layout_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"layouts_topbar_links","indexes":[{"name":"layouts_topbar_links_fk","columns":["layout_id"]},{"name":"layouts_topbar_links_inv_fk","columns":["topbar_id"]},{"name":"layouts_topbar_links_unique","columns":["layout_id","topbar_id"],"type":"unique"},{"name":"layouts_topbar_links_order_inv_fk","columns":["layout_order"]}],"foreignKeys":[{"name":"layouts_topbar_links_fk","columns":["layout_id"],"referencedColumns":["id"],"referencedTable":"layouts","onDelete":"CASCADE"},{"name":"layouts_topbar_links_inv_fk","columns":["topbar_id"],"referencedColumns":["id"],"referencedTable":"topbars","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"layout_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"topbar_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"layout_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"layouts_footer_links","indexes":[{"name":"layouts_footer_links_fk","columns":["layout_id"]},{"name":"layouts_footer_links_inv_fk","columns":["footer_id"]},{"name":"layouts_footer_links_unique","columns":["layout_id","footer_id"],"type":"unique"},{"name":"layouts_footer_links_order_inv_fk","columns":["layout_order"]}],"foreignKeys":[{"name":"layouts_footer_links_fk","columns":["layout_id"],"referencedColumns":["id"],"referencedTable":"layouts","onDelete":"CASCADE"},{"name":"layouts_footer_links_inv_fk","columns":["footer_id"],"referencedColumns":["id"],"referencedTable":"footers","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"layout_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"footer_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"layout_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"layouts_slide_overs_links","indexes":[{"name":"layouts_slide_overs_links_fk","columns":["layout_id"]},{"name":"layouts_slide_overs_links_inv_fk","columns":["slide_over_id"]},{"name":"layouts_slide_overs_links_unique","columns":["layout_id","slide_over_id"],"type":"unique"},{"name":"layouts_slide_overs_links_order_fk","columns":["slide_over_order"]},{"name":"layouts_slide_overs_links_order_inv_fk","columns":["layout_order"]}],"foreignKeys":[{"name":"layouts_slide_overs_links_fk","columns":["layout_id"],"referencedColumns":["id"],"referencedTable":"layouts","onDelete":"CASCADE"},{"name":"layouts_slide_overs_links_inv_fk","columns":["slide_over_id"],"referencedColumns":["id"],"referencedTable":"slide_overs","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"layout_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"slide_over_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"slide_over_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"layout_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"layouts_modals_links","indexes":[{"name":"layouts_modals_links_fk","columns":["layout_id"]},{"name":"layouts_modals_links_inv_fk","columns":["modal_id"]},{"name":"layouts_modals_links_unique","columns":["layout_id","modal_id"],"type":"unique"},{"name":"layouts_modals_links_order_fk","columns":["modal_order"]},{"name":"layouts_modals_links_order_inv_fk","columns":["layout_order"]}],"foreignKeys":[{"name":"layouts_modals_links_fk","columns":["layout_id"],"referencedColumns":["id"],"referencedTable":"layouts","onDelete":"CASCADE"},{"name":"layouts_modals_links_inv_fk","columns":["modal_id"],"referencedColumns":["id"],"referencedTable":"modals","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"layout_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"modal_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"modal_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"layout_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"layouts_navbar_links","indexes":[{"name":"layouts_navbar_links_fk","columns":["layout_id"]},{"name":"layouts_navbar_links_inv_fk","columns":["navbar_id"]},{"name":"layouts_navbar_links_unique","columns":["layout_id","navbar_id"],"type":"unique"},{"name":"layouts_navbar_links_order_inv_fk","columns":["layout_order"]}],"foreignKeys":[{"name":"layouts_navbar_links_fk","columns":["layout_id"],"referencedColumns":["id"],"referencedTable":"layouts","onDelete":"CASCADE"},{"name":"layouts_navbar_links_inv_fk","columns":["navbar_id"],"referencedColumns":["id"],"referencedTable":"navbars","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"layout_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"navbar_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"layout_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"layouts_localizations_links","indexes":[{"name":"layouts_localizations_links_fk","columns":["layout_id"]},{"name":"layouts_localizations_links_inv_fk","columns":["inv_layout_id"]},{"name":"layouts_localizations_links_unique","columns":["layout_id","inv_layout_id"],"type":"unique"},{"name":"layouts_localizations_links_order_fk","columns":["layout_order"]}],"foreignKeys":[{"name":"layouts_localizations_links_fk","columns":["layout_id"],"referencedColumns":["id"],"referencedTable":"layouts","onDelete":"CASCADE"},{"name":"layouts_localizations_links_inv_fk","columns":["inv_layout_id"],"referencedColumns":["id"],"referencedTable":"layouts","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"layout_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_layout_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"layout_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"metatags_localizations_links","indexes":[{"name":"metatags_localizations_links_fk","columns":["metatag_id"]},{"name":"metatags_localizations_links_inv_fk","columns":["inv_metatag_id"]},{"name":"metatags_localizations_links_unique","columns":["metatag_id","inv_metatag_id"],"type":"unique"},{"name":"metatags_localizations_links_order_fk","columns":["metatag_order"]}],"foreignKeys":[{"name":"metatags_localizations_links_fk","columns":["metatag_id"],"referencedColumns":["id"],"referencedTable":"metatags","onDelete":"CASCADE"},{"name":"metatags_localizations_links_inv_fk","columns":["inv_metatag_id"],"referencedColumns":["id"],"referencedTable":"metatags","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"metatag_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_metatag_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"metatag_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"modals_components","indexes":[{"name":"modals_field_index","columns":["field"]},{"name":"modals_component_type_index","columns":["component_type"]},{"name":"modals_entity_fk","columns":["entity_id"]},{"name":"modals_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"modals_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"modals","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"modals_localizations_links","indexes":[{"name":"modals_localizations_links_fk","columns":["modal_id"]},{"name":"modals_localizations_links_inv_fk","columns":["inv_modal_id"]},{"name":"modals_localizations_links_unique","columns":["modal_id","inv_modal_id"],"type":"unique"},{"name":"modals_localizations_links_order_fk","columns":["modal_order"]}],"foreignKeys":[{"name":"modals_localizations_links_fk","columns":["modal_id"],"referencedColumns":["id"],"referencedTable":"modals","onDelete":"CASCADE"},{"name":"modals_localizations_links_inv_fk","columns":["inv_modal_id"],"referencedColumns":["id"],"referencedTable":"modals","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"modal_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_modal_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"modal_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"navbars_components","indexes":[{"name":"navbars_field_index","columns":["field"]},{"name":"navbars_component_type_index","columns":["component_type"]},{"name":"navbars_entity_fk","columns":["entity_id"]},{"name":"navbars_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"navbars_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"navbars","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"navbars_localizations_links","indexes":[{"name":"navbars_localizations_links_fk","columns":["navbar_id"]},{"name":"navbars_localizations_links_inv_fk","columns":["inv_navbar_id"]},{"name":"navbars_localizations_links_unique","columns":["navbar_id","inv_navbar_id"],"type":"unique"},{"name":"navbars_localizations_links_order_fk","columns":["navbar_order"]}],"foreignKeys":[{"name":"navbars_localizations_links_fk","columns":["navbar_id"],"referencedColumns":["id"],"referencedTable":"navbars","onDelete":"CASCADE"},{"name":"navbars_localizations_links_inv_fk","columns":["inv_navbar_id"],"referencedColumns":["id"],"referencedTable":"navbars","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"navbar_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_navbar_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"navbar_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"pages_components","indexes":[{"name":"pages_field_index","columns":["field"]},{"name":"pages_component_type_index","columns":["component_type"]},{"name":"pages_entity_fk","columns":["entity_id"]},{"name":"pages_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"pages_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"pages","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"pages_layout_links","indexes":[{"name":"pages_layout_links_fk","columns":["page_id"]},{"name":"pages_layout_links_inv_fk","columns":["layout_id"]},{"name":"pages_layout_links_unique","columns":["page_id","layout_id"],"type":"unique"},{"name":"pages_layout_links_order_inv_fk","columns":["page_order"]}],"foreignKeys":[{"name":"pages_layout_links_fk","columns":["page_id"],"referencedColumns":["id"],"referencedTable":"pages","onDelete":"CASCADE"},{"name":"pages_layout_links_inv_fk","columns":["layout_id"],"referencedColumns":["id"],"referencedTable":"layouts","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"page_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"layout_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"page_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"pages_metatag_links","indexes":[{"name":"pages_metatag_links_fk","columns":["page_id"]},{"name":"pages_metatag_links_inv_fk","columns":["metatag_id"]},{"name":"pages_metatag_links_unique","columns":["page_id","metatag_id"],"type":"unique"},{"name":"pages_metatag_links_order_inv_fk","columns":["page_order"]}],"foreignKeys":[{"name":"pages_metatag_links_fk","columns":["page_id"],"referencedColumns":["id"],"referencedTable":"pages","onDelete":"CASCADE"},{"name":"pages_metatag_links_inv_fk","columns":["metatag_id"],"referencedColumns":["id"],"referencedTable":"metatags","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"page_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"metatag_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"page_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"pages_localizations_links","indexes":[{"name":"pages_localizations_links_fk","columns":["page_id"]},{"name":"pages_localizations_links_inv_fk","columns":["inv_page_id"]},{"name":"pages_localizations_links_unique","columns":["page_id","inv_page_id"],"type":"unique"},{"name":"pages_localizations_links_order_fk","columns":["page_order"]}],"foreignKeys":[{"name":"pages_localizations_links_fk","columns":["page_id"],"referencedColumns":["id"],"referencedTable":"pages","onDelete":"CASCADE"},{"name":"pages_localizations_links_inv_fk","columns":["inv_page_id"],"referencedColumns":["id"],"referencedTable":"pages","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"page_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_page_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"page_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"sidebars_components","indexes":[{"name":"sidebars_field_index","columns":["field"]},{"name":"sidebars_component_type_index","columns":["component_type"]},{"name":"sidebars_entity_fk","columns":["entity_id"]},{"name":"sidebars_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"sidebars_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"sidebars","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"sidebars_localizations_links","indexes":[{"name":"sidebars_localizations_links_fk","columns":["sidebar_id"]},{"name":"sidebars_localizations_links_inv_fk","columns":["inv_sidebar_id"]},{"name":"sidebars_localizations_links_unique","columns":["sidebar_id","inv_sidebar_id"],"type":"unique"},{"name":"sidebars_localizations_links_order_fk","columns":["sidebar_order"]}],"foreignKeys":[{"name":"sidebars_localizations_links_fk","columns":["sidebar_id"],"referencedColumns":["id"],"referencedTable":"sidebars","onDelete":"CASCADE"},{"name":"sidebars_localizations_links_inv_fk","columns":["inv_sidebar_id"],"referencedColumns":["id"],"referencedTable":"sidebars","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"sidebar_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_sidebar_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"sidebar_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"slide_overs_components","indexes":[{"name":"slide_overs_field_index","columns":["field"]},{"name":"slide_overs_component_type_index","columns":["component_type"]},{"name":"slide_overs_entity_fk","columns":["entity_id"]},{"name":"slide_overs_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"slide_overs_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"slide_overs","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"slide_overs_localizations_links","indexes":[{"name":"slide_overs_localizations_links_fk","columns":["slide_over_id"]},{"name":"slide_overs_localizations_links_inv_fk","columns":["inv_slide_over_id"]},{"name":"slide_overs_localizations_links_unique","columns":["slide_over_id","inv_slide_over_id"],"type":"unique"},{"name":"slide_overs_localizations_links_order_fk","columns":["slide_over_order"]}],"foreignKeys":[{"name":"slide_overs_localizations_links_fk","columns":["slide_over_id"],"referencedColumns":["id"],"referencedTable":"slide_overs","onDelete":"CASCADE"},{"name":"slide_overs_localizations_links_inv_fk","columns":["inv_slide_over_id"],"referencedColumns":["id"],"referencedTable":"slide_overs","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"slide_over_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_slide_over_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"slide_over_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"sliders_components","indexes":[{"name":"sliders_field_index","columns":["field"]},{"name":"sliders_component_type_index","columns":["component_type"]},{"name":"sliders_entity_fk","columns":["entity_id"]},{"name":"sliders_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"sliders_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"sliders","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"sliders_localizations_links","indexes":[{"name":"sliders_localizations_links_fk","columns":["slider_id"]},{"name":"sliders_localizations_links_inv_fk","columns":["inv_slider_id"]},{"name":"sliders_localizations_links_unique","columns":["slider_id","inv_slider_id"],"type":"unique"},{"name":"sliders_localizations_links_order_fk","columns":["slider_order"]}],"foreignKeys":[{"name":"sliders_localizations_links_fk","columns":["slider_id"],"referencedColumns":["id"],"referencedTable":"sliders","onDelete":"CASCADE"},{"name":"sliders_localizations_links_inv_fk","columns":["inv_slider_id"],"referencedColumns":["id"],"referencedTable":"sliders","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"slider_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_slider_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"slider_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"themes_components","indexes":[{"name":"themes_field_index","columns":["field"]},{"name":"themes_component_type_index","columns":["component_type"]},{"name":"themes_entity_fk","columns":["entity_id"]},{"name":"themes_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"themes_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"themes","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"tiers_components","indexes":[{"name":"tiers_field_index","columns":["field"]},{"name":"tiers_component_type_index","columns":["component_type"]},{"name":"tiers_entity_fk","columns":["entity_id"]},{"name":"tiers_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"tiers_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"tiers","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"tiers_currency_links","indexes":[{"name":"tiers_currency_links_fk","columns":["tier_id"]},{"name":"tiers_currency_links_inv_fk","columns":["currency_id"]},{"name":"tiers_currency_links_unique","columns":["tier_id","currency_id"],"type":"unique"},{"name":"tiers_currency_links_order_inv_fk","columns":["tier_order"]}],"foreignKeys":[{"name":"tiers_currency_links_fk","columns":["tier_id"],"referencedColumns":["id"],"referencedTable":"tiers","onDelete":"CASCADE"},{"name":"tiers_currency_links_inv_fk","columns":["currency_id"],"referencedColumns":["id"],"referencedTable":"currencies","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"tier_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"currency_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"tier_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"tiers_localizations_links","indexes":[{"name":"tiers_localizations_links_fk","columns":["tier_id"]},{"name":"tiers_localizations_links_inv_fk","columns":["inv_tier_id"]},{"name":"tiers_localizations_links_unique","columns":["tier_id","inv_tier_id"],"type":"unique"},{"name":"tiers_localizations_links_order_fk","columns":["tier_order"]}],"foreignKeys":[{"name":"tiers_localizations_links_fk","columns":["tier_id"],"referencedColumns":["id"],"referencedTable":"tiers","onDelete":"CASCADE"},{"name":"tiers_localizations_links_inv_fk","columns":["inv_tier_id"],"referencedColumns":["id"],"referencedTable":"tiers","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"tier_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_tier_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"tier_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"topbars_components","indexes":[{"name":"topbars_field_index","columns":["field"]},{"name":"topbars_component_type_index","columns":["component_type"]},{"name":"topbars_entity_fk","columns":["entity_id"]},{"name":"topbars_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"topbars_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"topbars","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"topbars_localizations_links","indexes":[{"name":"topbars_localizations_links_fk","columns":["topbar_id"]},{"name":"topbars_localizations_links_inv_fk","columns":["inv_topbar_id"]},{"name":"topbars_localizations_links_unique","columns":["topbar_id","inv_topbar_id"],"type":"unique"},{"name":"topbars_localizations_links_order_fk","columns":["topbar_order"]}],"foreignKeys":[{"name":"topbars_localizations_links_fk","columns":["topbar_id"],"referencedColumns":["id"],"referencedTable":"topbars","onDelete":"CASCADE"},{"name":"topbars_localizations_links_inv_fk","columns":["inv_topbar_id"],"referencedColumns":["id"],"referencedTable":"topbars","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"topbar_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"inv_topbar_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"topbar_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_elements_buttons_flyout_links","indexes":[{"name":"components_elements_buttons_flyout_links_fk","columns":["button_id"]},{"name":"components_elements_buttons_flyout_links_inv_fk","columns":["flyout_id"]},{"name":"components_elements_buttons_flyout_links_unique","columns":["button_id","flyout_id"],"type":"unique"}],"foreignKeys":[{"name":"components_elements_buttons_flyout_links_fk","columns":["button_id"],"referencedColumns":["id"],"referencedTable":"components_elements_buttons","onDelete":"CASCADE"},{"name":"components_elements_buttons_flyout_links_inv_fk","columns":["flyout_id"],"referencedColumns":["id"],"referencedTable":"flyouts","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"button_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"flyout_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_elements_buttons_arrays_components","indexes":[{"name":"components_elements_buttons_arrays_field_index","columns":["field"]},{"name":"components_elements_buttons_arrays_component_type_index","columns":["component_type"]},{"name":"components_elements_buttons_arrays_entity_fk","columns":["entity_id"]},{"name":"components_elements_buttons_arrays_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_elements_buttons_arrays_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_elements_buttons_arrays","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_elements_inputs_components","indexes":[{"name":"components_elements_inputs_field_index","columns":["field"]},{"name":"components_elements_inputs_component_type_index","columns":["component_type"]},{"name":"components_elements_inputs_entity_fk","columns":["entity_id"]},{"name":"components_elements_inputs_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_elements_inputs_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_elements_inputs","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_elements_recievers_admin_links","indexes":[{"name":"components_elements_recievers_admin_links_fk","columns":["reciever_id"]},{"name":"components_elements_recievers_admin_links_inv_fk","columns":["user_id"]},{"name":"components_elements_recievers_admin_links_unique","columns":["reciever_id","user_id"],"type":"unique"}],"foreignKeys":[{"name":"components_elements_recievers_admin_links_fk","columns":["reciever_id"],"referencedColumns":["id"],"referencedTable":"components_elements_recievers","onDelete":"CASCADE"},{"name":"components_elements_recievers_admin_links_inv_fk","columns":["user_id"],"referencedColumns":["id"],"referencedTable":"admin_users","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"reciever_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"user_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_elements_recievers_user_links","indexes":[{"name":"components_elements_recievers_user_links_fk","columns":["reciever_id"]},{"name":"components_elements_recievers_user_links_inv_fk","columns":["user_id"]},{"name":"components_elements_recievers_user_links_unique","columns":["reciever_id","user_id"],"type":"unique"}],"foreignKeys":[{"name":"components_elements_recievers_user_links_fk","columns":["reciever_id"],"referencedColumns":["id"],"referencedTable":"components_elements_recievers","onDelete":"CASCADE"},{"name":"components_elements_recievers_user_links_inv_fk","columns":["user_id"],"referencedColumns":["id"],"referencedTable":"up_users","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"reciever_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"user_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_elements_request_inputs_components","indexes":[{"name":"components_elements_request_inputs_field_index","columns":["field"]},{"name":"components_elements_request_inputs_component_type_index","columns":["component_type"]},{"name":"components_elements_request_inputs_entity_fk","columns":["entity_id"]},{"name":"components_elements_request_inputs_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_elements_request_inputs_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_elements_request_inputs","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_elements_slides_components","indexes":[{"name":"components_elements_slides_field_index","columns":["field"]},{"name":"components_elements_slides_component_type_index","columns":["component_type"]},{"name":"components_elements_slides_entity_fk","columns":["entity_id"]},{"name":"components_elements_slides_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_elements_slides_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_elements_slides","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_functions_form_side_effects_components","indexes":[{"name":"components_functions_form_side_effects_field_index","columns":["field"]},{"name":"components_functions_form_side_effects_component_type_index","columns":["component_type"]},{"name":"components_functions_form_side_effects_entity_fk","columns":["entity_id"]},{"name":"components_functions_form_side_effects_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_functions_form_side_effects_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_functions_form_side_effects","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_page_blocks_alert_blocks_components","indexes":[{"name":"components_page_blocks_alert_blocks_field_index","columns":["field"]},{"name":"components_page_blocks_alert_blocks_component_type_index","columns":["component_type"]},{"name":"components_page_blocks_alert_blocks_entity_fk","columns":["entity_id"]},{"name":"components_page_blocks_alert_blocks_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_page_blocks_alert_blocks_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_page_blocks_alert_blocks","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_page_blocks_contact_section_blocks_components","indexes":[{"name":"components_page_blocks_contact_section_blocks_field_index","columns":["field"]},{"name":"components_page_blocks_contact_section_blocks_component_type_index","columns":["component_type"]},{"name":"components_page_blocks_contact_section_blocks_entity_fk","columns":["entity_id"]},{"name":"components_page_blocks_contact_section_blocks_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_page_blocks_contact_section_blocks_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_page_blocks_contact_section_blocks","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_page_blocks_contact_section_blocks_form_links","indexes":[{"name":"components_page_blocks_contact_section_blocks_form_links_fk","columns":["contact_section_block_id"]},{"name":"components_page_blocks_contact_section_blocks_form_links_inv_fk","columns":["form_id"]},{"name":"components_page_blocks_contact_section_blocks_form_links_unique","columns":["contact_section_block_id","form_id"],"type":"unique"}],"foreignKeys":[{"name":"components_page_blocks_contact_section_blocks_form_links_fk","columns":["contact_section_block_id"],"referencedColumns":["id"],"referencedTable":"components_page_blocks_contact_section_blocks","onDelete":"CASCADE"},{"name":"components_page_blocks_contact_section_blocks_form_links_inv_fk","columns":["form_id"],"referencedColumns":["id"],"referencedTable":"forms","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"contact_section_block_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"form_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_page_blocks_cta_section_blocks_components","indexes":[{"name":"components_page_blocks_cta_section_blocks_field_index","columns":["field"]},{"name":"components_page_blocks_cta_section_blocks_component_type_index","columns":["component_type"]},{"name":"components_page_blocks_cta_section_blocks_entity_fk","columns":["entity_id"]},{"name":"components_page_blocks_cta_section_blocks_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_page_blocks_cta_section_blocks_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_page_blocks_cta_section_blocks","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_page_blocks_faqs_blocks_components","indexes":[{"name":"components_page_blocks_faqs_blocks_field_index","columns":["field"]},{"name":"components_page_blocks_faqs_blocks_component_type_index","columns":["component_type"]},{"name":"components_page_blocks_faqs_blocks_entity_fk","columns":["entity_id"]},{"name":"components_page_blocks_faqs_blocks_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_page_blocks_faqs_blocks_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_page_blocks_faqs_blocks","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_page_blocks_features_section_blocks_components","indexes":[{"name":"components_page_blocks_features_section_blocks_field_index","columns":["field"]},{"name":"components_page_blocks_features_section_blocks_component_type_index","columns":["component_type"]},{"name":"components_page_blocks_features_section_blocks_entity_fk","columns":["entity_id"]},{"name":"components_page_blocks_features_section_blocks_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_page_blocks_features_section_blocks_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_page_blocks_features_section_blocks","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_page_blocks_footer_blocks_components","indexes":[{"name":"components_page_blocks_footer_blocks_field_index","columns":["field"]},{"name":"components_page_blocks_footer_blocks_component_type_index","columns":["component_type"]},{"name":"components_page_blocks_footer_blocks_entity_fk","columns":["entity_id"]},{"name":"components_page_blocks_footer_blocks_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_page_blocks_footer_blocks_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_page_blocks_footer_blocks","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_page_blocks_hero_section_blocks_components","indexes":[{"name":"components_page_blocks_hero_section_blocks_field_index","columns":["field"]},{"name":"components_page_blocks_hero_section_blocks_component_type_index","columns":["component_type"]},{"name":"components_page_blocks_hero_section_blocks_entity_fk","columns":["entity_id"]},{"name":"components_page_blocks_hero_section_blocks_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_page_blocks_hero_section_blocks_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_page_blocks_hero_section_blocks","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_page_blocks_incentives_blocks_components","indexes":[{"name":"components_page_blocks_incentives_blocks_field_index","columns":["field"]},{"name":"components_page_blocks_incentives_blocks_component_type_index","columns":["component_type"]},{"name":"components_page_blocks_incentives_blocks_entity_fk","columns":["entity_id"]},{"name":"components_page_blocks_incentives_blocks_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_page_blocks_incentives_blocks_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_page_blocks_incentives_blocks","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_page_blocks_logotypes_cloud_blocks_components","indexes":[{"name":"components_page_blocks_logotypes_cloud_blocks_field_index","columns":["field"]},{"name":"components_page_blocks_logotypes_cloud_blocks_component_type_index","columns":["component_type"]},{"name":"components_page_blocks_logotypes_cloud_blocks_entity_fk","columns":["entity_id"]},{"name":"components_page_blocks_logotypes_cloud_blocks_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_page_blocks_logotypes_cloud_blocks_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_page_blocks_logotypes_cloud_blocks","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_page_blocks_navbar_blocks_components","indexes":[{"name":"components_page_blocks_navbar_blocks_field_index","columns":["field"]},{"name":"components_page_blocks_navbar_blocks_component_type_index","columns":["component_type"]},{"name":"components_page_blocks_navbar_blocks_entity_fk","columns":["entity_id"]},{"name":"components_page_blocks_navbar_blocks_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_page_blocks_navbar_blocks_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_page_blocks_navbar_blocks","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_page_blocks_not_found_blocks_components","indexes":[{"name":"components_page_blocks_not_found_blocks_field_index","columns":["field"]},{"name":"components_page_blocks_not_found_blocks_component_type_index","columns":["component_type"]},{"name":"components_page_blocks_not_found_blocks_entity_fk","columns":["entity_id"]},{"name":"components_page_blocks_not_found_blocks_unique","columns":["entity_id","component_id","field","component_type"],"type":"unique"}],"foreignKeys":[{"name":"components_page_blocks_not_found_blocks_entity_fk","columns":["entity_id"],"referencedColumns":["id"],"referencedTable":"components_page_blocks_not_found_blocks","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"entity_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"component_type","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"field","type":"string","args":[],"defaultTo":null,"notNullable":false,"unsigned":false},{"name":"order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_page_blocks_pricing_blocks_tiers_links","indexes":[{"name":"components_page_blocks_pricing_blocks_tiers_links_fk","columns":["pricing_block_id"]},{"name":"components_page_blocks_pricing_blocks_tiers_links_inv_fk","columns":["tier_id"]},{"name":"components_page_blocks_pricing_blocks_tiers_links_unique","columns":["pricing_block_id","tier_id"],"type":"unique"},{"name":"components_page_blocks_pricing_blocks_tiers_links_order_fk","columns":["tier_order"]}],"foreignKeys":[{"name":"components_page_blocks_pricing_blocks_tiers_links_fk","columns":["pricing_block_id"],"referencedColumns":["id"],"referencedTable":"components_page_blocks_pricing_blocks","onDelete":"CASCADE"},{"name":"components_page_blocks_pricing_blocks_tiers_links_inv_fk","columns":["tier_id"],"referencedColumns":["id"],"referencedTable":"tiers","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"pricing_block_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"tier_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"tier_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_page_blocks_reviews_list_blocks_reviews_links","indexes":[{"name":"components_page_blocks_reviews_list_blocks_reviews_links_fk","columns":["reviews_list_block_id"]},{"name":"components_page_blocks_reviews_list_blocks_reviews_links_inv_fk","columns":["review_id"]},{"name":"components_page_blocks_reviews_list_blocks_reviews_links_unique","columns":["reviews_list_block_id","review_id"],"type":"unique"},{"name":"components_page_blocks_reviews_list_blocks_reviews_links_order_fk","columns":["review_order"]}],"foreignKeys":[{"name":"components_page_blocks_reviews_list_blocks_reviews_links_fk","columns":["reviews_list_block_id"],"referencedColumns":["id"],"referencedTable":"components_page_blocks_reviews_list_blocks","onDelete":"CASCADE"},{"name":"components_page_blocks_reviews_list_blocks_reviews_links_inv_fk","columns":["review_id"],"referencedColumns":["id"],"referencedTable":"reviews","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"reviews_list_block_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"review_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"review_order","type":"double","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]},{"name":"components_page_blocks_slider_blocks_slider_links","indexes":[{"name":"components_page_blocks_slider_blocks_slider_links_fk","columns":["slider_block_id"]},{"name":"components_page_blocks_slider_blocks_slider_links_inv_fk","columns":["slider_id"]},{"name":"components_page_blocks_slider_blocks_slider_links_unique","columns":["slider_block_id","slider_id"],"type":"unique"}],"foreignKeys":[{"name":"components_page_blocks_slider_blocks_slider_links_fk","columns":["slider_block_id"],"referencedColumns":["id"],"referencedTable":"components_page_blocks_slider_blocks","onDelete":"CASCADE"},{"name":"components_page_blocks_slider_blocks_slider_links_inv_fk","columns":["slider_id"],"referencedColumns":["id"],"referencedTable":"sliders","onDelete":"CASCADE"}],"columns":[{"name":"id","type":"increments","args":[{"primary":true,"primaryKey":true}],"defaultTo":null,"notNullable":true,"unsigned":false},{"name":"slider_block_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true},{"name":"slider_id","type":"integer","args":[],"defaultTo":null,"notNullable":false,"unsigned":true}]}]}	2023-10-31 03:13:27.697	c8befc5e0dc0ab29915f856fed4bc012
\.


--
-- Data for Name: strapi_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strapi_migrations (id, name, "time") FROM stdin;
\.


--
-- Data for Name: strapi_transfer_token_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strapi_transfer_token_permissions (id, action, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: strapi_transfer_token_permissions_token_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strapi_transfer_token_permissions_token_links (id, transfer_token_permission_id, transfer_token_id, transfer_token_permission_order) FROM stdin;
\.


--
-- Data for Name: strapi_transfer_tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strapi_transfer_tokens (id, name, description, access_key, last_used_at, expires_at, lifespan, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: strapi_webhooks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.strapi_webhooks (id, name, url, headers, events, enabled) FROM stdin;
\.


--
-- Data for Name: telegrams; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.telegrams (id, name, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: themes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.themes (id, theme, created_at, updated_at, published_at, created_by_id, updated_by_id) FROM stdin;
1	{"colors": {"primary": {"50": "#FFF9CC", "300": "#FFF297", "400": "#FFDF01", "500": "#FFCF01", "600": "#FFC501", "700": "#FFB201", "900": "#FFA101"}}}	2023-09-06 02:50:12.608	2023-10-31 02:57:01.53	2023-02-13 23:01:44.156	\N	1
\.


--
-- Data for Name: themes_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.themes_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
1	1	2	elements.font	fonts	1
2	1	3	elements.font	fonts	2
3	1	1	elements.font	fonts	3
4	1	4	elements.font	fonts	4
5	1	5	elements.font	fonts	5
\.


--
-- Data for Name: tiers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tiers (id, title, description, price, type, period, old_price, created_at, updated_at, published_at, created_by_id, updated_by_id, locale) FROM stdin;
1	Lite	Если хочешь попробовать концепцию в деле	\N	one-time	\N	\N	2023-09-06 02:41:14.523	2023-09-06 02:50:12.699	2023-02-14 22:48:50.378	\N	\N	en
2	Pro	Получи все преимущества от использования Boilerplate SPS при разработке стартапа	99	one-time	\N	199	2023-09-06 02:41:14.564	2023-09-06 02:50:12.791	2023-02-14 22:48:56.695	\N	\N	en
\.


--
-- Data for Name: tiers_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tiers_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
9	1	33	elements.feature	features	1
10	1	34	elements.feature	features	2
11	1	35	elements.feature	features	3
12	2	36	elements.feature	features	1
13	2	37	elements.feature	features	2
14	2	38	elements.feature	features	3
15	2	39	elements.feature	features	4
16	2	40	elements.feature	features	5
\.


--
-- Data for Name: tiers_currency_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tiers_currency_links (id, tier_id, currency_id, tier_order) FROM stdin;
1	2	1	1
\.


--
-- Data for Name: tiers_localizations_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tiers_localizations_links (id, tier_id, inv_tier_id, tier_order) FROM stdin;
\.


--
-- Data for Name: topbars; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.topbars (id, title, uid, variant, class_name, "position", side, created_at, updated_at, published_at, created_by_id, updated_by_id, locale) FROM stdin;
1	Public Page Topbar	public-page-topbar	boxed	\N	fixed	top	2023-09-06 02:50:12.837	2023-09-06 02:50:12.837	2023-04-08 13:35:32.35	\N	\N	en
\.


--
-- Data for Name: topbars_components; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.topbars_components (id, entity_id, component_id, component_type, field, "order") FROM stdin;
1	1	25	elements.button	page_blocks	1
\.


--
-- Data for Name: topbars_localizations_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.topbars_localizations_links (id, topbar_id, inv_topbar_id, topbar_order) FROM stdin;
\.


--
-- Data for Name: up_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.up_permissions (id, action, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
10942	api::modal.modal.find	2023-11-01 13:54:11.549	2023-11-01 13:54:11.549	\N	\N
10943	api::modal.modal.findOne	2023-11-01 13:54:11.559	2023-11-01 13:54:11.559	\N	\N
10944	api::slider.slider.find	2023-11-01 13:54:11.564	2023-11-01 13:54:11.564	\N	\N
10945	api::slider.slider.findOne	2023-11-01 13:54:11.571	2023-11-01 13:54:11.571	\N	\N
10946	api::theme.theme.find	2023-11-01 13:54:11.578	2023-11-01 13:54:11.578	\N	\N
10947	api::robot.robot.find	2023-11-01 13:54:11.583	2023-11-01 13:54:11.583	\N	\N
10948	api::form.form.find	2023-11-01 13:54:11.59	2023-11-01 13:54:11.59	\N	\N
10949	api::form.form.findOne	2023-11-01 13:54:11.595	2023-11-01 13:54:11.595	\N	\N
10950	api::form-request.form-request.create	2023-11-01 13:54:11.6	2023-11-01 13:54:11.6	\N	\N
10951	api::review.review.find	2023-11-01 13:54:11.61	2023-11-01 13:54:11.61	\N	\N
10952	api::review.review.findOne	2023-11-01 13:54:11.615	2023-11-01 13:54:11.615	\N	\N
10953	api::tier.tier.find	2023-11-01 13:54:11.62	2023-11-01 13:54:11.62	\N	\N
10954	api::tier.tier.findOne	2023-11-01 13:54:11.626	2023-11-01 13:54:11.626	\N	\N
10955	api::currency.currency.find	2023-11-01 13:54:11.632	2023-11-01 13:54:11.632	\N	\N
10956	api::currency.currency.findOne	2023-11-01 13:54:11.638	2023-11-01 13:54:11.638	\N	\N
10957	api::slide-over.slide-over.find	2023-11-01 13:54:11.644	2023-11-01 13:54:11.644	\N	\N
10958	api::slide-over.slide-over.findOne	2023-11-01 13:54:11.649	2023-11-01 13:54:11.649	\N	\N
10959	api::sidebar.sidebar.find	2023-11-01 13:54:11.655	2023-11-01 13:54:11.655	\N	\N
10960	api::sidebar.sidebar.findOne	2023-11-01 13:54:11.66	2023-11-01 13:54:11.66	\N	\N
10961	api::topbar.topbar.find	2023-11-01 13:54:11.666	2023-11-01 13:54:11.666	\N	\N
10962	api::topbar.topbar.findOne	2023-11-01 13:54:11.671	2023-11-01 13:54:11.671	\N	\N
10963	api::navbar.navbar.find	2023-11-01 13:54:11.676	2023-11-01 13:54:11.676	\N	\N
10964	api::navbar.navbar.findOne	2023-11-01 13:54:11.681	2023-11-01 13:54:11.681	\N	\N
10965	api::footer.footer.find	2023-11-01 13:54:11.687	2023-11-01 13:54:11.687	\N	\N
10966	api::footer.footer.findOne	2023-11-01 13:54:11.693	2023-11-01 13:54:11.693	\N	\N
10967	api::layout.layout.find	2023-11-01 13:54:11.699	2023-11-01 13:54:11.699	\N	\N
10968	api::layout.layout.findOne	2023-11-01 13:54:11.707	2023-11-01 13:54:11.707	\N	\N
10969	api::layout.layout.findByPageUrl	2023-11-01 13:54:11.713	2023-11-01 13:54:11.713	\N	\N
10970	api::metatag.metatag.find	2023-11-01 13:54:11.718	2023-11-01 13:54:11.718	\N	\N
10971	api::metatag.metatag.findOne	2023-11-01 13:54:11.724	2023-11-01 13:54:11.724	\N	\N
10972	api::flyout.flyout.find	2023-11-01 13:54:11.729	2023-11-01 13:54:11.729	\N	\N
10973	api::flyout.flyout.findOne	2023-11-01 13:54:11.735	2023-11-01 13:54:11.735	\N	\N
10974	api::page.page.find	2023-11-01 13:54:11.74	2023-11-01 13:54:11.74	\N	\N
10975	api::page.page.findOne	2023-11-01 13:54:11.746	2023-11-01 13:54:11.746	\N	\N
10976	api::page.page.getByUrl	2023-11-01 13:54:11.751	2023-11-01 13:54:11.751	\N	\N
10977	api::page.page.getUrls	2023-11-01 13:54:11.756	2023-11-01 13:54:11.756	\N	\N
10978	api::loader.loader.find	2023-11-01 13:54:11.761	2023-11-01 13:54:11.761	\N	\N
10979	api::telegram.telegram.webhook	2023-11-01 13:54:11.766	2023-11-01 13:54:11.766	\N	\N
10980	plugin::i18n.locales.listLocales	2023-11-01 13:54:11.772	2023-11-01 13:54:11.772	\N	\N
10981	api::modal.modal.find	2023-11-01 13:54:11.778	2023-11-01 13:54:11.778	\N	\N
10982	api::modal.modal.findOne	2023-11-01 13:54:11.782	2023-11-01 13:54:11.782	\N	\N
10983	api::slider.slider.find	2023-11-01 13:54:11.789	2023-11-01 13:54:11.789	\N	\N
10984	api::slider.slider.findOne	2023-11-01 13:54:11.794	2023-11-01 13:54:11.794	\N	\N
10985	api::theme.theme.find	2023-11-01 13:54:11.799	2023-11-01 13:54:11.799	\N	\N
10986	api::robot.robot.find	2023-11-01 13:54:11.805	2023-11-01 13:54:11.805	\N	\N
10987	api::form.form.find	2023-11-01 13:54:11.811	2023-11-01 13:54:11.811	\N	\N
10988	api::form.form.findOne	2023-11-01 13:54:11.82	2023-11-01 13:54:11.82	\N	\N
10989	api::form-request.form-request.create	2023-11-01 13:54:11.826	2023-11-01 13:54:11.826	\N	\N
10990	api::review.review.find	2023-11-01 13:54:11.831	2023-11-01 13:54:11.831	\N	\N
10991	api::review.review.findOne	2023-11-01 13:54:11.836	2023-11-01 13:54:11.836	\N	\N
10992	api::tier.tier.find	2023-11-01 13:54:11.842	2023-11-01 13:54:11.842	\N	\N
10993	api::tier.tier.findOne	2023-11-01 13:54:11.847	2023-11-01 13:54:11.847	\N	\N
10994	api::currency.currency.find	2023-11-01 13:54:11.852	2023-11-01 13:54:11.852	\N	\N
10995	api::currency.currency.findOne	2023-11-01 13:54:11.859	2023-11-01 13:54:11.859	\N	\N
10996	api::slide-over.slide-over.find	2023-11-01 13:54:11.864	2023-11-01 13:54:11.864	\N	\N
10997	api::slide-over.slide-over.findOne	2023-11-01 13:54:11.869	2023-11-01 13:54:11.869	\N	\N
10998	api::sidebar.sidebar.find	2023-11-01 13:54:11.875	2023-11-01 13:54:11.875	\N	\N
10999	api::sidebar.sidebar.findOne	2023-11-01 13:54:11.882	2023-11-01 13:54:11.882	\N	\N
11000	api::topbar.topbar.find	2023-11-01 13:54:11.887	2023-11-01 13:54:11.887	\N	\N
11001	api::topbar.topbar.findOne	2023-11-01 13:54:11.893	2023-11-01 13:54:11.893	\N	\N
11002	api::navbar.navbar.find	2023-11-01 13:54:11.898	2023-11-01 13:54:11.898	\N	\N
11003	api::navbar.navbar.findOne	2023-11-01 13:54:11.903	2023-11-01 13:54:11.903	\N	\N
11004	api::footer.footer.find	2023-11-01 13:54:11.908	2023-11-01 13:54:11.908	\N	\N
11005	api::footer.footer.findOne	2023-11-01 13:54:11.914	2023-11-01 13:54:11.914	\N	\N
11006	api::layout.layout.find	2023-11-01 13:54:11.919	2023-11-01 13:54:11.919	\N	\N
11007	api::layout.layout.findOne	2023-11-01 13:54:11.924	2023-11-01 13:54:11.924	\N	\N
11008	api::layout.layout.findByPageUrl	2023-11-01 13:54:11.929	2023-11-01 13:54:11.929	\N	\N
11009	api::metatag.metatag.find	2023-11-01 13:54:11.935	2023-11-01 13:54:11.935	\N	\N
11010	api::metatag.metatag.findOne	2023-11-01 13:54:11.94	2023-11-01 13:54:11.94	\N	\N
11011	api::flyout.flyout.find	2023-11-01 13:54:11.945	2023-11-01 13:54:11.945	\N	\N
11012	api::flyout.flyout.findOne	2023-11-01 13:54:11.95	2023-11-01 13:54:11.95	\N	\N
11013	api::page.page.find	2023-11-01 13:54:11.96	2023-11-01 13:54:11.96	\N	\N
11014	api::page.page.findOne	2023-11-01 13:54:11.965	2023-11-01 13:54:11.965	\N	\N
11015	api::page.page.getByUrl	2023-11-01 13:54:11.97	2023-11-01 13:54:11.97	\N	\N
11016	api::page.page.getUrls	2023-11-01 13:54:11.977	2023-11-01 13:54:11.977	\N	\N
11017	api::loader.loader.find	2023-11-01 13:54:11.982	2023-11-01 13:54:11.982	\N	\N
11018	api::telegram.telegram.webhook	2023-11-01 13:54:11.987	2023-11-01 13:54:11.987	\N	\N
11019	plugin::i18n.locales.listLocales	2023-11-01 13:54:11.993	2023-11-01 13:54:11.993	\N	\N
\.


--
-- Data for Name: up_permissions_role_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.up_permissions_role_links (id, permission_id, role_id, permission_order) FROM stdin;
10942	10942	1	1
10943	10943	1	2
10944	10944	1	3
10945	10945	1	4
10946	10946	1	5
10947	10947	1	6
10948	10948	1	7
10949	10949	1	8
10950	10950	1	9
10951	10951	1	10
10952	10952	1	11
10953	10953	1	12
10954	10954	1	13
10955	10955	1	14
10956	10956	1	15
10957	10957	1	16
10958	10958	1	17
10959	10959	1	18
10960	10960	1	19
10961	10961	1	20
10962	10962	1	21
10963	10963	1	22
10964	10964	1	23
10965	10965	1	24
10966	10966	1	25
10967	10967	1	26
10968	10968	1	27
10969	10969	1	28
10970	10970	1	29
10971	10971	1	30
10972	10972	1	31
10973	10973	1	32
10974	10974	1	33
10975	10975	1	34
10976	10976	1	35
10977	10977	1	36
10978	10978	1	37
10979	10979	1	38
10980	10980	1	39
10981	10981	2	1
10982	10982	2	2
10983	10983	2	3
10984	10984	2	4
10985	10985	2	5
10986	10986	2	6
10987	10987	2	7
10988	10988	2	8
10989	10989	2	9
10990	10990	2	10
10991	10991	2	11
10992	10992	2	12
10993	10993	2	13
10994	10994	2	14
10995	10995	2	15
10996	10996	2	16
10997	10997	2	17
10998	10998	2	18
10999	10999	2	19
11000	11000	2	20
11001	11001	2	21
11002	11002	2	22
11003	11003	2	23
11004	11004	2	24
11005	11005	2	25
11006	11006	2	26
11007	11007	2	27
11008	11008	2	28
11009	11009	2	29
11010	11010	2	30
11011	11011	2	31
11012	11012	2	32
11013	11013	2	33
11014	11014	2	34
11015	11015	2	35
11016	11016	2	36
11017	11017	2	37
11018	11018	2	38
11019	11019	2	39
\.


--
-- Data for Name: up_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.up_roles (id, name, description, type, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	Authenticated	Default role given to authenticated user.	authenticated	2023-09-06 02:41:10.694	2023-09-06 02:41:10.694	\N	\N
2	Public	Default role given to unauthenticated user.	public	2023-09-06 02:41:10.702	2023-09-06 02:41:10.702	\N	\N
\.


--
-- Data for Name: up_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.up_users (id, username, email, provider, password, reset_password_token, confirmation_token, confirmed, blocked, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
\.


--
-- Data for Name: up_users_role_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.up_users_role_links (id, user_id, role_id, user_order) FROM stdin;
\.


--
-- Data for Name: upload_folders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upload_folders (id, name, path_id, path, created_at, updated_at, created_by_id, updated_by_id) FROM stdin;
1	API Uploads	1	/1	2023-09-17 01:27:00.723	2023-09-17 01:27:00.723	\N	\N
\.


--
-- Data for Name: upload_folders_parent_links; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.upload_folders_parent_links (id, folder_id, inv_folder_id, folder_order) FROM stdin;
\.


--
-- Name: admin_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admin_permissions_id_seq', 513, true);


--
-- Name: admin_permissions_role_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admin_permissions_role_links_id_seq', 583, true);


--
-- Name: admin_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admin_roles_id_seq', 3, true);


--
-- Name: admin_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admin_users_id_seq', 1, true);


--
-- Name: admin_users_roles_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admin_users_roles_links_id_seq', 1, true);


--
-- Name: components_elements_buttons_arrays_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_buttons_arrays_components_id_seq', 6, true);


--
-- Name: components_elements_buttons_arrays_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_buttons_arrays_id_seq', 4, true);


--
-- Name: components_elements_buttons_flyout_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_buttons_flyout_links_id_seq', 2, true);


--
-- Name: components_elements_buttons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_buttons_id_seq', 25, true);


--
-- Name: components_elements_date_values_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_date_values_id_seq', 36, true);


--
-- Name: components_elements_faqs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_faqs_id_seq', 1, false);


--
-- Name: components_elements_features_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_features_id_seq', 40, true);


--
-- Name: components_elements_fonts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_fonts_id_seq', 5, true);


--
-- Name: components_elements_input_options_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_input_options_id_seq', 24, true);


--
-- Name: components_elements_inputs_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_inputs_components_id_seq', 8, true);


--
-- Name: components_elements_inputs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_inputs_id_seq', 18, true);


--
-- Name: components_elements_logotypes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_logotypes_id_seq', 2, true);


--
-- Name: components_elements_recievers_admin_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_recievers_admin_links_id_seq', 1, false);


--
-- Name: components_elements_recievers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_recievers_id_seq', 2, true);


--
-- Name: components_elements_recievers_user_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_recievers_user_links_id_seq', 1, false);


--
-- Name: components_elements_request_inputs_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_request_inputs_components_id_seq', 52, true);


--
-- Name: components_elements_request_inputs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_request_inputs_id_seq', 340, true);


--
-- Name: components_elements_slides_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_slides_components_id_seq', 2, true);


--
-- Name: components_elements_slides_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_elements_slides_id_seq', 6, true);


--
-- Name: components_functions_configs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_functions_configs_id_seq', 1, false);


--
-- Name: components_functions_form_side_effects_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_functions_form_side_effects_components_id_seq', 2, true);


--
-- Name: components_functions_form_side_effects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_functions_form_side_effects_id_seq', 2, true);


--
-- Name: components_page_blocks_alert_blocks_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_alert_blocks_components_id_seq', 1, false);


--
-- Name: components_page_blocks_alert_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_alert_blocks_id_seq', 1, true);


--
-- Name: components_page_blocks_contact_section_blocks_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_contact_section_blocks_components_id_seq', 1, false);


--
-- Name: components_page_blocks_contact_section_blocks_form_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_contact_section_blocks_form_links_id_seq', 2, true);


--
-- Name: components_page_blocks_contact_section_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_contact_section_blocks_id_seq', 2, true);


--
-- Name: components_page_blocks_cta_section_blocks_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_cta_section_blocks_components_id_seq', 4, true);


--
-- Name: components_page_blocks_cta_section_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_cta_section_blocks_id_seq', 2, true);


--
-- Name: components_page_blocks_faqs_blocks_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_faqs_blocks_components_id_seq', 1, false);


--
-- Name: components_page_blocks_faqs_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_faqs_blocks_id_seq', 1, true);


--
-- Name: components_page_blocks_features_section_blocks_component_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_features_section_blocks_component_id_seq', 48, true);


--
-- Name: components_page_blocks_features_section_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_features_section_blocks_id_seq', 2, true);


--
-- Name: components_page_blocks_footer_blocks_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_footer_blocks_components_id_seq', 5, true);


--
-- Name: components_page_blocks_footer_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_footer_blocks_id_seq', 1, true);


--
-- Name: components_page_blocks_header_section_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_header_section_blocks_id_seq', 1, false);


--
-- Name: components_page_blocks_hero_section_blocks_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_hero_section_blocks_components_id_seq', 4, true);


--
-- Name: components_page_blocks_hero_section_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_hero_section_blocks_id_seq', 9, true);


--
-- Name: components_page_blocks_incentives_blocks_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_incentives_blocks_components_id_seq', 1, false);


--
-- Name: components_page_blocks_incentives_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_incentives_blocks_id_seq', 1, false);


--
-- Name: components_page_blocks_logotypes_cloud_blocks_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_logotypes_cloud_blocks_components_id_seq', 1, false);


--
-- Name: components_page_blocks_logotypes_cloud_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_logotypes_cloud_blocks_id_seq', 1, false);


--
-- Name: components_page_blocks_navbar_blocks_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_navbar_blocks_components_id_seq', 8, true);


--
-- Name: components_page_blocks_navbar_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_navbar_blocks_id_seq', 1, true);


--
-- Name: components_page_blocks_not_found_blocks_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_not_found_blocks_components_id_seq', 2, true);


--
-- Name: components_page_blocks_not_found_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_not_found_blocks_id_seq', 2, true);


--
-- Name: components_page_blocks_pricing_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_pricing_blocks_id_seq', 1, false);


--
-- Name: components_page_blocks_pricing_blocks_tiers_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_pricing_blocks_tiers_links_id_seq', 1, false);


--
-- Name: components_page_blocks_reviews_list_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_reviews_list_blocks_id_seq', 2, true);


--
-- Name: components_page_blocks_reviews_list_blocks_reviews_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_reviews_list_blocks_reviews_links_id_seq', 1, false);


--
-- Name: components_page_blocks_reviews_table_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_reviews_table_blocks_id_seq', 1, false);


--
-- Name: components_page_blocks_slider_blocks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_slider_blocks_id_seq', 2, true);


--
-- Name: components_page_blocks_slider_blocks_slider_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.components_page_blocks_slider_blocks_slider_links_id_seq', 2, true);


--
-- Name: configurations_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.configurations_components_id_seq', 1, false);


--
-- Name: configurations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.configurations_id_seq', 1, false);


--
-- Name: currencies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.currencies_id_seq', 2, true);


--
-- Name: currencies_localizations_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.currencies_localizations_links_id_seq', 2, true);


--
-- Name: email_templates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.email_templates_id_seq', 1, false);


--
-- Name: files_folder_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.files_folder_links_id_seq', 7, true);


--
-- Name: files_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.files_id_seq', 88, true);


--
-- Name: files_related_morphs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.files_related_morphs_id_seq', 117, true);


--
-- Name: flyouts_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.flyouts_components_id_seq', 2, true);


--
-- Name: flyouts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.flyouts_id_seq', 2, true);


--
-- Name: flyouts_localizations_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.flyouts_localizations_links_id_seq', 1, false);


--
-- Name: footers_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.footers_components_id_seq', 1, true);


--
-- Name: footers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.footers_id_seq', 1, true);


--
-- Name: footers_localizations_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.footers_localizations_links_id_seq', 1, false);


--
-- Name: form_requests_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.form_requests_components_id_seq', 324, true);


--
-- Name: form_requests_form_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.form_requests_form_links_id_seq', 35, true);


--
-- Name: form_requests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.form_requests_id_seq', 36, true);


--
-- Name: forms_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.forms_components_id_seq', 22, true);


--
-- Name: forms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.forms_id_seq', 1, true);


--
-- Name: forms_localizations_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.forms_localizations_links_id_seq', 1, false);


--
-- Name: i18n_locale_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.i18n_locale_id_seq', 2, true);


--
-- Name: layouts_footer_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.layouts_footer_links_id_seq', 4, true);


--
-- Name: layouts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.layouts_id_seq', 2, true);


--
-- Name: layouts_localizations_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.layouts_localizations_links_id_seq', 1, false);


--
-- Name: layouts_modals_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.layouts_modals_links_id_seq', 2, true);


--
-- Name: layouts_navbar_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.layouts_navbar_links_id_seq', 2, true);


--
-- Name: layouts_sidebar_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.layouts_sidebar_links_id_seq', 1, true);


--
-- Name: layouts_slide_overs_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.layouts_slide_overs_links_id_seq', 2, true);


--
-- Name: layouts_topbar_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.layouts_topbar_links_id_seq', 1, false);


--
-- Name: loaders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.loaders_id_seq', 1, false);


--
-- Name: metatags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.metatags_id_seq', 1, true);


--
-- Name: metatags_localizations_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.metatags_localizations_links_id_seq', 1, false);


--
-- Name: modals_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.modals_components_id_seq', 1, true);


--
-- Name: modals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.modals_id_seq', 1, true);


--
-- Name: modals_localizations_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.modals_localizations_links_id_seq', 1, false);


--
-- Name: navbars_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.navbars_components_id_seq', 1, true);


--
-- Name: navbars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.navbars_id_seq', 1, true);


--
-- Name: navbars_localizations_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.navbars_localizations_links_id_seq', 1, false);


--
-- Name: pages_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pages_components_id_seq', 29, true);


--
-- Name: pages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pages_id_seq', 7, true);


--
-- Name: pages_layout_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pages_layout_links_id_seq', 14, true);


--
-- Name: pages_localizations_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pages_localizations_links_id_seq', 2, true);


--
-- Name: pages_metatag_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pages_metatag_links_id_seq', 2, true);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reviews_id_seq', 5, true);


--
-- Name: robots_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.robots_id_seq', 1, false);


--
-- Name: sidebars_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sidebars_components_id_seq', 1, true);


--
-- Name: sidebars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sidebars_id_seq', 1, true);


--
-- Name: sidebars_localizations_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sidebars_localizations_links_id_seq', 1, false);


--
-- Name: slide_overs_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.slide_overs_components_id_seq', 1, true);


--
-- Name: slide_overs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.slide_overs_id_seq', 1, true);


--
-- Name: slide_overs_localizations_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.slide_overs_localizations_links_id_seq', 1, false);


--
-- Name: sliders_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sliders_components_id_seq', 6, true);


--
-- Name: sliders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sliders_id_seq', 1, true);


--
-- Name: sliders_localizations_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sliders_localizations_links_id_seq', 1, false);


--
-- Name: strapi_api_token_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strapi_api_token_permissions_id_seq', 1, false);


--
-- Name: strapi_api_token_permissions_token_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strapi_api_token_permissions_token_links_id_seq', 1, false);


--
-- Name: strapi_api_tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strapi_api_tokens_id_seq', 1, false);


--
-- Name: strapi_core_store_settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strapi_core_store_settings_id_seq', 107, true);


--
-- Name: strapi_database_schema_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strapi_database_schema_id_seq', 4, true);


--
-- Name: strapi_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strapi_migrations_id_seq', 1, false);


--
-- Name: strapi_transfer_token_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strapi_transfer_token_permissions_id_seq', 1, false);


--
-- Name: strapi_transfer_token_permissions_token_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strapi_transfer_token_permissions_token_links_id_seq', 1, false);


--
-- Name: strapi_transfer_tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strapi_transfer_tokens_id_seq', 1, false);


--
-- Name: strapi_webhooks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.strapi_webhooks_id_seq', 1, false);


--
-- Name: telegrams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.telegrams_id_seq', 1, false);


--
-- Name: themes_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.themes_components_id_seq', 10, true);


--
-- Name: themes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.themes_id_seq', 1, true);


--
-- Name: tiers_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tiers_components_id_seq', 16, true);


--
-- Name: tiers_currency_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tiers_currency_links_id_seq', 2, true);


--
-- Name: tiers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tiers_id_seq', 2, true);


--
-- Name: tiers_localizations_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tiers_localizations_links_id_seq', 1, false);


--
-- Name: topbars_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.topbars_components_id_seq', 1, true);


--
-- Name: topbars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.topbars_id_seq', 1, true);


--
-- Name: topbars_localizations_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.topbars_localizations_links_id_seq', 1, false);


--
-- Name: up_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.up_permissions_id_seq', 11019, true);


--
-- Name: up_permissions_role_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.up_permissions_role_links_id_seq', 11019, true);


--
-- Name: up_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.up_roles_id_seq', 2, true);


--
-- Name: up_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.up_users_id_seq', 1, false);


--
-- Name: up_users_role_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.up_users_role_links_id_seq', 1, false);


--
-- Name: upload_folders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.upload_folders_id_seq', 1, true);


--
-- Name: upload_folders_parent_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.upload_folders_parent_links_id_seq', 1, false);


--
-- Name: admin_permissions admin_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_permissions
    ADD CONSTRAINT admin_permissions_pkey PRIMARY KEY (id);


--
-- Name: admin_permissions_role_links admin_permissions_role_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_permissions_role_links
    ADD CONSTRAINT admin_permissions_role_links_pkey PRIMARY KEY (id);


--
-- Name: admin_permissions_role_links admin_permissions_role_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_permissions_role_links
    ADD CONSTRAINT admin_permissions_role_links_unique UNIQUE (permission_id, role_id);


--
-- Name: admin_roles admin_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_roles
    ADD CONSTRAINT admin_roles_pkey PRIMARY KEY (id);


--
-- Name: admin_users admin_users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_users
    ADD CONSTRAINT admin_users_pkey PRIMARY KEY (id);


--
-- Name: admin_users_roles_links admin_users_roles_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_users_roles_links
    ADD CONSTRAINT admin_users_roles_links_pkey PRIMARY KEY (id);


--
-- Name: admin_users_roles_links admin_users_roles_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_users_roles_links
    ADD CONSTRAINT admin_users_roles_links_unique UNIQUE (user_id, role_id);


--
-- Name: components_elements_buttons_arrays_components components_elements_buttons_arrays_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_buttons_arrays_components
    ADD CONSTRAINT components_elements_buttons_arrays_components_pkey PRIMARY KEY (id);


--
-- Name: components_elements_buttons_arrays components_elements_buttons_arrays_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_buttons_arrays
    ADD CONSTRAINT components_elements_buttons_arrays_pkey PRIMARY KEY (id);


--
-- Name: components_elements_buttons_arrays_components components_elements_buttons_arrays_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_buttons_arrays_components
    ADD CONSTRAINT components_elements_buttons_arrays_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_elements_buttons_flyout_links components_elements_buttons_flyout_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_buttons_flyout_links
    ADD CONSTRAINT components_elements_buttons_flyout_links_pkey PRIMARY KEY (id);


--
-- Name: components_elements_buttons_flyout_links components_elements_buttons_flyout_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_buttons_flyout_links
    ADD CONSTRAINT components_elements_buttons_flyout_links_unique UNIQUE (button_id, flyout_id);


--
-- Name: components_elements_buttons components_elements_buttons_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_buttons
    ADD CONSTRAINT components_elements_buttons_pkey PRIMARY KEY (id);


--
-- Name: components_elements_date_values components_elements_date_values_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_date_values
    ADD CONSTRAINT components_elements_date_values_pkey PRIMARY KEY (id);


--
-- Name: components_elements_faqs components_elements_faqs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_faqs
    ADD CONSTRAINT components_elements_faqs_pkey PRIMARY KEY (id);


--
-- Name: components_elements_features components_elements_features_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_features
    ADD CONSTRAINT components_elements_features_pkey PRIMARY KEY (id);


--
-- Name: components_elements_fonts components_elements_fonts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_fonts
    ADD CONSTRAINT components_elements_fonts_pkey PRIMARY KEY (id);


--
-- Name: components_elements_input_options components_elements_input_options_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_input_options
    ADD CONSTRAINT components_elements_input_options_pkey PRIMARY KEY (id);


--
-- Name: components_elements_inputs_components components_elements_inputs_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_inputs_components
    ADD CONSTRAINT components_elements_inputs_components_pkey PRIMARY KEY (id);


--
-- Name: components_elements_inputs components_elements_inputs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_inputs
    ADD CONSTRAINT components_elements_inputs_pkey PRIMARY KEY (id);


--
-- Name: components_elements_inputs_components components_elements_inputs_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_inputs_components
    ADD CONSTRAINT components_elements_inputs_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_elements_logotypes components_elements_logotypes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_logotypes
    ADD CONSTRAINT components_elements_logotypes_pkey PRIMARY KEY (id);


--
-- Name: components_elements_recievers_admin_links components_elements_recievers_admin_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_recievers_admin_links
    ADD CONSTRAINT components_elements_recievers_admin_links_pkey PRIMARY KEY (id);


--
-- Name: components_elements_recievers_admin_links components_elements_recievers_admin_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_recievers_admin_links
    ADD CONSTRAINT components_elements_recievers_admin_links_unique UNIQUE (reciever_id, user_id);


--
-- Name: components_elements_recievers components_elements_recievers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_recievers
    ADD CONSTRAINT components_elements_recievers_pkey PRIMARY KEY (id);


--
-- Name: components_elements_recievers_user_links components_elements_recievers_user_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_recievers_user_links
    ADD CONSTRAINT components_elements_recievers_user_links_pkey PRIMARY KEY (id);


--
-- Name: components_elements_recievers_user_links components_elements_recievers_user_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_recievers_user_links
    ADD CONSTRAINT components_elements_recievers_user_links_unique UNIQUE (reciever_id, user_id);


--
-- Name: components_elements_request_inputs_components components_elements_request_inputs_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_request_inputs_components
    ADD CONSTRAINT components_elements_request_inputs_components_pkey PRIMARY KEY (id);


--
-- Name: components_elements_request_inputs components_elements_request_inputs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_request_inputs
    ADD CONSTRAINT components_elements_request_inputs_pkey PRIMARY KEY (id);


--
-- Name: components_elements_request_inputs_components components_elements_request_inputs_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_request_inputs_components
    ADD CONSTRAINT components_elements_request_inputs_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_elements_slides_components components_elements_slides_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_slides_components
    ADD CONSTRAINT components_elements_slides_components_pkey PRIMARY KEY (id);


--
-- Name: components_elements_slides components_elements_slides_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_slides
    ADD CONSTRAINT components_elements_slides_pkey PRIMARY KEY (id);


--
-- Name: components_elements_slides_components components_elements_slides_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_slides_components
    ADD CONSTRAINT components_elements_slides_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_functions_configs components_functions_configs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_functions_configs
    ADD CONSTRAINT components_functions_configs_pkey PRIMARY KEY (id);


--
-- Name: components_functions_form_side_effects_components components_functions_form_side_effects_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_functions_form_side_effects_components
    ADD CONSTRAINT components_functions_form_side_effects_components_pkey PRIMARY KEY (id);


--
-- Name: components_functions_form_side_effects components_functions_form_side_effects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_functions_form_side_effects
    ADD CONSTRAINT components_functions_form_side_effects_pkey PRIMARY KEY (id);


--
-- Name: components_functions_form_side_effects_components components_functions_form_side_effects_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_functions_form_side_effects_components
    ADD CONSTRAINT components_functions_form_side_effects_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_page_blocks_alert_blocks_components components_page_blocks_alert_blocks_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_alert_blocks_components
    ADD CONSTRAINT components_page_blocks_alert_blocks_components_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_alert_blocks components_page_blocks_alert_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_alert_blocks
    ADD CONSTRAINT components_page_blocks_alert_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_alert_blocks_components components_page_blocks_alert_blocks_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_alert_blocks_components
    ADD CONSTRAINT components_page_blocks_alert_blocks_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_page_blocks_contact_section_blocks_components components_page_blocks_contact_section_blocks_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_contact_section_blocks_components
    ADD CONSTRAINT components_page_blocks_contact_section_blocks_components_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_contact_section_blocks_form_links components_page_blocks_contact_section_blocks_form_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_contact_section_blocks_form_links
    ADD CONSTRAINT components_page_blocks_contact_section_blocks_form_links_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_contact_section_blocks_form_links components_page_blocks_contact_section_blocks_form_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_contact_section_blocks_form_links
    ADD CONSTRAINT components_page_blocks_contact_section_blocks_form_links_unique UNIQUE (contact_section_block_id, form_id);


--
-- Name: components_page_blocks_contact_section_blocks components_page_blocks_contact_section_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_contact_section_blocks
    ADD CONSTRAINT components_page_blocks_contact_section_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_contact_section_blocks_components components_page_blocks_contact_section_blocks_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_contact_section_blocks_components
    ADD CONSTRAINT components_page_blocks_contact_section_blocks_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_page_blocks_cta_section_blocks_components components_page_blocks_cta_section_blocks_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_cta_section_blocks_components
    ADD CONSTRAINT components_page_blocks_cta_section_blocks_components_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_cta_section_blocks components_page_blocks_cta_section_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_cta_section_blocks
    ADD CONSTRAINT components_page_blocks_cta_section_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_cta_section_blocks_components components_page_blocks_cta_section_blocks_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_cta_section_blocks_components
    ADD CONSTRAINT components_page_blocks_cta_section_blocks_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_page_blocks_faqs_blocks_components components_page_blocks_faqs_blocks_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_faqs_blocks_components
    ADD CONSTRAINT components_page_blocks_faqs_blocks_components_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_faqs_blocks components_page_blocks_faqs_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_faqs_blocks
    ADD CONSTRAINT components_page_blocks_faqs_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_faqs_blocks_components components_page_blocks_faqs_blocks_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_faqs_blocks_components
    ADD CONSTRAINT components_page_blocks_faqs_blocks_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_page_blocks_features_section_blocks_components components_page_blocks_features_section_blocks_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_features_section_blocks_components
    ADD CONSTRAINT components_page_blocks_features_section_blocks_components_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_features_section_blocks components_page_blocks_features_section_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_features_section_blocks
    ADD CONSTRAINT components_page_blocks_features_section_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_features_section_blocks_components components_page_blocks_features_section_blocks_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_features_section_blocks_components
    ADD CONSTRAINT components_page_blocks_features_section_blocks_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_page_blocks_footer_blocks_components components_page_blocks_footer_blocks_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_footer_blocks_components
    ADD CONSTRAINT components_page_blocks_footer_blocks_components_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_footer_blocks components_page_blocks_footer_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_footer_blocks
    ADD CONSTRAINT components_page_blocks_footer_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_footer_blocks_components components_page_blocks_footer_blocks_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_footer_blocks_components
    ADD CONSTRAINT components_page_blocks_footer_blocks_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_page_blocks_header_section_blocks components_page_blocks_header_section_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_header_section_blocks
    ADD CONSTRAINT components_page_blocks_header_section_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_hero_section_blocks_components components_page_blocks_hero_section_blocks_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_hero_section_blocks_components
    ADD CONSTRAINT components_page_blocks_hero_section_blocks_components_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_hero_section_blocks components_page_blocks_hero_section_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_hero_section_blocks
    ADD CONSTRAINT components_page_blocks_hero_section_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_hero_section_blocks_components components_page_blocks_hero_section_blocks_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_hero_section_blocks_components
    ADD CONSTRAINT components_page_blocks_hero_section_blocks_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_page_blocks_incentives_blocks_components components_page_blocks_incentives_blocks_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_incentives_blocks_components
    ADD CONSTRAINT components_page_blocks_incentives_blocks_components_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_incentives_blocks components_page_blocks_incentives_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_incentives_blocks
    ADD CONSTRAINT components_page_blocks_incentives_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_incentives_blocks_components components_page_blocks_incentives_blocks_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_incentives_blocks_components
    ADD CONSTRAINT components_page_blocks_incentives_blocks_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_page_blocks_logotypes_cloud_blocks_components components_page_blocks_logotypes_cloud_blocks_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_logotypes_cloud_blocks_components
    ADD CONSTRAINT components_page_blocks_logotypes_cloud_blocks_components_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_logotypes_cloud_blocks components_page_blocks_logotypes_cloud_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_logotypes_cloud_blocks
    ADD CONSTRAINT components_page_blocks_logotypes_cloud_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_logotypes_cloud_blocks_components components_page_blocks_logotypes_cloud_blocks_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_logotypes_cloud_blocks_components
    ADD CONSTRAINT components_page_blocks_logotypes_cloud_blocks_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_page_blocks_navbar_blocks_components components_page_blocks_navbar_blocks_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_navbar_blocks_components
    ADD CONSTRAINT components_page_blocks_navbar_blocks_components_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_navbar_blocks components_page_blocks_navbar_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_navbar_blocks
    ADD CONSTRAINT components_page_blocks_navbar_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_navbar_blocks_components components_page_blocks_navbar_blocks_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_navbar_blocks_components
    ADD CONSTRAINT components_page_blocks_navbar_blocks_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_page_blocks_not_found_blocks_components components_page_blocks_not_found_blocks_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_not_found_blocks_components
    ADD CONSTRAINT components_page_blocks_not_found_blocks_components_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_not_found_blocks components_page_blocks_not_found_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_not_found_blocks
    ADD CONSTRAINT components_page_blocks_not_found_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_not_found_blocks_components components_page_blocks_not_found_blocks_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_not_found_blocks_components
    ADD CONSTRAINT components_page_blocks_not_found_blocks_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: components_page_blocks_pricing_blocks components_page_blocks_pricing_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_pricing_blocks
    ADD CONSTRAINT components_page_blocks_pricing_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_pricing_blocks_tiers_links components_page_blocks_pricing_blocks_tiers_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_pricing_blocks_tiers_links
    ADD CONSTRAINT components_page_blocks_pricing_blocks_tiers_links_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_pricing_blocks_tiers_links components_page_blocks_pricing_blocks_tiers_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_pricing_blocks_tiers_links
    ADD CONSTRAINT components_page_blocks_pricing_blocks_tiers_links_unique UNIQUE (pricing_block_id, tier_id);


--
-- Name: components_page_blocks_reviews_list_blocks components_page_blocks_reviews_list_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_reviews_list_blocks
    ADD CONSTRAINT components_page_blocks_reviews_list_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_reviews_list_blocks_reviews_links components_page_blocks_reviews_list_blocks_reviews_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_reviews_list_blocks_reviews_links
    ADD CONSTRAINT components_page_blocks_reviews_list_blocks_reviews_links_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_reviews_list_blocks_reviews_links components_page_blocks_reviews_list_blocks_reviews_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_reviews_list_blocks_reviews_links
    ADD CONSTRAINT components_page_blocks_reviews_list_blocks_reviews_links_unique UNIQUE (reviews_list_block_id, review_id);


--
-- Name: components_page_blocks_reviews_table_blocks components_page_blocks_reviews_table_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_reviews_table_blocks
    ADD CONSTRAINT components_page_blocks_reviews_table_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_slider_blocks components_page_blocks_slider_blocks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_slider_blocks
    ADD CONSTRAINT components_page_blocks_slider_blocks_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_slider_blocks_slider_links components_page_blocks_slider_blocks_slider_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_slider_blocks_slider_links
    ADD CONSTRAINT components_page_blocks_slider_blocks_slider_links_pkey PRIMARY KEY (id);


--
-- Name: components_page_blocks_slider_blocks_slider_links components_page_blocks_slider_blocks_slider_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_slider_blocks_slider_links
    ADD CONSTRAINT components_page_blocks_slider_blocks_slider_links_unique UNIQUE (slider_block_id, slider_id);


--
-- Name: configurations_components configurations_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.configurations_components
    ADD CONSTRAINT configurations_components_pkey PRIMARY KEY (id);


--
-- Name: configurations configurations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.configurations
    ADD CONSTRAINT configurations_pkey PRIMARY KEY (id);


--
-- Name: configurations_components configurations_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.configurations_components
    ADD CONSTRAINT configurations_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: currencies_localizations_links currencies_localizations_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.currencies_localizations_links
    ADD CONSTRAINT currencies_localizations_links_pkey PRIMARY KEY (id);


--
-- Name: currencies_localizations_links currencies_localizations_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.currencies_localizations_links
    ADD CONSTRAINT currencies_localizations_links_unique UNIQUE (currency_id, inv_currency_id);


--
-- Name: currencies currencies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.currencies
    ADD CONSTRAINT currencies_pkey PRIMARY KEY (id);


--
-- Name: email_templates email_templates_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_templates
    ADD CONSTRAINT email_templates_pkey PRIMARY KEY (id);


--
-- Name: files_folder_links files_folder_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files_folder_links
    ADD CONSTRAINT files_folder_links_pkey PRIMARY KEY (id);


--
-- Name: files_folder_links files_folder_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files_folder_links
    ADD CONSTRAINT files_folder_links_unique UNIQUE (file_id, folder_id);


--
-- Name: files files_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_pkey PRIMARY KEY (id);


--
-- Name: files_related_morphs files_related_morphs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files_related_morphs
    ADD CONSTRAINT files_related_morphs_pkey PRIMARY KEY (id);


--
-- Name: flyouts_components flyouts_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flyouts_components
    ADD CONSTRAINT flyouts_components_pkey PRIMARY KEY (id);


--
-- Name: flyouts_localizations_links flyouts_localizations_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flyouts_localizations_links
    ADD CONSTRAINT flyouts_localizations_links_pkey PRIMARY KEY (id);


--
-- Name: flyouts_localizations_links flyouts_localizations_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flyouts_localizations_links
    ADD CONSTRAINT flyouts_localizations_links_unique UNIQUE (flyout_id, inv_flyout_id);


--
-- Name: flyouts flyouts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flyouts
    ADD CONSTRAINT flyouts_pkey PRIMARY KEY (id);


--
-- Name: flyouts flyouts_uid_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flyouts
    ADD CONSTRAINT flyouts_uid_unique UNIQUE (uid);


--
-- Name: flyouts_components flyouts_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flyouts_components
    ADD CONSTRAINT flyouts_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: footers_components footers_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers_components
    ADD CONSTRAINT footers_components_pkey PRIMARY KEY (id);


--
-- Name: footers_localizations_links footers_localizations_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers_localizations_links
    ADD CONSTRAINT footers_localizations_links_pkey PRIMARY KEY (id);


--
-- Name: footers_localizations_links footers_localizations_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers_localizations_links
    ADD CONSTRAINT footers_localizations_links_unique UNIQUE (footer_id, inv_footer_id);


--
-- Name: footers footers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers
    ADD CONSTRAINT footers_pkey PRIMARY KEY (id);


--
-- Name: footers footers_uid_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers
    ADD CONSTRAINT footers_uid_unique UNIQUE (uid);


--
-- Name: footers_components footers_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers_components
    ADD CONSTRAINT footers_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: form_requests_components form_requests_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_requests_components
    ADD CONSTRAINT form_requests_components_pkey PRIMARY KEY (id);


--
-- Name: form_requests_form_links form_requests_form_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_requests_form_links
    ADD CONSTRAINT form_requests_form_links_pkey PRIMARY KEY (id);


--
-- Name: form_requests_form_links form_requests_form_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_requests_form_links
    ADD CONSTRAINT form_requests_form_links_unique UNIQUE (form_request_id, form_id);


--
-- Name: form_requests form_requests_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_requests
    ADD CONSTRAINT form_requests_pkey PRIMARY KEY (id);


--
-- Name: form_requests_components form_requests_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_requests_components
    ADD CONSTRAINT form_requests_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: forms_components forms_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms_components
    ADD CONSTRAINT forms_components_pkey PRIMARY KEY (id);


--
-- Name: forms_localizations_links forms_localizations_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms_localizations_links
    ADD CONSTRAINT forms_localizations_links_pkey PRIMARY KEY (id);


--
-- Name: forms_localizations_links forms_localizations_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms_localizations_links
    ADD CONSTRAINT forms_localizations_links_unique UNIQUE (form_id, inv_form_id);


--
-- Name: forms forms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms
    ADD CONSTRAINT forms_pkey PRIMARY KEY (id);


--
-- Name: forms forms_uid_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms
    ADD CONSTRAINT forms_uid_unique UNIQUE (uid);


--
-- Name: forms_components forms_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms_components
    ADD CONSTRAINT forms_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: i18n_locale i18n_locale_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.i18n_locale
    ADD CONSTRAINT i18n_locale_pkey PRIMARY KEY (id);


--
-- Name: layouts_footer_links layouts_footer_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_footer_links
    ADD CONSTRAINT layouts_footer_links_pkey PRIMARY KEY (id);


--
-- Name: layouts_footer_links layouts_footer_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_footer_links
    ADD CONSTRAINT layouts_footer_links_unique UNIQUE (layout_id, footer_id);


--
-- Name: layouts_localizations_links layouts_localizations_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_localizations_links
    ADD CONSTRAINT layouts_localizations_links_pkey PRIMARY KEY (id);


--
-- Name: layouts_localizations_links layouts_localizations_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_localizations_links
    ADD CONSTRAINT layouts_localizations_links_unique UNIQUE (layout_id, inv_layout_id);


--
-- Name: layouts_modals_links layouts_modals_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_modals_links
    ADD CONSTRAINT layouts_modals_links_pkey PRIMARY KEY (id);


--
-- Name: layouts_modals_links layouts_modals_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_modals_links
    ADD CONSTRAINT layouts_modals_links_unique UNIQUE (layout_id, modal_id);


--
-- Name: layouts_navbar_links layouts_navbar_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_navbar_links
    ADD CONSTRAINT layouts_navbar_links_pkey PRIMARY KEY (id);


--
-- Name: layouts_navbar_links layouts_navbar_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_navbar_links
    ADD CONSTRAINT layouts_navbar_links_unique UNIQUE (layout_id, navbar_id);


--
-- Name: layouts layouts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts
    ADD CONSTRAINT layouts_pkey PRIMARY KEY (id);


--
-- Name: layouts_sidebar_links layouts_sidebar_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_sidebar_links
    ADD CONSTRAINT layouts_sidebar_links_pkey PRIMARY KEY (id);


--
-- Name: layouts_sidebar_links layouts_sidebar_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_sidebar_links
    ADD CONSTRAINT layouts_sidebar_links_unique UNIQUE (layout_id, sidebar_id);


--
-- Name: layouts_slide_overs_links layouts_slide_overs_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_slide_overs_links
    ADD CONSTRAINT layouts_slide_overs_links_pkey PRIMARY KEY (id);


--
-- Name: layouts_slide_overs_links layouts_slide_overs_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_slide_overs_links
    ADD CONSTRAINT layouts_slide_overs_links_unique UNIQUE (layout_id, slide_over_id);


--
-- Name: layouts_topbar_links layouts_topbar_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_topbar_links
    ADD CONSTRAINT layouts_topbar_links_pkey PRIMARY KEY (id);


--
-- Name: layouts_topbar_links layouts_topbar_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_topbar_links
    ADD CONSTRAINT layouts_topbar_links_unique UNIQUE (layout_id, topbar_id);


--
-- Name: layouts layouts_uid_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts
    ADD CONSTRAINT layouts_uid_unique UNIQUE (uid);


--
-- Name: loaders loaders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.loaders
    ADD CONSTRAINT loaders_pkey PRIMARY KEY (id);


--
-- Name: metatags_localizations_links metatags_localizations_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metatags_localizations_links
    ADD CONSTRAINT metatags_localizations_links_pkey PRIMARY KEY (id);


--
-- Name: metatags_localizations_links metatags_localizations_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metatags_localizations_links
    ADD CONSTRAINT metatags_localizations_links_unique UNIQUE (metatag_id, inv_metatag_id);


--
-- Name: metatags metatags_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metatags
    ADD CONSTRAINT metatags_pkey PRIMARY KEY (id);


--
-- Name: modals_components modals_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modals_components
    ADD CONSTRAINT modals_components_pkey PRIMARY KEY (id);


--
-- Name: modals_localizations_links modals_localizations_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modals_localizations_links
    ADD CONSTRAINT modals_localizations_links_pkey PRIMARY KEY (id);


--
-- Name: modals_localizations_links modals_localizations_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modals_localizations_links
    ADD CONSTRAINT modals_localizations_links_unique UNIQUE (modal_id, inv_modal_id);


--
-- Name: modals modals_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modals
    ADD CONSTRAINT modals_pkey PRIMARY KEY (id);


--
-- Name: modals modals_uid_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modals
    ADD CONSTRAINT modals_uid_unique UNIQUE (uid);


--
-- Name: modals_components modals_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modals_components
    ADD CONSTRAINT modals_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: navbars_components navbars_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbars_components
    ADD CONSTRAINT navbars_components_pkey PRIMARY KEY (id);


--
-- Name: navbars_localizations_links navbars_localizations_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbars_localizations_links
    ADD CONSTRAINT navbars_localizations_links_pkey PRIMARY KEY (id);


--
-- Name: navbars_localizations_links navbars_localizations_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbars_localizations_links
    ADD CONSTRAINT navbars_localizations_links_unique UNIQUE (navbar_id, inv_navbar_id);


--
-- Name: navbars navbars_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbars
    ADD CONSTRAINT navbars_pkey PRIMARY KEY (id);


--
-- Name: navbars navbars_uid_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbars
    ADD CONSTRAINT navbars_uid_unique UNIQUE (uid);


--
-- Name: navbars_components navbars_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbars_components
    ADD CONSTRAINT navbars_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: pages_components pages_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_components
    ADD CONSTRAINT pages_components_pkey PRIMARY KEY (id);


--
-- Name: pages_layout_links pages_layout_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_layout_links
    ADD CONSTRAINT pages_layout_links_pkey PRIMARY KEY (id);


--
-- Name: pages_layout_links pages_layout_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_layout_links
    ADD CONSTRAINT pages_layout_links_unique UNIQUE (page_id, layout_id);


--
-- Name: pages_localizations_links pages_localizations_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_localizations_links
    ADD CONSTRAINT pages_localizations_links_pkey PRIMARY KEY (id);


--
-- Name: pages_localizations_links pages_localizations_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_localizations_links
    ADD CONSTRAINT pages_localizations_links_unique UNIQUE (page_id, inv_page_id);


--
-- Name: pages_metatag_links pages_metatag_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_metatag_links
    ADD CONSTRAINT pages_metatag_links_pkey PRIMARY KEY (id);


--
-- Name: pages_metatag_links pages_metatag_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_metatag_links
    ADD CONSTRAINT pages_metatag_links_unique UNIQUE (page_id, metatag_id);


--
-- Name: pages pages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_pkey PRIMARY KEY (id);


--
-- Name: pages_components pages_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_components
    ADD CONSTRAINT pages_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: robots robots_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.robots
    ADD CONSTRAINT robots_pkey PRIMARY KEY (id);


--
-- Name: sidebars_components sidebars_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sidebars_components
    ADD CONSTRAINT sidebars_components_pkey PRIMARY KEY (id);


--
-- Name: sidebars_localizations_links sidebars_localizations_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sidebars_localizations_links
    ADD CONSTRAINT sidebars_localizations_links_pkey PRIMARY KEY (id);


--
-- Name: sidebars_localizations_links sidebars_localizations_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sidebars_localizations_links
    ADD CONSTRAINT sidebars_localizations_links_unique UNIQUE (sidebar_id, inv_sidebar_id);


--
-- Name: sidebars sidebars_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sidebars
    ADD CONSTRAINT sidebars_pkey PRIMARY KEY (id);


--
-- Name: sidebars sidebars_uid_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sidebars
    ADD CONSTRAINT sidebars_uid_unique UNIQUE (uid);


--
-- Name: sidebars_components sidebars_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sidebars_components
    ADD CONSTRAINT sidebars_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: slide_overs_components slide_overs_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slide_overs_components
    ADD CONSTRAINT slide_overs_components_pkey PRIMARY KEY (id);


--
-- Name: slide_overs_localizations_links slide_overs_localizations_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slide_overs_localizations_links
    ADD CONSTRAINT slide_overs_localizations_links_pkey PRIMARY KEY (id);


--
-- Name: slide_overs_localizations_links slide_overs_localizations_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slide_overs_localizations_links
    ADD CONSTRAINT slide_overs_localizations_links_unique UNIQUE (slide_over_id, inv_slide_over_id);


--
-- Name: slide_overs slide_overs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slide_overs
    ADD CONSTRAINT slide_overs_pkey PRIMARY KEY (id);


--
-- Name: slide_overs slide_overs_uid_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slide_overs
    ADD CONSTRAINT slide_overs_uid_unique UNIQUE (uid);


--
-- Name: slide_overs_components slide_overs_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slide_overs_components
    ADD CONSTRAINT slide_overs_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: sliders_components sliders_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders_components
    ADD CONSTRAINT sliders_components_pkey PRIMARY KEY (id);


--
-- Name: sliders_localizations_links sliders_localizations_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders_localizations_links
    ADD CONSTRAINT sliders_localizations_links_pkey PRIMARY KEY (id);


--
-- Name: sliders_localizations_links sliders_localizations_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders_localizations_links
    ADD CONSTRAINT sliders_localizations_links_unique UNIQUE (slider_id, inv_slider_id);


--
-- Name: sliders sliders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders
    ADD CONSTRAINT sliders_pkey PRIMARY KEY (id);


--
-- Name: sliders sliders_uid_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders
    ADD CONSTRAINT sliders_uid_unique UNIQUE (uid);


--
-- Name: sliders_components sliders_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders_components
    ADD CONSTRAINT sliders_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: strapi_api_token_permissions strapi_api_token_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_api_token_permissions
    ADD CONSTRAINT strapi_api_token_permissions_pkey PRIMARY KEY (id);


--
-- Name: strapi_api_token_permissions_token_links strapi_api_token_permissions_token_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_api_token_permissions_token_links
    ADD CONSTRAINT strapi_api_token_permissions_token_links_pkey PRIMARY KEY (id);


--
-- Name: strapi_api_token_permissions_token_links strapi_api_token_permissions_token_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_api_token_permissions_token_links
    ADD CONSTRAINT strapi_api_token_permissions_token_links_unique UNIQUE (api_token_permission_id, api_token_id);


--
-- Name: strapi_api_tokens strapi_api_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_api_tokens
    ADD CONSTRAINT strapi_api_tokens_pkey PRIMARY KEY (id);


--
-- Name: strapi_core_store_settings strapi_core_store_settings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_core_store_settings
    ADD CONSTRAINT strapi_core_store_settings_pkey PRIMARY KEY (id);


--
-- Name: strapi_database_schema strapi_database_schema_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_database_schema
    ADD CONSTRAINT strapi_database_schema_pkey PRIMARY KEY (id);


--
-- Name: strapi_migrations strapi_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_migrations
    ADD CONSTRAINT strapi_migrations_pkey PRIMARY KEY (id);


--
-- Name: strapi_transfer_token_permissions strapi_transfer_token_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions
    ADD CONSTRAINT strapi_transfer_token_permissions_pkey PRIMARY KEY (id);


--
-- Name: strapi_transfer_token_permissions_token_links strapi_transfer_token_permissions_token_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions_token_links
    ADD CONSTRAINT strapi_transfer_token_permissions_token_links_pkey PRIMARY KEY (id);


--
-- Name: strapi_transfer_token_permissions_token_links strapi_transfer_token_permissions_token_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions_token_links
    ADD CONSTRAINT strapi_transfer_token_permissions_token_links_unique UNIQUE (transfer_token_permission_id, transfer_token_id);


--
-- Name: strapi_transfer_tokens strapi_transfer_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_transfer_tokens
    ADD CONSTRAINT strapi_transfer_tokens_pkey PRIMARY KEY (id);


--
-- Name: strapi_webhooks strapi_webhooks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_webhooks
    ADD CONSTRAINT strapi_webhooks_pkey PRIMARY KEY (id);


--
-- Name: telegrams telegrams_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telegrams
    ADD CONSTRAINT telegrams_pkey PRIMARY KEY (id);


--
-- Name: themes_components themes_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.themes_components
    ADD CONSTRAINT themes_components_pkey PRIMARY KEY (id);


--
-- Name: themes themes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.themes
    ADD CONSTRAINT themes_pkey PRIMARY KEY (id);


--
-- Name: themes_components themes_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.themes_components
    ADD CONSTRAINT themes_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: tiers_components tiers_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers_components
    ADD CONSTRAINT tiers_components_pkey PRIMARY KEY (id);


--
-- Name: tiers_currency_links tiers_currency_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers_currency_links
    ADD CONSTRAINT tiers_currency_links_pkey PRIMARY KEY (id);


--
-- Name: tiers_currency_links tiers_currency_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers_currency_links
    ADD CONSTRAINT tiers_currency_links_unique UNIQUE (tier_id, currency_id);


--
-- Name: tiers_localizations_links tiers_localizations_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers_localizations_links
    ADD CONSTRAINT tiers_localizations_links_pkey PRIMARY KEY (id);


--
-- Name: tiers_localizations_links tiers_localizations_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers_localizations_links
    ADD CONSTRAINT tiers_localizations_links_unique UNIQUE (tier_id, inv_tier_id);


--
-- Name: tiers tiers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers
    ADD CONSTRAINT tiers_pkey PRIMARY KEY (id);


--
-- Name: tiers_components tiers_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers_components
    ADD CONSTRAINT tiers_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: topbars_components topbars_components_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topbars_components
    ADD CONSTRAINT topbars_components_pkey PRIMARY KEY (id);


--
-- Name: topbars_localizations_links topbars_localizations_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topbars_localizations_links
    ADD CONSTRAINT topbars_localizations_links_pkey PRIMARY KEY (id);


--
-- Name: topbars_localizations_links topbars_localizations_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topbars_localizations_links
    ADD CONSTRAINT topbars_localizations_links_unique UNIQUE (topbar_id, inv_topbar_id);


--
-- Name: topbars topbars_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topbars
    ADD CONSTRAINT topbars_pkey PRIMARY KEY (id);


--
-- Name: topbars topbars_uid_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topbars
    ADD CONSTRAINT topbars_uid_unique UNIQUE (uid);


--
-- Name: topbars_components topbars_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topbars_components
    ADD CONSTRAINT topbars_unique UNIQUE (entity_id, component_id, field, component_type);


--
-- Name: up_permissions up_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions
    ADD CONSTRAINT up_permissions_pkey PRIMARY KEY (id);


--
-- Name: up_permissions_role_links up_permissions_role_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions_role_links
    ADD CONSTRAINT up_permissions_role_links_pkey PRIMARY KEY (id);


--
-- Name: up_permissions_role_links up_permissions_role_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions_role_links
    ADD CONSTRAINT up_permissions_role_links_unique UNIQUE (permission_id, role_id);


--
-- Name: up_roles up_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_roles
    ADD CONSTRAINT up_roles_pkey PRIMARY KEY (id);


--
-- Name: up_users up_users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_users
    ADD CONSTRAINT up_users_pkey PRIMARY KEY (id);


--
-- Name: up_users_role_links up_users_role_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_users_role_links
    ADD CONSTRAINT up_users_role_links_pkey PRIMARY KEY (id);


--
-- Name: up_users_role_links up_users_role_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_users_role_links
    ADD CONSTRAINT up_users_role_links_unique UNIQUE (user_id, role_id);


--
-- Name: upload_folders_parent_links upload_folders_parent_links_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upload_folders_parent_links
    ADD CONSTRAINT upload_folders_parent_links_pkey PRIMARY KEY (id);


--
-- Name: upload_folders_parent_links upload_folders_parent_links_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upload_folders_parent_links
    ADD CONSTRAINT upload_folders_parent_links_unique UNIQUE (folder_id, inv_folder_id);


--
-- Name: upload_folders upload_folders_path_id_index; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upload_folders
    ADD CONSTRAINT upload_folders_path_id_index UNIQUE (path_id);


--
-- Name: upload_folders upload_folders_path_index; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upload_folders
    ADD CONSTRAINT upload_folders_path_index UNIQUE (path);


--
-- Name: upload_folders upload_folders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upload_folders
    ADD CONSTRAINT upload_folders_pkey PRIMARY KEY (id);


--
-- Name: admin_permissions_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX admin_permissions_created_by_id_fk ON public.admin_permissions USING btree (created_by_id);


--
-- Name: admin_permissions_role_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX admin_permissions_role_links_fk ON public.admin_permissions_role_links USING btree (permission_id);


--
-- Name: admin_permissions_role_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX admin_permissions_role_links_inv_fk ON public.admin_permissions_role_links USING btree (role_id);


--
-- Name: admin_permissions_role_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX admin_permissions_role_links_order_inv_fk ON public.admin_permissions_role_links USING btree (permission_order);


--
-- Name: admin_permissions_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX admin_permissions_updated_by_id_fk ON public.admin_permissions USING btree (updated_by_id);


--
-- Name: admin_roles_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX admin_roles_created_by_id_fk ON public.admin_roles USING btree (created_by_id);


--
-- Name: admin_roles_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX admin_roles_updated_by_id_fk ON public.admin_roles USING btree (updated_by_id);


--
-- Name: admin_users_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX admin_users_created_by_id_fk ON public.admin_users USING btree (created_by_id);


--
-- Name: admin_users_roles_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX admin_users_roles_links_fk ON public.admin_users_roles_links USING btree (user_id);


--
-- Name: admin_users_roles_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX admin_users_roles_links_inv_fk ON public.admin_users_roles_links USING btree (role_id);


--
-- Name: admin_users_roles_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX admin_users_roles_links_order_fk ON public.admin_users_roles_links USING btree (role_order);


--
-- Name: admin_users_roles_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX admin_users_roles_links_order_inv_fk ON public.admin_users_roles_links USING btree (user_order);


--
-- Name: admin_users_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX admin_users_updated_by_id_fk ON public.admin_users USING btree (updated_by_id);


--
-- Name: components_elements_buttons_arrays_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_buttons_arrays_component_type_index ON public.components_elements_buttons_arrays_components USING btree (component_type);


--
-- Name: components_elements_buttons_arrays_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_buttons_arrays_entity_fk ON public.components_elements_buttons_arrays_components USING btree (entity_id);


--
-- Name: components_elements_buttons_arrays_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_buttons_arrays_field_index ON public.components_elements_buttons_arrays_components USING btree (field);


--
-- Name: components_elements_buttons_flyout_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_buttons_flyout_links_fk ON public.components_elements_buttons_flyout_links USING btree (button_id);


--
-- Name: components_elements_buttons_flyout_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_buttons_flyout_links_inv_fk ON public.components_elements_buttons_flyout_links USING btree (flyout_id);


--
-- Name: components_elements_inputs_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_inputs_component_type_index ON public.components_elements_inputs_components USING btree (component_type);


--
-- Name: components_elements_inputs_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_inputs_entity_fk ON public.components_elements_inputs_components USING btree (entity_id);


--
-- Name: components_elements_inputs_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_inputs_field_index ON public.components_elements_inputs_components USING btree (field);


--
-- Name: components_elements_recievers_admin_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_recievers_admin_links_fk ON public.components_elements_recievers_admin_links USING btree (reciever_id);


--
-- Name: components_elements_recievers_admin_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_recievers_admin_links_inv_fk ON public.components_elements_recievers_admin_links USING btree (user_id);


--
-- Name: components_elements_recievers_user_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_recievers_user_links_fk ON public.components_elements_recievers_user_links USING btree (reciever_id);


--
-- Name: components_elements_recievers_user_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_recievers_user_links_inv_fk ON public.components_elements_recievers_user_links USING btree (user_id);


--
-- Name: components_elements_request_inputs_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_request_inputs_component_type_index ON public.components_elements_request_inputs_components USING btree (component_type);


--
-- Name: components_elements_request_inputs_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_request_inputs_entity_fk ON public.components_elements_request_inputs_components USING btree (entity_id);


--
-- Name: components_elements_request_inputs_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_request_inputs_field_index ON public.components_elements_request_inputs_components USING btree (field);


--
-- Name: components_elements_slides_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_slides_component_type_index ON public.components_elements_slides_components USING btree (component_type);


--
-- Name: components_elements_slides_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_slides_entity_fk ON public.components_elements_slides_components USING btree (entity_id);


--
-- Name: components_elements_slides_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_elements_slides_field_index ON public.components_elements_slides_components USING btree (field);


--
-- Name: components_functions_form_side_effects_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_functions_form_side_effects_component_type_index ON public.components_functions_form_side_effects_components USING btree (component_type);


--
-- Name: components_functions_form_side_effects_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_functions_form_side_effects_entity_fk ON public.components_functions_form_side_effects_components USING btree (entity_id);


--
-- Name: components_functions_form_side_effects_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_functions_form_side_effects_field_index ON public.components_functions_form_side_effects_components USING btree (field);


--
-- Name: components_page_blocks_alert_blocks_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_alert_blocks_component_type_index ON public.components_page_blocks_alert_blocks_components USING btree (component_type);


--
-- Name: components_page_blocks_alert_blocks_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_alert_blocks_entity_fk ON public.components_page_blocks_alert_blocks_components USING btree (entity_id);


--
-- Name: components_page_blocks_alert_blocks_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_alert_blocks_field_index ON public.components_page_blocks_alert_blocks_components USING btree (field);


--
-- Name: components_page_blocks_contact_section_blocks_component_type_in; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_contact_section_blocks_component_type_in ON public.components_page_blocks_contact_section_blocks_components USING btree (component_type);


--
-- Name: components_page_blocks_contact_section_blocks_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_contact_section_blocks_entity_fk ON public.components_page_blocks_contact_section_blocks_components USING btree (entity_id);


--
-- Name: components_page_blocks_contact_section_blocks_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_contact_section_blocks_field_index ON public.components_page_blocks_contact_section_blocks_components USING btree (field);


--
-- Name: components_page_blocks_contact_section_blocks_form_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_contact_section_blocks_form_links_fk ON public.components_page_blocks_contact_section_blocks_form_links USING btree (contact_section_block_id);


--
-- Name: components_page_blocks_contact_section_blocks_form_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_contact_section_blocks_form_links_inv_fk ON public.components_page_blocks_contact_section_blocks_form_links USING btree (form_id);


--
-- Name: components_page_blocks_cta_section_blocks_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_cta_section_blocks_component_type_index ON public.components_page_blocks_cta_section_blocks_components USING btree (component_type);


--
-- Name: components_page_blocks_cta_section_blocks_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_cta_section_blocks_entity_fk ON public.components_page_blocks_cta_section_blocks_components USING btree (entity_id);


--
-- Name: components_page_blocks_cta_section_blocks_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_cta_section_blocks_field_index ON public.components_page_blocks_cta_section_blocks_components USING btree (field);


--
-- Name: components_page_blocks_faqs_blocks_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_faqs_blocks_component_type_index ON public.components_page_blocks_faqs_blocks_components USING btree (component_type);


--
-- Name: components_page_blocks_faqs_blocks_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_faqs_blocks_entity_fk ON public.components_page_blocks_faqs_blocks_components USING btree (entity_id);


--
-- Name: components_page_blocks_faqs_blocks_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_faqs_blocks_field_index ON public.components_page_blocks_faqs_blocks_components USING btree (field);


--
-- Name: components_page_blocks_features_section_blocks_component_type_i; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_features_section_blocks_component_type_i ON public.components_page_blocks_features_section_blocks_components USING btree (component_type);


--
-- Name: components_page_blocks_features_section_blocks_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_features_section_blocks_entity_fk ON public.components_page_blocks_features_section_blocks_components USING btree (entity_id);


--
-- Name: components_page_blocks_features_section_blocks_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_features_section_blocks_field_index ON public.components_page_blocks_features_section_blocks_components USING btree (field);


--
-- Name: components_page_blocks_footer_blocks_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_footer_blocks_component_type_index ON public.components_page_blocks_footer_blocks_components USING btree (component_type);


--
-- Name: components_page_blocks_footer_blocks_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_footer_blocks_entity_fk ON public.components_page_blocks_footer_blocks_components USING btree (entity_id);


--
-- Name: components_page_blocks_footer_blocks_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_footer_blocks_field_index ON public.components_page_blocks_footer_blocks_components USING btree (field);


--
-- Name: components_page_blocks_hero_section_blocks_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_hero_section_blocks_component_type_index ON public.components_page_blocks_hero_section_blocks_components USING btree (component_type);


--
-- Name: components_page_blocks_hero_section_blocks_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_hero_section_blocks_entity_fk ON public.components_page_blocks_hero_section_blocks_components USING btree (entity_id);


--
-- Name: components_page_blocks_hero_section_blocks_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_hero_section_blocks_field_index ON public.components_page_blocks_hero_section_blocks_components USING btree (field);


--
-- Name: components_page_blocks_incentives_blocks_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_incentives_blocks_component_type_index ON public.components_page_blocks_incentives_blocks_components USING btree (component_type);


--
-- Name: components_page_blocks_incentives_blocks_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_incentives_blocks_entity_fk ON public.components_page_blocks_incentives_blocks_components USING btree (entity_id);


--
-- Name: components_page_blocks_incentives_blocks_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_incentives_blocks_field_index ON public.components_page_blocks_incentives_blocks_components USING btree (field);


--
-- Name: components_page_blocks_logotypes_cloud_blocks_component_type_in; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_logotypes_cloud_blocks_component_type_in ON public.components_page_blocks_logotypes_cloud_blocks_components USING btree (component_type);


--
-- Name: components_page_blocks_logotypes_cloud_blocks_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_logotypes_cloud_blocks_entity_fk ON public.components_page_blocks_logotypes_cloud_blocks_components USING btree (entity_id);


--
-- Name: components_page_blocks_logotypes_cloud_blocks_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_logotypes_cloud_blocks_field_index ON public.components_page_blocks_logotypes_cloud_blocks_components USING btree (field);


--
-- Name: components_page_blocks_navbar_blocks_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_navbar_blocks_component_type_index ON public.components_page_blocks_navbar_blocks_components USING btree (component_type);


--
-- Name: components_page_blocks_navbar_blocks_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_navbar_blocks_entity_fk ON public.components_page_blocks_navbar_blocks_components USING btree (entity_id);


--
-- Name: components_page_blocks_navbar_blocks_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_navbar_blocks_field_index ON public.components_page_blocks_navbar_blocks_components USING btree (field);


--
-- Name: components_page_blocks_not_found_blocks_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_not_found_blocks_component_type_index ON public.components_page_blocks_not_found_blocks_components USING btree (component_type);


--
-- Name: components_page_blocks_not_found_blocks_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_not_found_blocks_entity_fk ON public.components_page_blocks_not_found_blocks_components USING btree (entity_id);


--
-- Name: components_page_blocks_not_found_blocks_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_not_found_blocks_field_index ON public.components_page_blocks_not_found_blocks_components USING btree (field);


--
-- Name: components_page_blocks_pricing_blocks_tiers_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_pricing_blocks_tiers_links_fk ON public.components_page_blocks_pricing_blocks_tiers_links USING btree (pricing_block_id);


--
-- Name: components_page_blocks_pricing_blocks_tiers_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_pricing_blocks_tiers_links_inv_fk ON public.components_page_blocks_pricing_blocks_tiers_links USING btree (tier_id);


--
-- Name: components_page_blocks_pricing_blocks_tiers_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_pricing_blocks_tiers_links_order_fk ON public.components_page_blocks_pricing_blocks_tiers_links USING btree (tier_order);


--
-- Name: components_page_blocks_reviews_list_blocks_reviews_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_reviews_list_blocks_reviews_links_fk ON public.components_page_blocks_reviews_list_blocks_reviews_links USING btree (reviews_list_block_id);


--
-- Name: components_page_blocks_reviews_list_blocks_reviews_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_reviews_list_blocks_reviews_links_inv_fk ON public.components_page_blocks_reviews_list_blocks_reviews_links USING btree (review_id);


--
-- Name: components_page_blocks_reviews_list_blocks_reviews_links_order_; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_reviews_list_blocks_reviews_links_order_ ON public.components_page_blocks_reviews_list_blocks_reviews_links USING btree (review_order);


--
-- Name: components_page_blocks_slider_blocks_slider_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_slider_blocks_slider_links_fk ON public.components_page_blocks_slider_blocks_slider_links USING btree (slider_block_id);


--
-- Name: components_page_blocks_slider_blocks_slider_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX components_page_blocks_slider_blocks_slider_links_inv_fk ON public.components_page_blocks_slider_blocks_slider_links USING btree (slider_id);


--
-- Name: configurations_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX configurations_component_type_index ON public.configurations_components USING btree (component_type);


--
-- Name: configurations_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX configurations_created_by_id_fk ON public.configurations USING btree (created_by_id);


--
-- Name: configurations_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX configurations_entity_fk ON public.configurations_components USING btree (entity_id);


--
-- Name: configurations_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX configurations_field_index ON public.configurations_components USING btree (field);


--
-- Name: configurations_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX configurations_updated_by_id_fk ON public.configurations USING btree (updated_by_id);


--
-- Name: currencies_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX currencies_created_by_id_fk ON public.currencies USING btree (created_by_id);


--
-- Name: currencies_localizations_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX currencies_localizations_links_fk ON public.currencies_localizations_links USING btree (currency_id);


--
-- Name: currencies_localizations_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX currencies_localizations_links_inv_fk ON public.currencies_localizations_links USING btree (inv_currency_id);


--
-- Name: currencies_localizations_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX currencies_localizations_links_order_fk ON public.currencies_localizations_links USING btree (currency_order);


--
-- Name: currencies_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX currencies_updated_by_id_fk ON public.currencies USING btree (updated_by_id);


--
-- Name: email_templates_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX email_templates_created_by_id_fk ON public.email_templates USING btree (created_by_id);


--
-- Name: email_templates_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX email_templates_updated_by_id_fk ON public.email_templates USING btree (updated_by_id);


--
-- Name: files_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX files_created_by_id_fk ON public.files USING btree (created_by_id);


--
-- Name: files_folder_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX files_folder_links_fk ON public.files_folder_links USING btree (file_id);


--
-- Name: files_folder_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX files_folder_links_inv_fk ON public.files_folder_links USING btree (folder_id);


--
-- Name: files_folder_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX files_folder_links_order_inv_fk ON public.files_folder_links USING btree (file_order);


--
-- Name: files_related_morphs_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX files_related_morphs_fk ON public.files_related_morphs USING btree (file_id);


--
-- Name: files_related_morphs_id_column_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX files_related_morphs_id_column_index ON public.files_related_morphs USING btree (related_id);


--
-- Name: files_related_morphs_order_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX files_related_morphs_order_index ON public.files_related_morphs USING btree ("order");


--
-- Name: files_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX files_updated_by_id_fk ON public.files USING btree (updated_by_id);


--
-- Name: flyouts_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX flyouts_component_type_index ON public.flyouts_components USING btree (component_type);


--
-- Name: flyouts_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX flyouts_created_by_id_fk ON public.flyouts USING btree (created_by_id);


--
-- Name: flyouts_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX flyouts_entity_fk ON public.flyouts_components USING btree (entity_id);


--
-- Name: flyouts_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX flyouts_field_index ON public.flyouts_components USING btree (field);


--
-- Name: flyouts_localizations_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX flyouts_localizations_links_fk ON public.flyouts_localizations_links USING btree (flyout_id);


--
-- Name: flyouts_localizations_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX flyouts_localizations_links_inv_fk ON public.flyouts_localizations_links USING btree (inv_flyout_id);


--
-- Name: flyouts_localizations_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX flyouts_localizations_links_order_fk ON public.flyouts_localizations_links USING btree (flyout_order);


--
-- Name: flyouts_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX flyouts_updated_by_id_fk ON public.flyouts USING btree (updated_by_id);


--
-- Name: footers_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX footers_component_type_index ON public.footers_components USING btree (component_type);


--
-- Name: footers_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX footers_created_by_id_fk ON public.footers USING btree (created_by_id);


--
-- Name: footers_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX footers_entity_fk ON public.footers_components USING btree (entity_id);


--
-- Name: footers_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX footers_field_index ON public.footers_components USING btree (field);


--
-- Name: footers_localizations_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX footers_localizations_links_fk ON public.footers_localizations_links USING btree (footer_id);


--
-- Name: footers_localizations_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX footers_localizations_links_inv_fk ON public.footers_localizations_links USING btree (inv_footer_id);


--
-- Name: footers_localizations_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX footers_localizations_links_order_fk ON public.footers_localizations_links USING btree (footer_order);


--
-- Name: footers_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX footers_updated_by_id_fk ON public.footers USING btree (updated_by_id);


--
-- Name: form_requests_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX form_requests_component_type_index ON public.form_requests_components USING btree (component_type);


--
-- Name: form_requests_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX form_requests_created_by_id_fk ON public.form_requests USING btree (created_by_id);


--
-- Name: form_requests_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX form_requests_entity_fk ON public.form_requests_components USING btree (entity_id);


--
-- Name: form_requests_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX form_requests_field_index ON public.form_requests_components USING btree (field);


--
-- Name: form_requests_form_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX form_requests_form_links_fk ON public.form_requests_form_links USING btree (form_request_id);


--
-- Name: form_requests_form_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX form_requests_form_links_inv_fk ON public.form_requests_form_links USING btree (form_id);


--
-- Name: form_requests_form_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX form_requests_form_links_order_inv_fk ON public.form_requests_form_links USING btree (form_request_order);


--
-- Name: form_requests_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX form_requests_updated_by_id_fk ON public.form_requests USING btree (updated_by_id);


--
-- Name: forms_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX forms_component_type_index ON public.forms_components USING btree (component_type);


--
-- Name: forms_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX forms_created_by_id_fk ON public.forms USING btree (created_by_id);


--
-- Name: forms_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX forms_entity_fk ON public.forms_components USING btree (entity_id);


--
-- Name: forms_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX forms_field_index ON public.forms_components USING btree (field);


--
-- Name: forms_localizations_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX forms_localizations_links_fk ON public.forms_localizations_links USING btree (form_id);


--
-- Name: forms_localizations_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX forms_localizations_links_inv_fk ON public.forms_localizations_links USING btree (inv_form_id);


--
-- Name: forms_localizations_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX forms_localizations_links_order_fk ON public.forms_localizations_links USING btree (form_order);


--
-- Name: forms_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX forms_updated_by_id_fk ON public.forms USING btree (updated_by_id);


--
-- Name: i18n_locale_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX i18n_locale_created_by_id_fk ON public.i18n_locale USING btree (created_by_id);


--
-- Name: i18n_locale_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX i18n_locale_updated_by_id_fk ON public.i18n_locale USING btree (updated_by_id);


--
-- Name: layouts_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_created_by_id_fk ON public.layouts USING btree (created_by_id);


--
-- Name: layouts_footer_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_footer_links_fk ON public.layouts_footer_links USING btree (layout_id);


--
-- Name: layouts_footer_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_footer_links_inv_fk ON public.layouts_footer_links USING btree (footer_id);


--
-- Name: layouts_footer_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_footer_links_order_inv_fk ON public.layouts_footer_links USING btree (layout_order);


--
-- Name: layouts_localizations_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_localizations_links_fk ON public.layouts_localizations_links USING btree (layout_id);


--
-- Name: layouts_localizations_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_localizations_links_inv_fk ON public.layouts_localizations_links USING btree (inv_layout_id);


--
-- Name: layouts_localizations_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_localizations_links_order_fk ON public.layouts_localizations_links USING btree (layout_order);


--
-- Name: layouts_modals_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_modals_links_fk ON public.layouts_modals_links USING btree (layout_id);


--
-- Name: layouts_modals_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_modals_links_inv_fk ON public.layouts_modals_links USING btree (modal_id);


--
-- Name: layouts_modals_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_modals_links_order_fk ON public.layouts_modals_links USING btree (modal_order);


--
-- Name: layouts_modals_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_modals_links_order_inv_fk ON public.layouts_modals_links USING btree (layout_order);


--
-- Name: layouts_navbar_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_navbar_links_fk ON public.layouts_navbar_links USING btree (layout_id);


--
-- Name: layouts_navbar_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_navbar_links_inv_fk ON public.layouts_navbar_links USING btree (navbar_id);


--
-- Name: layouts_navbar_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_navbar_links_order_inv_fk ON public.layouts_navbar_links USING btree (layout_order);


--
-- Name: layouts_sidebar_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_sidebar_links_fk ON public.layouts_sidebar_links USING btree (layout_id);


--
-- Name: layouts_sidebar_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_sidebar_links_inv_fk ON public.layouts_sidebar_links USING btree (sidebar_id);


--
-- Name: layouts_sidebar_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_sidebar_links_order_inv_fk ON public.layouts_sidebar_links USING btree (layout_order);


--
-- Name: layouts_slide_overs_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_slide_overs_links_fk ON public.layouts_slide_overs_links USING btree (layout_id);


--
-- Name: layouts_slide_overs_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_slide_overs_links_inv_fk ON public.layouts_slide_overs_links USING btree (slide_over_id);


--
-- Name: layouts_slide_overs_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_slide_overs_links_order_fk ON public.layouts_slide_overs_links USING btree (slide_over_order);


--
-- Name: layouts_slide_overs_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_slide_overs_links_order_inv_fk ON public.layouts_slide_overs_links USING btree (layout_order);


--
-- Name: layouts_topbar_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_topbar_links_fk ON public.layouts_topbar_links USING btree (layout_id);


--
-- Name: layouts_topbar_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_topbar_links_inv_fk ON public.layouts_topbar_links USING btree (topbar_id);


--
-- Name: layouts_topbar_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_topbar_links_order_inv_fk ON public.layouts_topbar_links USING btree (layout_order);


--
-- Name: layouts_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX layouts_updated_by_id_fk ON public.layouts USING btree (updated_by_id);


--
-- Name: loaders_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX loaders_created_by_id_fk ON public.loaders USING btree (created_by_id);


--
-- Name: loaders_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX loaders_updated_by_id_fk ON public.loaders USING btree (updated_by_id);


--
-- Name: metatags_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX metatags_created_by_id_fk ON public.metatags USING btree (created_by_id);


--
-- Name: metatags_localizations_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX metatags_localizations_links_fk ON public.metatags_localizations_links USING btree (metatag_id);


--
-- Name: metatags_localizations_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX metatags_localizations_links_inv_fk ON public.metatags_localizations_links USING btree (inv_metatag_id);


--
-- Name: metatags_localizations_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX metatags_localizations_links_order_fk ON public.metatags_localizations_links USING btree (metatag_order);


--
-- Name: metatags_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX metatags_updated_by_id_fk ON public.metatags USING btree (updated_by_id);


--
-- Name: modals_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX modals_component_type_index ON public.modals_components USING btree (component_type);


--
-- Name: modals_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX modals_created_by_id_fk ON public.modals USING btree (created_by_id);


--
-- Name: modals_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX modals_entity_fk ON public.modals_components USING btree (entity_id);


--
-- Name: modals_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX modals_field_index ON public.modals_components USING btree (field);


--
-- Name: modals_localizations_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX modals_localizations_links_fk ON public.modals_localizations_links USING btree (modal_id);


--
-- Name: modals_localizations_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX modals_localizations_links_inv_fk ON public.modals_localizations_links USING btree (inv_modal_id);


--
-- Name: modals_localizations_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX modals_localizations_links_order_fk ON public.modals_localizations_links USING btree (modal_order);


--
-- Name: modals_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX modals_updated_by_id_fk ON public.modals USING btree (updated_by_id);


--
-- Name: navbars_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX navbars_component_type_index ON public.navbars_components USING btree (component_type);


--
-- Name: navbars_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX navbars_created_by_id_fk ON public.navbars USING btree (created_by_id);


--
-- Name: navbars_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX navbars_entity_fk ON public.navbars_components USING btree (entity_id);


--
-- Name: navbars_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX navbars_field_index ON public.navbars_components USING btree (field);


--
-- Name: navbars_localizations_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX navbars_localizations_links_fk ON public.navbars_localizations_links USING btree (navbar_id);


--
-- Name: navbars_localizations_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX navbars_localizations_links_inv_fk ON public.navbars_localizations_links USING btree (inv_navbar_id);


--
-- Name: navbars_localizations_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX navbars_localizations_links_order_fk ON public.navbars_localizations_links USING btree (navbar_order);


--
-- Name: navbars_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX navbars_updated_by_id_fk ON public.navbars USING btree (updated_by_id);


--
-- Name: pages_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_component_type_index ON public.pages_components USING btree (component_type);


--
-- Name: pages_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_created_by_id_fk ON public.pages USING btree (created_by_id);


--
-- Name: pages_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_entity_fk ON public.pages_components USING btree (entity_id);


--
-- Name: pages_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_field_index ON public.pages_components USING btree (field);


--
-- Name: pages_layout_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_layout_links_fk ON public.pages_layout_links USING btree (page_id);


--
-- Name: pages_layout_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_layout_links_inv_fk ON public.pages_layout_links USING btree (layout_id);


--
-- Name: pages_layout_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_layout_links_order_inv_fk ON public.pages_layout_links USING btree (page_order);


--
-- Name: pages_localizations_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_localizations_links_fk ON public.pages_localizations_links USING btree (page_id);


--
-- Name: pages_localizations_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_localizations_links_inv_fk ON public.pages_localizations_links USING btree (inv_page_id);


--
-- Name: pages_localizations_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_localizations_links_order_fk ON public.pages_localizations_links USING btree (page_order);


--
-- Name: pages_metatag_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_metatag_links_fk ON public.pages_metatag_links USING btree (page_id);


--
-- Name: pages_metatag_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_metatag_links_inv_fk ON public.pages_metatag_links USING btree (metatag_id);


--
-- Name: pages_metatag_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_metatag_links_order_inv_fk ON public.pages_metatag_links USING btree (page_order);


--
-- Name: pages_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX pages_updated_by_id_fk ON public.pages USING btree (updated_by_id);


--
-- Name: reviews_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX reviews_created_by_id_fk ON public.reviews USING btree (created_by_id);


--
-- Name: reviews_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX reviews_updated_by_id_fk ON public.reviews USING btree (updated_by_id);


--
-- Name: robots_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX robots_created_by_id_fk ON public.robots USING btree (created_by_id);


--
-- Name: robots_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX robots_updated_by_id_fk ON public.robots USING btree (updated_by_id);


--
-- Name: sidebars_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sidebars_component_type_index ON public.sidebars_components USING btree (component_type);


--
-- Name: sidebars_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sidebars_created_by_id_fk ON public.sidebars USING btree (created_by_id);


--
-- Name: sidebars_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sidebars_entity_fk ON public.sidebars_components USING btree (entity_id);


--
-- Name: sidebars_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sidebars_field_index ON public.sidebars_components USING btree (field);


--
-- Name: sidebars_localizations_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sidebars_localizations_links_fk ON public.sidebars_localizations_links USING btree (sidebar_id);


--
-- Name: sidebars_localizations_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sidebars_localizations_links_inv_fk ON public.sidebars_localizations_links USING btree (inv_sidebar_id);


--
-- Name: sidebars_localizations_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sidebars_localizations_links_order_fk ON public.sidebars_localizations_links USING btree (sidebar_order);


--
-- Name: sidebars_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sidebars_updated_by_id_fk ON public.sidebars USING btree (updated_by_id);


--
-- Name: slide_overs_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX slide_overs_component_type_index ON public.slide_overs_components USING btree (component_type);


--
-- Name: slide_overs_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX slide_overs_created_by_id_fk ON public.slide_overs USING btree (created_by_id);


--
-- Name: slide_overs_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX slide_overs_entity_fk ON public.slide_overs_components USING btree (entity_id);


--
-- Name: slide_overs_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX slide_overs_field_index ON public.slide_overs_components USING btree (field);


--
-- Name: slide_overs_localizations_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX slide_overs_localizations_links_fk ON public.slide_overs_localizations_links USING btree (slide_over_id);


--
-- Name: slide_overs_localizations_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX slide_overs_localizations_links_inv_fk ON public.slide_overs_localizations_links USING btree (inv_slide_over_id);


--
-- Name: slide_overs_localizations_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX slide_overs_localizations_links_order_fk ON public.slide_overs_localizations_links USING btree (slide_over_order);


--
-- Name: slide_overs_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX slide_overs_updated_by_id_fk ON public.slide_overs USING btree (updated_by_id);


--
-- Name: sliders_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sliders_component_type_index ON public.sliders_components USING btree (component_type);


--
-- Name: sliders_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sliders_created_by_id_fk ON public.sliders USING btree (created_by_id);


--
-- Name: sliders_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sliders_entity_fk ON public.sliders_components USING btree (entity_id);


--
-- Name: sliders_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sliders_field_index ON public.sliders_components USING btree (field);


--
-- Name: sliders_localizations_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sliders_localizations_links_fk ON public.sliders_localizations_links USING btree (slider_id);


--
-- Name: sliders_localizations_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sliders_localizations_links_inv_fk ON public.sliders_localizations_links USING btree (inv_slider_id);


--
-- Name: sliders_localizations_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sliders_localizations_links_order_fk ON public.sliders_localizations_links USING btree (slider_order);


--
-- Name: sliders_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX sliders_updated_by_id_fk ON public.sliders USING btree (updated_by_id);


--
-- Name: strapi_api_token_permissions_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX strapi_api_token_permissions_created_by_id_fk ON public.strapi_api_token_permissions USING btree (created_by_id);


--
-- Name: strapi_api_token_permissions_token_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX strapi_api_token_permissions_token_links_fk ON public.strapi_api_token_permissions_token_links USING btree (api_token_permission_id);


--
-- Name: strapi_api_token_permissions_token_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX strapi_api_token_permissions_token_links_inv_fk ON public.strapi_api_token_permissions_token_links USING btree (api_token_id);


--
-- Name: strapi_api_token_permissions_token_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX strapi_api_token_permissions_token_links_order_inv_fk ON public.strapi_api_token_permissions_token_links USING btree (api_token_permission_order);


--
-- Name: strapi_api_token_permissions_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX strapi_api_token_permissions_updated_by_id_fk ON public.strapi_api_token_permissions USING btree (updated_by_id);


--
-- Name: strapi_api_tokens_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX strapi_api_tokens_created_by_id_fk ON public.strapi_api_tokens USING btree (created_by_id);


--
-- Name: strapi_api_tokens_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX strapi_api_tokens_updated_by_id_fk ON public.strapi_api_tokens USING btree (updated_by_id);


--
-- Name: strapi_transfer_token_permissions_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX strapi_transfer_token_permissions_created_by_id_fk ON public.strapi_transfer_token_permissions USING btree (created_by_id);


--
-- Name: strapi_transfer_token_permissions_token_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX strapi_transfer_token_permissions_token_links_fk ON public.strapi_transfer_token_permissions_token_links USING btree (transfer_token_permission_id);


--
-- Name: strapi_transfer_token_permissions_token_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX strapi_transfer_token_permissions_token_links_inv_fk ON public.strapi_transfer_token_permissions_token_links USING btree (transfer_token_id);


--
-- Name: strapi_transfer_token_permissions_token_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX strapi_transfer_token_permissions_token_links_order_inv_fk ON public.strapi_transfer_token_permissions_token_links USING btree (transfer_token_permission_order);


--
-- Name: strapi_transfer_token_permissions_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX strapi_transfer_token_permissions_updated_by_id_fk ON public.strapi_transfer_token_permissions USING btree (updated_by_id);


--
-- Name: strapi_transfer_tokens_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX strapi_transfer_tokens_created_by_id_fk ON public.strapi_transfer_tokens USING btree (created_by_id);


--
-- Name: strapi_transfer_tokens_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX strapi_transfer_tokens_updated_by_id_fk ON public.strapi_transfer_tokens USING btree (updated_by_id);


--
-- Name: telegrams_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX telegrams_created_by_id_fk ON public.telegrams USING btree (created_by_id);


--
-- Name: telegrams_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX telegrams_updated_by_id_fk ON public.telegrams USING btree (updated_by_id);


--
-- Name: themes_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX themes_component_type_index ON public.themes_components USING btree (component_type);


--
-- Name: themes_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX themes_created_by_id_fk ON public.themes USING btree (created_by_id);


--
-- Name: themes_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX themes_entity_fk ON public.themes_components USING btree (entity_id);


--
-- Name: themes_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX themes_field_index ON public.themes_components USING btree (field);


--
-- Name: themes_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX themes_updated_by_id_fk ON public.themes USING btree (updated_by_id);


--
-- Name: tiers_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tiers_component_type_index ON public.tiers_components USING btree (component_type);


--
-- Name: tiers_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tiers_created_by_id_fk ON public.tiers USING btree (created_by_id);


--
-- Name: tiers_currency_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tiers_currency_links_fk ON public.tiers_currency_links USING btree (tier_id);


--
-- Name: tiers_currency_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tiers_currency_links_inv_fk ON public.tiers_currency_links USING btree (currency_id);


--
-- Name: tiers_currency_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tiers_currency_links_order_inv_fk ON public.tiers_currency_links USING btree (tier_order);


--
-- Name: tiers_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tiers_entity_fk ON public.tiers_components USING btree (entity_id);


--
-- Name: tiers_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tiers_field_index ON public.tiers_components USING btree (field);


--
-- Name: tiers_localizations_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tiers_localizations_links_fk ON public.tiers_localizations_links USING btree (tier_id);


--
-- Name: tiers_localizations_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tiers_localizations_links_inv_fk ON public.tiers_localizations_links USING btree (inv_tier_id);


--
-- Name: tiers_localizations_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tiers_localizations_links_order_fk ON public.tiers_localizations_links USING btree (tier_order);


--
-- Name: tiers_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tiers_updated_by_id_fk ON public.tiers USING btree (updated_by_id);


--
-- Name: topbars_component_type_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX topbars_component_type_index ON public.topbars_components USING btree (component_type);


--
-- Name: topbars_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX topbars_created_by_id_fk ON public.topbars USING btree (created_by_id);


--
-- Name: topbars_entity_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX topbars_entity_fk ON public.topbars_components USING btree (entity_id);


--
-- Name: topbars_field_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX topbars_field_index ON public.topbars_components USING btree (field);


--
-- Name: topbars_localizations_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX topbars_localizations_links_fk ON public.topbars_localizations_links USING btree (topbar_id);


--
-- Name: topbars_localizations_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX topbars_localizations_links_inv_fk ON public.topbars_localizations_links USING btree (inv_topbar_id);


--
-- Name: topbars_localizations_links_order_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX topbars_localizations_links_order_fk ON public.topbars_localizations_links USING btree (topbar_order);


--
-- Name: topbars_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX topbars_updated_by_id_fk ON public.topbars USING btree (updated_by_id);


--
-- Name: up_permissions_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_permissions_created_by_id_fk ON public.up_permissions USING btree (created_by_id);


--
-- Name: up_permissions_role_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_permissions_role_links_fk ON public.up_permissions_role_links USING btree (permission_id);


--
-- Name: up_permissions_role_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_permissions_role_links_inv_fk ON public.up_permissions_role_links USING btree (role_id);


--
-- Name: up_permissions_role_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_permissions_role_links_order_inv_fk ON public.up_permissions_role_links USING btree (permission_order);


--
-- Name: up_permissions_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_permissions_updated_by_id_fk ON public.up_permissions USING btree (updated_by_id);


--
-- Name: up_roles_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_roles_created_by_id_fk ON public.up_roles USING btree (created_by_id);


--
-- Name: up_roles_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_roles_updated_by_id_fk ON public.up_roles USING btree (updated_by_id);


--
-- Name: up_users_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_users_created_by_id_fk ON public.up_users USING btree (created_by_id);


--
-- Name: up_users_role_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_users_role_links_fk ON public.up_users_role_links USING btree (user_id);


--
-- Name: up_users_role_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_users_role_links_inv_fk ON public.up_users_role_links USING btree (role_id);


--
-- Name: up_users_role_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_users_role_links_order_inv_fk ON public.up_users_role_links USING btree (user_order);


--
-- Name: up_users_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX up_users_updated_by_id_fk ON public.up_users USING btree (updated_by_id);


--
-- Name: upload_files_created_at_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX upload_files_created_at_index ON public.files USING btree (created_at);


--
-- Name: upload_files_ext_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX upload_files_ext_index ON public.files USING btree (ext);


--
-- Name: upload_files_folder_path_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX upload_files_folder_path_index ON public.files USING btree (folder_path);


--
-- Name: upload_files_name_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX upload_files_name_index ON public.files USING btree (name);


--
-- Name: upload_files_size_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX upload_files_size_index ON public.files USING btree (size);


--
-- Name: upload_files_updated_at_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX upload_files_updated_at_index ON public.files USING btree (updated_at);


--
-- Name: upload_folders_created_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX upload_folders_created_by_id_fk ON public.upload_folders USING btree (created_by_id);


--
-- Name: upload_folders_parent_links_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX upload_folders_parent_links_fk ON public.upload_folders_parent_links USING btree (folder_id);


--
-- Name: upload_folders_parent_links_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX upload_folders_parent_links_inv_fk ON public.upload_folders_parent_links USING btree (inv_folder_id);


--
-- Name: upload_folders_parent_links_order_inv_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX upload_folders_parent_links_order_inv_fk ON public.upload_folders_parent_links USING btree (folder_order);


--
-- Name: upload_folders_updated_by_id_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX upload_folders_updated_by_id_fk ON public.upload_folders USING btree (updated_by_id);


--
-- Name: admin_permissions admin_permissions_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_permissions
    ADD CONSTRAINT admin_permissions_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_permissions_role_links admin_permissions_role_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_permissions_role_links
    ADD CONSTRAINT admin_permissions_role_links_fk FOREIGN KEY (permission_id) REFERENCES public.admin_permissions(id) ON DELETE CASCADE;


--
-- Name: admin_permissions_role_links admin_permissions_role_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_permissions_role_links
    ADD CONSTRAINT admin_permissions_role_links_inv_fk FOREIGN KEY (role_id) REFERENCES public.admin_roles(id) ON DELETE CASCADE;


--
-- Name: admin_permissions admin_permissions_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_permissions
    ADD CONSTRAINT admin_permissions_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_roles admin_roles_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_roles
    ADD CONSTRAINT admin_roles_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_roles admin_roles_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_roles
    ADD CONSTRAINT admin_roles_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_users admin_users_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_users
    ADD CONSTRAINT admin_users_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: admin_users_roles_links admin_users_roles_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_users_roles_links
    ADD CONSTRAINT admin_users_roles_links_fk FOREIGN KEY (user_id) REFERENCES public.admin_users(id) ON DELETE CASCADE;


--
-- Name: admin_users_roles_links admin_users_roles_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_users_roles_links
    ADD CONSTRAINT admin_users_roles_links_inv_fk FOREIGN KEY (role_id) REFERENCES public.admin_roles(id) ON DELETE CASCADE;


--
-- Name: admin_users admin_users_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin_users
    ADD CONSTRAINT admin_users_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: components_elements_buttons_arrays_components components_elements_buttons_arrays_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_buttons_arrays_components
    ADD CONSTRAINT components_elements_buttons_arrays_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_elements_buttons_arrays(id) ON DELETE CASCADE;


--
-- Name: components_elements_buttons_flyout_links components_elements_buttons_flyout_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_buttons_flyout_links
    ADD CONSTRAINT components_elements_buttons_flyout_links_fk FOREIGN KEY (button_id) REFERENCES public.components_elements_buttons(id) ON DELETE CASCADE;


--
-- Name: components_elements_buttons_flyout_links components_elements_buttons_flyout_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_buttons_flyout_links
    ADD CONSTRAINT components_elements_buttons_flyout_links_inv_fk FOREIGN KEY (flyout_id) REFERENCES public.flyouts(id) ON DELETE CASCADE;


--
-- Name: components_elements_inputs_components components_elements_inputs_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_inputs_components
    ADD CONSTRAINT components_elements_inputs_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_elements_inputs(id) ON DELETE CASCADE;


--
-- Name: components_elements_recievers_admin_links components_elements_recievers_admin_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_recievers_admin_links
    ADD CONSTRAINT components_elements_recievers_admin_links_fk FOREIGN KEY (reciever_id) REFERENCES public.components_elements_recievers(id) ON DELETE CASCADE;


--
-- Name: components_elements_recievers_admin_links components_elements_recievers_admin_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_recievers_admin_links
    ADD CONSTRAINT components_elements_recievers_admin_links_inv_fk FOREIGN KEY (user_id) REFERENCES public.admin_users(id) ON DELETE CASCADE;


--
-- Name: components_elements_recievers_user_links components_elements_recievers_user_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_recievers_user_links
    ADD CONSTRAINT components_elements_recievers_user_links_fk FOREIGN KEY (reciever_id) REFERENCES public.components_elements_recievers(id) ON DELETE CASCADE;


--
-- Name: components_elements_recievers_user_links components_elements_recievers_user_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_recievers_user_links
    ADD CONSTRAINT components_elements_recievers_user_links_inv_fk FOREIGN KEY (user_id) REFERENCES public.up_users(id) ON DELETE CASCADE;


--
-- Name: components_elements_request_inputs_components components_elements_request_inputs_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_request_inputs_components
    ADD CONSTRAINT components_elements_request_inputs_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_elements_request_inputs(id) ON DELETE CASCADE;


--
-- Name: components_elements_slides_components components_elements_slides_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_elements_slides_components
    ADD CONSTRAINT components_elements_slides_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_elements_slides(id) ON DELETE CASCADE;


--
-- Name: components_functions_form_side_effects_components components_functions_form_side_effects_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_functions_form_side_effects_components
    ADD CONSTRAINT components_functions_form_side_effects_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_functions_form_side_effects(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_alert_blocks_components components_page_blocks_alert_blocks_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_alert_blocks_components
    ADD CONSTRAINT components_page_blocks_alert_blocks_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_page_blocks_alert_blocks(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_contact_section_blocks_components components_page_blocks_contact_section_blocks_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_contact_section_blocks_components
    ADD CONSTRAINT components_page_blocks_contact_section_blocks_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_page_blocks_contact_section_blocks(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_contact_section_blocks_form_links components_page_blocks_contact_section_blocks_form_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_contact_section_blocks_form_links
    ADD CONSTRAINT components_page_blocks_contact_section_blocks_form_links_fk FOREIGN KEY (contact_section_block_id) REFERENCES public.components_page_blocks_contact_section_blocks(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_contact_section_blocks_form_links components_page_blocks_contact_section_blocks_form_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_contact_section_blocks_form_links
    ADD CONSTRAINT components_page_blocks_contact_section_blocks_form_links_inv_fk FOREIGN KEY (form_id) REFERENCES public.forms(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_cta_section_blocks_components components_page_blocks_cta_section_blocks_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_cta_section_blocks_components
    ADD CONSTRAINT components_page_blocks_cta_section_blocks_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_page_blocks_cta_section_blocks(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_faqs_blocks_components components_page_blocks_faqs_blocks_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_faqs_blocks_components
    ADD CONSTRAINT components_page_blocks_faqs_blocks_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_page_blocks_faqs_blocks(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_features_section_blocks_components components_page_blocks_features_section_blocks_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_features_section_blocks_components
    ADD CONSTRAINT components_page_blocks_features_section_blocks_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_page_blocks_features_section_blocks(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_footer_blocks_components components_page_blocks_footer_blocks_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_footer_blocks_components
    ADD CONSTRAINT components_page_blocks_footer_blocks_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_page_blocks_footer_blocks(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_hero_section_blocks_components components_page_blocks_hero_section_blocks_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_hero_section_blocks_components
    ADD CONSTRAINT components_page_blocks_hero_section_blocks_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_page_blocks_hero_section_blocks(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_incentives_blocks_components components_page_blocks_incentives_blocks_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_incentives_blocks_components
    ADD CONSTRAINT components_page_blocks_incentives_blocks_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_page_blocks_incentives_blocks(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_logotypes_cloud_blocks_components components_page_blocks_logotypes_cloud_blocks_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_logotypes_cloud_blocks_components
    ADD CONSTRAINT components_page_blocks_logotypes_cloud_blocks_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_page_blocks_logotypes_cloud_blocks(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_navbar_blocks_components components_page_blocks_navbar_blocks_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_navbar_blocks_components
    ADD CONSTRAINT components_page_blocks_navbar_blocks_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_page_blocks_navbar_blocks(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_not_found_blocks_components components_page_blocks_not_found_blocks_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_not_found_blocks_components
    ADD CONSTRAINT components_page_blocks_not_found_blocks_entity_fk FOREIGN KEY (entity_id) REFERENCES public.components_page_blocks_not_found_blocks(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_pricing_blocks_tiers_links components_page_blocks_pricing_blocks_tiers_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_pricing_blocks_tiers_links
    ADD CONSTRAINT components_page_blocks_pricing_blocks_tiers_links_fk FOREIGN KEY (pricing_block_id) REFERENCES public.components_page_blocks_pricing_blocks(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_pricing_blocks_tiers_links components_page_blocks_pricing_blocks_tiers_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_pricing_blocks_tiers_links
    ADD CONSTRAINT components_page_blocks_pricing_blocks_tiers_links_inv_fk FOREIGN KEY (tier_id) REFERENCES public.tiers(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_reviews_list_blocks_reviews_links components_page_blocks_reviews_list_blocks_reviews_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_reviews_list_blocks_reviews_links
    ADD CONSTRAINT components_page_blocks_reviews_list_blocks_reviews_links_fk FOREIGN KEY (reviews_list_block_id) REFERENCES public.components_page_blocks_reviews_list_blocks(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_reviews_list_blocks_reviews_links components_page_blocks_reviews_list_blocks_reviews_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_reviews_list_blocks_reviews_links
    ADD CONSTRAINT components_page_blocks_reviews_list_blocks_reviews_links_inv_fk FOREIGN KEY (review_id) REFERENCES public.reviews(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_slider_blocks_slider_links components_page_blocks_slider_blocks_slider_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_slider_blocks_slider_links
    ADD CONSTRAINT components_page_blocks_slider_blocks_slider_links_fk FOREIGN KEY (slider_block_id) REFERENCES public.components_page_blocks_slider_blocks(id) ON DELETE CASCADE;


--
-- Name: components_page_blocks_slider_blocks_slider_links components_page_blocks_slider_blocks_slider_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.components_page_blocks_slider_blocks_slider_links
    ADD CONSTRAINT components_page_blocks_slider_blocks_slider_links_inv_fk FOREIGN KEY (slider_id) REFERENCES public.sliders(id) ON DELETE CASCADE;


--
-- Name: configurations configurations_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.configurations
    ADD CONSTRAINT configurations_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: configurations_components configurations_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.configurations_components
    ADD CONSTRAINT configurations_entity_fk FOREIGN KEY (entity_id) REFERENCES public.configurations(id) ON DELETE CASCADE;


--
-- Name: configurations configurations_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.configurations
    ADD CONSTRAINT configurations_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: currencies currencies_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.currencies
    ADD CONSTRAINT currencies_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: currencies_localizations_links currencies_localizations_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.currencies_localizations_links
    ADD CONSTRAINT currencies_localizations_links_fk FOREIGN KEY (currency_id) REFERENCES public.currencies(id) ON DELETE CASCADE;


--
-- Name: currencies_localizations_links currencies_localizations_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.currencies_localizations_links
    ADD CONSTRAINT currencies_localizations_links_inv_fk FOREIGN KEY (inv_currency_id) REFERENCES public.currencies(id) ON DELETE CASCADE;


--
-- Name: currencies currencies_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.currencies
    ADD CONSTRAINT currencies_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: email_templates email_templates_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_templates
    ADD CONSTRAINT email_templates_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: email_templates email_templates_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.email_templates
    ADD CONSTRAINT email_templates_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: files files_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: files_folder_links files_folder_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files_folder_links
    ADD CONSTRAINT files_folder_links_fk FOREIGN KEY (file_id) REFERENCES public.files(id) ON DELETE CASCADE;


--
-- Name: files_folder_links files_folder_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files_folder_links
    ADD CONSTRAINT files_folder_links_inv_fk FOREIGN KEY (folder_id) REFERENCES public.upload_folders(id) ON DELETE CASCADE;


--
-- Name: files_related_morphs files_related_morphs_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files_related_morphs
    ADD CONSTRAINT files_related_morphs_fk FOREIGN KEY (file_id) REFERENCES public.files(id) ON DELETE CASCADE;


--
-- Name: files files_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.files
    ADD CONSTRAINT files_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: flyouts flyouts_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flyouts
    ADD CONSTRAINT flyouts_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: flyouts_components flyouts_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flyouts_components
    ADD CONSTRAINT flyouts_entity_fk FOREIGN KEY (entity_id) REFERENCES public.flyouts(id) ON DELETE CASCADE;


--
-- Name: flyouts_localizations_links flyouts_localizations_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flyouts_localizations_links
    ADD CONSTRAINT flyouts_localizations_links_fk FOREIGN KEY (flyout_id) REFERENCES public.flyouts(id) ON DELETE CASCADE;


--
-- Name: flyouts_localizations_links flyouts_localizations_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flyouts_localizations_links
    ADD CONSTRAINT flyouts_localizations_links_inv_fk FOREIGN KEY (inv_flyout_id) REFERENCES public.flyouts(id) ON DELETE CASCADE;


--
-- Name: flyouts flyouts_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flyouts
    ADD CONSTRAINT flyouts_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: footers footers_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers
    ADD CONSTRAINT footers_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: footers_components footers_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers_components
    ADD CONSTRAINT footers_entity_fk FOREIGN KEY (entity_id) REFERENCES public.footers(id) ON DELETE CASCADE;


--
-- Name: footers_localizations_links footers_localizations_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers_localizations_links
    ADD CONSTRAINT footers_localizations_links_fk FOREIGN KEY (footer_id) REFERENCES public.footers(id) ON DELETE CASCADE;


--
-- Name: footers_localizations_links footers_localizations_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers_localizations_links
    ADD CONSTRAINT footers_localizations_links_inv_fk FOREIGN KEY (inv_footer_id) REFERENCES public.footers(id) ON DELETE CASCADE;


--
-- Name: footers footers_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footers
    ADD CONSTRAINT footers_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: form_requests form_requests_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_requests
    ADD CONSTRAINT form_requests_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: form_requests_components form_requests_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_requests_components
    ADD CONSTRAINT form_requests_entity_fk FOREIGN KEY (entity_id) REFERENCES public.form_requests(id) ON DELETE CASCADE;


--
-- Name: form_requests_form_links form_requests_form_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_requests_form_links
    ADD CONSTRAINT form_requests_form_links_fk FOREIGN KEY (form_request_id) REFERENCES public.form_requests(id) ON DELETE CASCADE;


--
-- Name: form_requests_form_links form_requests_form_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_requests_form_links
    ADD CONSTRAINT form_requests_form_links_inv_fk FOREIGN KEY (form_id) REFERENCES public.forms(id) ON DELETE CASCADE;


--
-- Name: form_requests form_requests_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.form_requests
    ADD CONSTRAINT form_requests_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: forms forms_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms
    ADD CONSTRAINT forms_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: forms_components forms_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms_components
    ADD CONSTRAINT forms_entity_fk FOREIGN KEY (entity_id) REFERENCES public.forms(id) ON DELETE CASCADE;


--
-- Name: forms_localizations_links forms_localizations_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms_localizations_links
    ADD CONSTRAINT forms_localizations_links_fk FOREIGN KEY (form_id) REFERENCES public.forms(id) ON DELETE CASCADE;


--
-- Name: forms_localizations_links forms_localizations_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms_localizations_links
    ADD CONSTRAINT forms_localizations_links_inv_fk FOREIGN KEY (inv_form_id) REFERENCES public.forms(id) ON DELETE CASCADE;


--
-- Name: forms forms_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.forms
    ADD CONSTRAINT forms_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: i18n_locale i18n_locale_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.i18n_locale
    ADD CONSTRAINT i18n_locale_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: i18n_locale i18n_locale_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.i18n_locale
    ADD CONSTRAINT i18n_locale_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: layouts layouts_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts
    ADD CONSTRAINT layouts_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: layouts_footer_links layouts_footer_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_footer_links
    ADD CONSTRAINT layouts_footer_links_fk FOREIGN KEY (layout_id) REFERENCES public.layouts(id) ON DELETE CASCADE;


--
-- Name: layouts_footer_links layouts_footer_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_footer_links
    ADD CONSTRAINT layouts_footer_links_inv_fk FOREIGN KEY (footer_id) REFERENCES public.footers(id) ON DELETE CASCADE;


--
-- Name: layouts_localizations_links layouts_localizations_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_localizations_links
    ADD CONSTRAINT layouts_localizations_links_fk FOREIGN KEY (layout_id) REFERENCES public.layouts(id) ON DELETE CASCADE;


--
-- Name: layouts_localizations_links layouts_localizations_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_localizations_links
    ADD CONSTRAINT layouts_localizations_links_inv_fk FOREIGN KEY (inv_layout_id) REFERENCES public.layouts(id) ON DELETE CASCADE;


--
-- Name: layouts_modals_links layouts_modals_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_modals_links
    ADD CONSTRAINT layouts_modals_links_fk FOREIGN KEY (layout_id) REFERENCES public.layouts(id) ON DELETE CASCADE;


--
-- Name: layouts_modals_links layouts_modals_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_modals_links
    ADD CONSTRAINT layouts_modals_links_inv_fk FOREIGN KEY (modal_id) REFERENCES public.modals(id) ON DELETE CASCADE;


--
-- Name: layouts_navbar_links layouts_navbar_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_navbar_links
    ADD CONSTRAINT layouts_navbar_links_fk FOREIGN KEY (layout_id) REFERENCES public.layouts(id) ON DELETE CASCADE;


--
-- Name: layouts_navbar_links layouts_navbar_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_navbar_links
    ADD CONSTRAINT layouts_navbar_links_inv_fk FOREIGN KEY (navbar_id) REFERENCES public.navbars(id) ON DELETE CASCADE;


--
-- Name: layouts_sidebar_links layouts_sidebar_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_sidebar_links
    ADD CONSTRAINT layouts_sidebar_links_fk FOREIGN KEY (layout_id) REFERENCES public.layouts(id) ON DELETE CASCADE;


--
-- Name: layouts_sidebar_links layouts_sidebar_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_sidebar_links
    ADD CONSTRAINT layouts_sidebar_links_inv_fk FOREIGN KEY (sidebar_id) REFERENCES public.sidebars(id) ON DELETE CASCADE;


--
-- Name: layouts_slide_overs_links layouts_slide_overs_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_slide_overs_links
    ADD CONSTRAINT layouts_slide_overs_links_fk FOREIGN KEY (layout_id) REFERENCES public.layouts(id) ON DELETE CASCADE;


--
-- Name: layouts_slide_overs_links layouts_slide_overs_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_slide_overs_links
    ADD CONSTRAINT layouts_slide_overs_links_inv_fk FOREIGN KEY (slide_over_id) REFERENCES public.slide_overs(id) ON DELETE CASCADE;


--
-- Name: layouts_topbar_links layouts_topbar_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_topbar_links
    ADD CONSTRAINT layouts_topbar_links_fk FOREIGN KEY (layout_id) REFERENCES public.layouts(id) ON DELETE CASCADE;


--
-- Name: layouts_topbar_links layouts_topbar_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts_topbar_links
    ADD CONSTRAINT layouts_topbar_links_inv_fk FOREIGN KEY (topbar_id) REFERENCES public.topbars(id) ON DELETE CASCADE;


--
-- Name: layouts layouts_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.layouts
    ADD CONSTRAINT layouts_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: loaders loaders_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.loaders
    ADD CONSTRAINT loaders_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: loaders loaders_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.loaders
    ADD CONSTRAINT loaders_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: metatags metatags_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metatags
    ADD CONSTRAINT metatags_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: metatags_localizations_links metatags_localizations_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metatags_localizations_links
    ADD CONSTRAINT metatags_localizations_links_fk FOREIGN KEY (metatag_id) REFERENCES public.metatags(id) ON DELETE CASCADE;


--
-- Name: metatags_localizations_links metatags_localizations_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metatags_localizations_links
    ADD CONSTRAINT metatags_localizations_links_inv_fk FOREIGN KEY (inv_metatag_id) REFERENCES public.metatags(id) ON DELETE CASCADE;


--
-- Name: metatags metatags_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metatags
    ADD CONSTRAINT metatags_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: modals modals_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modals
    ADD CONSTRAINT modals_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: modals_components modals_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modals_components
    ADD CONSTRAINT modals_entity_fk FOREIGN KEY (entity_id) REFERENCES public.modals(id) ON DELETE CASCADE;


--
-- Name: modals_localizations_links modals_localizations_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modals_localizations_links
    ADD CONSTRAINT modals_localizations_links_fk FOREIGN KEY (modal_id) REFERENCES public.modals(id) ON DELETE CASCADE;


--
-- Name: modals_localizations_links modals_localizations_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modals_localizations_links
    ADD CONSTRAINT modals_localizations_links_inv_fk FOREIGN KEY (inv_modal_id) REFERENCES public.modals(id) ON DELETE CASCADE;


--
-- Name: modals modals_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modals
    ADD CONSTRAINT modals_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: navbars navbars_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbars
    ADD CONSTRAINT navbars_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: navbars_components navbars_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbars_components
    ADD CONSTRAINT navbars_entity_fk FOREIGN KEY (entity_id) REFERENCES public.navbars(id) ON DELETE CASCADE;


--
-- Name: navbars_localizations_links navbars_localizations_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbars_localizations_links
    ADD CONSTRAINT navbars_localizations_links_fk FOREIGN KEY (navbar_id) REFERENCES public.navbars(id) ON DELETE CASCADE;


--
-- Name: navbars_localizations_links navbars_localizations_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbars_localizations_links
    ADD CONSTRAINT navbars_localizations_links_inv_fk FOREIGN KEY (inv_navbar_id) REFERENCES public.navbars(id) ON DELETE CASCADE;


--
-- Name: navbars navbars_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbars
    ADD CONSTRAINT navbars_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: pages pages_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: pages_components pages_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_components
    ADD CONSTRAINT pages_entity_fk FOREIGN KEY (entity_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_layout_links pages_layout_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_layout_links
    ADD CONSTRAINT pages_layout_links_fk FOREIGN KEY (page_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_layout_links pages_layout_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_layout_links
    ADD CONSTRAINT pages_layout_links_inv_fk FOREIGN KEY (layout_id) REFERENCES public.layouts(id) ON DELETE CASCADE;


--
-- Name: pages_localizations_links pages_localizations_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_localizations_links
    ADD CONSTRAINT pages_localizations_links_fk FOREIGN KEY (page_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_localizations_links pages_localizations_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_localizations_links
    ADD CONSTRAINT pages_localizations_links_inv_fk FOREIGN KEY (inv_page_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_metatag_links pages_metatag_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_metatag_links
    ADD CONSTRAINT pages_metatag_links_fk FOREIGN KEY (page_id) REFERENCES public.pages(id) ON DELETE CASCADE;


--
-- Name: pages_metatag_links pages_metatag_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages_metatag_links
    ADD CONSTRAINT pages_metatag_links_inv_fk FOREIGN KEY (metatag_id) REFERENCES public.metatags(id) ON DELETE CASCADE;


--
-- Name: pages pages_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: reviews reviews_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: reviews reviews_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: robots robots_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.robots
    ADD CONSTRAINT robots_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: robots robots_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.robots
    ADD CONSTRAINT robots_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: sidebars sidebars_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sidebars
    ADD CONSTRAINT sidebars_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: sidebars_components sidebars_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sidebars_components
    ADD CONSTRAINT sidebars_entity_fk FOREIGN KEY (entity_id) REFERENCES public.sidebars(id) ON DELETE CASCADE;


--
-- Name: sidebars_localizations_links sidebars_localizations_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sidebars_localizations_links
    ADD CONSTRAINT sidebars_localizations_links_fk FOREIGN KEY (sidebar_id) REFERENCES public.sidebars(id) ON DELETE CASCADE;


--
-- Name: sidebars_localizations_links sidebars_localizations_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sidebars_localizations_links
    ADD CONSTRAINT sidebars_localizations_links_inv_fk FOREIGN KEY (inv_sidebar_id) REFERENCES public.sidebars(id) ON DELETE CASCADE;


--
-- Name: sidebars sidebars_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sidebars
    ADD CONSTRAINT sidebars_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: slide_overs slide_overs_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slide_overs
    ADD CONSTRAINT slide_overs_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: slide_overs_components slide_overs_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slide_overs_components
    ADD CONSTRAINT slide_overs_entity_fk FOREIGN KEY (entity_id) REFERENCES public.slide_overs(id) ON DELETE CASCADE;


--
-- Name: slide_overs_localizations_links slide_overs_localizations_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slide_overs_localizations_links
    ADD CONSTRAINT slide_overs_localizations_links_fk FOREIGN KEY (slide_over_id) REFERENCES public.slide_overs(id) ON DELETE CASCADE;


--
-- Name: slide_overs_localizations_links slide_overs_localizations_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slide_overs_localizations_links
    ADD CONSTRAINT slide_overs_localizations_links_inv_fk FOREIGN KEY (inv_slide_over_id) REFERENCES public.slide_overs(id) ON DELETE CASCADE;


--
-- Name: slide_overs slide_overs_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.slide_overs
    ADD CONSTRAINT slide_overs_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: sliders sliders_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders
    ADD CONSTRAINT sliders_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: sliders_components sliders_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders_components
    ADD CONSTRAINT sliders_entity_fk FOREIGN KEY (entity_id) REFERENCES public.sliders(id) ON DELETE CASCADE;


--
-- Name: sliders_localizations_links sliders_localizations_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders_localizations_links
    ADD CONSTRAINT sliders_localizations_links_fk FOREIGN KEY (slider_id) REFERENCES public.sliders(id) ON DELETE CASCADE;


--
-- Name: sliders_localizations_links sliders_localizations_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders_localizations_links
    ADD CONSTRAINT sliders_localizations_links_inv_fk FOREIGN KEY (inv_slider_id) REFERENCES public.sliders(id) ON DELETE CASCADE;


--
-- Name: sliders sliders_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sliders
    ADD CONSTRAINT sliders_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_api_token_permissions strapi_api_token_permissions_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_api_token_permissions
    ADD CONSTRAINT strapi_api_token_permissions_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_api_token_permissions_token_links strapi_api_token_permissions_token_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_api_token_permissions_token_links
    ADD CONSTRAINT strapi_api_token_permissions_token_links_fk FOREIGN KEY (api_token_permission_id) REFERENCES public.strapi_api_token_permissions(id) ON DELETE CASCADE;


--
-- Name: strapi_api_token_permissions_token_links strapi_api_token_permissions_token_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_api_token_permissions_token_links
    ADD CONSTRAINT strapi_api_token_permissions_token_links_inv_fk FOREIGN KEY (api_token_id) REFERENCES public.strapi_api_tokens(id) ON DELETE CASCADE;


--
-- Name: strapi_api_token_permissions strapi_api_token_permissions_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_api_token_permissions
    ADD CONSTRAINT strapi_api_token_permissions_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_api_tokens strapi_api_tokens_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_api_tokens
    ADD CONSTRAINT strapi_api_tokens_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_api_tokens strapi_api_tokens_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_api_tokens
    ADD CONSTRAINT strapi_api_tokens_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_transfer_token_permissions strapi_transfer_token_permissions_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions
    ADD CONSTRAINT strapi_transfer_token_permissions_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_transfer_token_permissions_token_links strapi_transfer_token_permissions_token_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions_token_links
    ADD CONSTRAINT strapi_transfer_token_permissions_token_links_fk FOREIGN KEY (transfer_token_permission_id) REFERENCES public.strapi_transfer_token_permissions(id) ON DELETE CASCADE;


--
-- Name: strapi_transfer_token_permissions_token_links strapi_transfer_token_permissions_token_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions_token_links
    ADD CONSTRAINT strapi_transfer_token_permissions_token_links_inv_fk FOREIGN KEY (transfer_token_id) REFERENCES public.strapi_transfer_tokens(id) ON DELETE CASCADE;


--
-- Name: strapi_transfer_token_permissions strapi_transfer_token_permissions_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_transfer_token_permissions
    ADD CONSTRAINT strapi_transfer_token_permissions_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_transfer_tokens strapi_transfer_tokens_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_transfer_tokens
    ADD CONSTRAINT strapi_transfer_tokens_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: strapi_transfer_tokens strapi_transfer_tokens_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.strapi_transfer_tokens
    ADD CONSTRAINT strapi_transfer_tokens_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: telegrams telegrams_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telegrams
    ADD CONSTRAINT telegrams_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: telegrams telegrams_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.telegrams
    ADD CONSTRAINT telegrams_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: themes themes_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.themes
    ADD CONSTRAINT themes_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: themes_components themes_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.themes_components
    ADD CONSTRAINT themes_entity_fk FOREIGN KEY (entity_id) REFERENCES public.themes(id) ON DELETE CASCADE;


--
-- Name: themes themes_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.themes
    ADD CONSTRAINT themes_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: tiers tiers_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers
    ADD CONSTRAINT tiers_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: tiers_currency_links tiers_currency_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers_currency_links
    ADD CONSTRAINT tiers_currency_links_fk FOREIGN KEY (tier_id) REFERENCES public.tiers(id) ON DELETE CASCADE;


--
-- Name: tiers_currency_links tiers_currency_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers_currency_links
    ADD CONSTRAINT tiers_currency_links_inv_fk FOREIGN KEY (currency_id) REFERENCES public.currencies(id) ON DELETE CASCADE;


--
-- Name: tiers_components tiers_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers_components
    ADD CONSTRAINT tiers_entity_fk FOREIGN KEY (entity_id) REFERENCES public.tiers(id) ON DELETE CASCADE;


--
-- Name: tiers_localizations_links tiers_localizations_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers_localizations_links
    ADD CONSTRAINT tiers_localizations_links_fk FOREIGN KEY (tier_id) REFERENCES public.tiers(id) ON DELETE CASCADE;


--
-- Name: tiers_localizations_links tiers_localizations_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers_localizations_links
    ADD CONSTRAINT tiers_localizations_links_inv_fk FOREIGN KEY (inv_tier_id) REFERENCES public.tiers(id) ON DELETE CASCADE;


--
-- Name: tiers tiers_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tiers
    ADD CONSTRAINT tiers_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: topbars topbars_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topbars
    ADD CONSTRAINT topbars_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: topbars_components topbars_entity_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topbars_components
    ADD CONSTRAINT topbars_entity_fk FOREIGN KEY (entity_id) REFERENCES public.topbars(id) ON DELETE CASCADE;


--
-- Name: topbars_localizations_links topbars_localizations_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topbars_localizations_links
    ADD CONSTRAINT topbars_localizations_links_fk FOREIGN KEY (topbar_id) REFERENCES public.topbars(id) ON DELETE CASCADE;


--
-- Name: topbars_localizations_links topbars_localizations_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topbars_localizations_links
    ADD CONSTRAINT topbars_localizations_links_inv_fk FOREIGN KEY (inv_topbar_id) REFERENCES public.topbars(id) ON DELETE CASCADE;


--
-- Name: topbars topbars_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topbars
    ADD CONSTRAINT topbars_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_permissions up_permissions_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions
    ADD CONSTRAINT up_permissions_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_permissions_role_links up_permissions_role_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions_role_links
    ADD CONSTRAINT up_permissions_role_links_fk FOREIGN KEY (permission_id) REFERENCES public.up_permissions(id) ON DELETE CASCADE;


--
-- Name: up_permissions_role_links up_permissions_role_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions_role_links
    ADD CONSTRAINT up_permissions_role_links_inv_fk FOREIGN KEY (role_id) REFERENCES public.up_roles(id) ON DELETE CASCADE;


--
-- Name: up_permissions up_permissions_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_permissions
    ADD CONSTRAINT up_permissions_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_roles up_roles_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_roles
    ADD CONSTRAINT up_roles_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_roles up_roles_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_roles
    ADD CONSTRAINT up_roles_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_users up_users_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_users
    ADD CONSTRAINT up_users_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: up_users_role_links up_users_role_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_users_role_links
    ADD CONSTRAINT up_users_role_links_fk FOREIGN KEY (user_id) REFERENCES public.up_users(id) ON DELETE CASCADE;


--
-- Name: up_users_role_links up_users_role_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_users_role_links
    ADD CONSTRAINT up_users_role_links_inv_fk FOREIGN KEY (role_id) REFERENCES public.up_roles(id) ON DELETE CASCADE;


--
-- Name: up_users up_users_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.up_users
    ADD CONSTRAINT up_users_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: upload_folders upload_folders_created_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upload_folders
    ADD CONSTRAINT upload_folders_created_by_id_fk FOREIGN KEY (created_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- Name: upload_folders_parent_links upload_folders_parent_links_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upload_folders_parent_links
    ADD CONSTRAINT upload_folders_parent_links_fk FOREIGN KEY (folder_id) REFERENCES public.upload_folders(id) ON DELETE CASCADE;


--
-- Name: upload_folders_parent_links upload_folders_parent_links_inv_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upload_folders_parent_links
    ADD CONSTRAINT upload_folders_parent_links_inv_fk FOREIGN KEY (inv_folder_id) REFERENCES public.upload_folders(id) ON DELETE CASCADE;


--
-- Name: upload_folders upload_folders_updated_by_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.upload_folders
    ADD CONSTRAINT upload_folders_updated_by_id_fk FOREIGN KEY (updated_by_id) REFERENCES public.admin_users(id) ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

